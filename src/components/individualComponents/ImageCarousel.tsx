import React, { useEffect, useRef, useState, useCallback } from "react";

interface CarouselProps {
  images: string[];
  speed?: number; // Speed in pixels per frame
}

const Carousel: React.FC<CarouselProps> = ({ images, speed = 1 }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [position, setPosition] = useState(0); // This will control translateX
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // Offset during drag

  // --- 1. Measure the Track Width ---
  useEffect(() => {
    // We need the width of the *first* set of images to know the loop point
    if (trackRef.current) {
      // trackRef.current.scrollWidth gives the total content width
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, [images]);

  // --- 2. Auto-Scroll Logic (requestAnimationFrame) ---
  useEffect(() => {
    if (trackWidth === 0) return; // Wait until width is measured

    let animationFrameId: number;
    let lastTime = performance.now();
    const frameSpeed = speed; // Pixels to move per frame

    const step = (currentTime: number) => {
      if (!isDragging) {
        // Time difference helps smooth frame rate variations
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        setPosition((prevPosition) => {
          // Standard Marquee: Move LEFT (position decreases)
          let newPos = prevPosition - (frameSpeed * (deltaTime / 16.67)); 

          // Loop Logic: If position moves past the loop point (trackWidth), wrap it back around
          // trackWidth is the negative distance where the content is off-screen.
          if (newPos <= -trackWidth) {
            newPos = newPos % trackWidth; // Use modulo for wrap
            if (newPos === 0) newPos = -1; // Avoid visual flash at position 0
          }
          return newPos;
        });
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, speed, trackWidth]);


  // --- 3. Drag Logic ---

  // Mouse Down / Touch Start
  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true);
    // When starting drag, calculate the mouse X relative to the current position
    setDragOffset(clientX - position); 
  }, [position]);

  // Mouse Move / Touch Move
  const handleMove = useCallback((clientX: number, event: React.SyntheticEvent) => {
    if (!isDragging) return;
    event.preventDefault();

    let newPos = clientX - dragOffset;

    // Optional: Add manual wrapping during drag to prevent large offsets
    if (trackWidth > 0) {
        newPos = newPos % trackWidth;
    }
    
    setPosition(newPos);
  }, [isDragging, dragOffset, trackWidth]);

  // Mouse Up / Touch End
  const handleEnd = useCallback(() => {
    setIsDragging(false);
    // Optional: Add inertia/flick logic here if you want physics
  }, []);

  // Event Handlers adapted for both Mouse and Touch
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e);
  const onMouseUp = handleEnd;
  const onMouseLeave = handleEnd; 
  
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX, e);
  const onTouchEnd = handleEnd;
  const onTouchCancel = handleEnd;

  return (
    <div className="relative w-full overflow-hidden">
      {/* The main scrolling element */}
      <div
        ref={trackRef}
        style={{ transform: `translateX(${position}px)` }} // Apply the translation here
        className="flex gap-4 cursor-grab active:cursor-grabbing select-none whitespace-nowrap"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
      >
        {/* Render content 3 times for a seamless loop *with* translation */}
        {/* Why 3 times? To ensure content exists both to the left AND to the right of the visible screen 
            at the point of the wrap jump, which is essential when using translateX. */}
        {[...images, ...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-20 w-auto shrink-0 rounded-lg object-cover pointer-events-none" 
            alt={`carousel-item-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;