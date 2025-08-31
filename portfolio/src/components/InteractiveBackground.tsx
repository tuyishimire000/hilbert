'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  delay: number;
  duration: number;
}

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements: FloatingElement[] = [
    { id: 1, x: 10, y: 20, rotation: 0, scale: 0.8, delay: 0, duration: 20 },
    { id: 2, x: 80, y: 15, rotation: 45, scale: 1.2, delay: 2, duration: 25 },
    { id: 3, x: 20, y: 70, rotation: 90, scale: 0.6, delay: 4, duration: 18 },
    { id: 4, x: 85, y: 80, rotation: 135, scale: 1.0, delay: 6, duration: 22 },
    { id: 5, x: 50, y: 10, rotation: 180, scale: 0.9, delay: 8, duration: 30 },
    { id: 6, x: 15, y: 85, rotation: 225, scale: 0.7, delay: 10, duration: 16 },
    { id: 7, x: 90, y: 60, rotation: 270, scale: 1.1, delay: 12, duration: 24 },
    { id: 8, x: 70, y: 30, rotation: 315, scale: 0.8, delay: 14, duration: 28 },
  ];

  const luxuryTechSVGs = [
    // Crown/Diadem
    <svg key="crown" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M10 40L20 25L30 35L40 25L50 40L45 45H15L10 40Z" fill="url(#crownGradient)" stroke="#d4af37" strokeWidth="1"/>
      <circle cx="20" cy="20" r="3" fill="#d4af37"/>
      <circle cx="30" cy="15" r="3" fill="#d4af37"/>
      <circle cx="40" cy="20" r="3" fill="#d4af37"/>
      <defs>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#f4e4a6" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>,
    
    // Diamond/Gem
    <svg key="diamond" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M25 5L40 25L25 45L10 25L25 5Z" fill="url(#diamondGradient)" stroke="#d4af37" strokeWidth="1"/>
      <path d="M25 5L25 45" stroke="#d4af37" strokeWidth="0.5" opacity="0.5"/>
      <path d="M10 25L40 25" stroke="#d4af37" strokeWidth="0.5" opacity="0.5"/>
      <defs>
        <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#f4e4a6" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>,
    
    // Tech Circuit
    <svg key="circuit" width="70" height="70" viewBox="0 0 70 70" fill="none">
      <rect x="10" y="10" width="50" height="50" rx="5" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.3"/>
      <circle cx="20" cy="20" r="2" fill="#d4af37"/>
      <circle cx="50" cy="20" r="2" fill="#d4af37"/>
      <circle cx="20" cy="50" r="2" fill="#d4af37"/>
      <circle cx="50" cy="50" r="2" fill="#d4af37"/>
      <path d="M20 20L50 20" stroke="#d4af37" strokeWidth="1" opacity="0.5"/>
      <path d="M20 20L20 50" stroke="#d4af37" strokeWidth="1" opacity="0.5"/>
      <path d="M50 20L50 50" stroke="#d4af37" strokeWidth="1" opacity="0.5"/>
      <path d="M20 50L50 50" stroke="#d4af37" strokeWidth="1" opacity="0.5"/>
      <circle cx="35" cy="35" r="3" fill="#d4af37" opacity="0.6"/>
    </svg>,
    
    // Luxury Star
    <svg key="star" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M27.5 5L33.5 20L50 20L37.5 30L43.5 45L27.5 35L11.5 45L17.5 30L5 20L21.5 20L27.5 5Z" fill="url(#starGradient)" stroke="#d4af37" strokeWidth="1"/>
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#f4e4a6" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>,
    
    // Hexagon Tech
    <svg key="hexagon" width="65" height="65" viewBox="0 0 65 65" fill="none">
      <path d="M32.5 5L55 20L55 40L32.5 55L10 40L10 20L32.5 5Z" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.4"/>
      <path d="M32.5 5L32.5 55" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
      <path d="M10 20L55 20" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
      <path d="M10 40L55 40" stroke="#d4af37" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="32.5" cy="32.5" r="8" fill="#d4af37" opacity="0.2"/>
    </svg>,
    
    // Noble Shield
    <svg key="shield" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M30 5L50 15V30C50 40 40 50 30 55C20 50 10 40 10 30V15L30 5Z" fill="url(#shieldGradient)" stroke="#d4af37" strokeWidth="1"/>
      <path d="M30 15L40 20V30C40 35 35 40 30 42C25 40 20 35 20 30V20L30 15Z" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.6"/>
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#f4e4a6" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
    </svg>,
    
    // Tech Grid
    <svg key="grid" width="75" height="75" viewBox="0 0 75 75" fill="none">
      <rect x="5" y="5" width="65" height="65" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.3"/>
      <line x1="25" y1="5" x2="25" y2="70" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
      <line x1="50" y1="5" x2="50" y2="70" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
      <line x1="5" y1="25" x2="70" y2="25" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
      <line x1="5" y1="50" x2="70" y2="50" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="37.5" cy="37.5" r="4" fill="#d4af37" opacity="0.5"/>
    </svg>,
    
    // Luxury Flower
    <svg key="flower" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <circle cx="27.5" cy="27.5" r="8" fill="#d4af37" opacity="0.3"/>
      <path d="M27.5 5C27.5 5 30 15 35 20C40 25 50 27.5 50 27.5C50 27.5 40 30 35 35C30 40 27.5 50 27.5 50C27.5 50 25 40 20 35C15 30 5 27.5 5 27.5C5 27.5 15 25 20 20C25 15 27.5 5 27.5 5Z" fill="url(#flowerGradient)" stroke="#d4af37" strokeWidth="1"/>
      <defs>
        <linearGradient id="flowerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#f4e4a6" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
    </svg>,
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate(-50%, -50%) scale(${element.scale})`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
            x: isClient ? [0, mousePosition.x * 10, 0] : [0, 0, 0],
            scale: [element.scale, element.scale * 1.1, element.scale],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {luxuryTechSVGs[index % luxuryTechSVGs.length]}
        </motion.div>
      ))}
      
      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          // Use a deterministic seed based on index to avoid hydration mismatch
          const seed = i * 0.1;
          const left = ((Math.sin(seed * 100) + 1) / 2) * 100;
          const top = ((Math.cos(seed * 100) + 1) / 2) * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + (seed * 10),
              delay: seed * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
        })}
      </div>
      
      {/* Subtle Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent" />
      
      {/* Interactive Glow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: isClient ? mousePosition.x * 100 : 0,
          y: isClient ? mousePosition.y * 100 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />
    </div>
  );
}
