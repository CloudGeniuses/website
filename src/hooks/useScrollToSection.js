// useScrollToSection.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const useScrollToSection = (sectionId, shouldScroll) => {
  const location = useLocation();

  useEffect(() => {
    if (shouldScroll && location.pathname === "/") {
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 500 });
      }, 0); // This small timeout ensures the scroll happens after the render
    }
  }, [location, shouldScroll, sectionId]);
};

export default useScrollToSection;
