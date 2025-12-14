import { useEffect } from "react";

export default function useSectionTitle(sectionIds: string[]) {
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6, // 60% of section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("id");
          if (sectionName) {
            document.title = `${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} | Paul Jhon Magbanua`;
          }
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
