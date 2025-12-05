import React, { useState } from 'react';

interface DownloadButtonProps {
  pdfUrl: string; 
  fileName?: string; 
}

export default function DownloadButton({ pdfUrl = './MAGBANUA, PAUL JHON - CV.pdf', fileName = 'Paul Jhon Magbanua | CV.pdf' }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (loading) return; 
    
    setLoading(true);
    
    try {
      const response = await fetch(pdfUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName; 
      
      document.body.appendChild(link);
      link.click();
      
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the file. Check console for details.'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading} 
      className="bg-whiteBackground border-2 border-black rounded-4xl py-2 px-7 hover:border-green font-primary text-green flex items-center justify-center gap-2 mx-auto"
    >
      {/* Spinner Animation */}
      {loading && (
        // Tailwind CSS for a basic spinner: rounded-full, border-t-transparent creates the gap, animate-spin for rotation
        <span className="w-4 h-4 border-2 border-green border-t-transparent rounded-full animate-spin"></span>
      )}
      
      {/* Button Text changes based on loading state */}
      {loading ? 'Downloading...' : 'Download My CV!'}
    </button>
  );
}