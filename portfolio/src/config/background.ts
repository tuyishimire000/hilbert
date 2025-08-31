export const backgroundConfig = {
  // Enable/disable interactive background
  enabled: true,
  
  // Number of floating elements
  floatingElements: 8,
  
  // Number of particle effects
  particles: 20,
  
  // Animation speeds (in seconds)
  animation: {
    slow: 30,
    medium: 20,
    fast: 16,
  },
  
  // Mouse interaction sensitivity
  mouseSensitivity: {
    x: 10,
    y: 10,
  },
  
  // Element scaling range
  scaling: {
    min: 0.6,
    max: 1.2,
  },
  
  // Opacity settings
  opacity: {
    elements: 0.8,
    particles: 0.3,
    glow: 0.1,
  },
  
  // Colors (using luxury theme)
  colors: {
    primary: '#d4af37', // Gold
    secondary: '#f4e4a6', // Light gold
    accent: '#yellow-400', // Yellow accent
  },
  
  // Performance settings
  performance: {
    // Reduce animations on mobile
    mobileOptimized: true,
    // Limit animations on low-end devices
    lowEndOptimized: true,
  }
};
