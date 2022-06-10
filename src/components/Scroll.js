import React, { useState } from 'react';

const Scroll = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [scroll, setScroll] = useState('Down');

  function handleScroll() {
    if (!isScrolled) {
      window.scroll({
        top: document.body.offsetHeight,
        left:0,
        behavior: "smooth",
      });
      setScrolled(true);
      setScroll('Up');
    } else {
      window.scroll({
        top: 0,
        // left:0,
        behavior: "smooth",
      });
      setScrolled(false);
      setScroll('Down');
    }
    
  }

  return (
    <button 
      className="scroll" 
      type="button" 
      onClick={handleScroll}>Scroll {scroll}
    </button>
  );
}

export default Scroll;