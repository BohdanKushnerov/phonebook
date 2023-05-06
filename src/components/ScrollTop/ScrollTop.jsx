import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <Fab
      sx={{
        display: isVisible ? 'flex' : 'none',
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        backgroundColor: '#6a815b',
      }}
      color="inherit"
      aria-label="scroll to top"
      onClick={scrollToTop}
    >
      <NavigationIcon />
    </Fab>
  );
}
