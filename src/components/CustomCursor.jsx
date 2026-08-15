import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Glowing Aura */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-accent rounded-full pointer-events-none z-[100]"
        style={{
          boxShadow: '0 0 15px var(--color-accent), inset 0 0 10px var(--color-accent)'
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.4 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
      />
      {/* Inner Glowing Ember Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[100]"
        style={{
          boxShadow: '0 0 10px var(--color-accent), 0 0 20px var(--color-accent)'
        }}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      />
    </>
  );
}
