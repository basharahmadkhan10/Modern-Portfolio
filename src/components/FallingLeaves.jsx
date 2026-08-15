import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLeaf } from '../context/LeafContext';

export default function FallingLeaves() {
  const { theme } = useTheme();
  const { leavesEnabled } = useLeaf();
  const leaves = useMemo(() => {
    return [...Array(30)].map((_, i) => {
      const endX = 200 + Math.random() * 1500;
      
      const swayX1 = endX * 0.3 + (Math.random() * 150 - 75);
      const swayX2 = endX * 0.7 + (Math.random() * 200 - 100);

      return {
        id: i,
        delay: Math.random() * 5,
        duration: 18 + Math.random() * 10, 
        scale: Math.random() * 0.3 + 0.4,
        x: [0, -swayX1, -swayX2, -endX],
        y: [0, 400, 800, 1500],
        rotate: [
          0,
          Math.random() * 180 - 90,
          Math.random() * 360 - 180,
          Math.random() * 720 - 360
        ]
      };
    });
  }, []);

  if (!leavesEnabled) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden mix-blend-normal">
      {leaves.map((leaf) => (
        <motion.div
          key={`global-leaf-${leaf.id}`}
          initial={{ 
            x: 0, 
            y: 0, 
            rotate: 0, 
            opacity: 0,
            scale: leaf.scale 
          }}
          animate={{ 
            x: leaf.x, 
            y: leaf.y, 
            rotate: leaf.rotate, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
          className="absolute w-5 h-5 bg-pink-400/80 dark:bg-white/70 rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm blur-[0.5px] shadow-[0_0_8px_rgba(244,114,182,0.6)] dark:shadow-[0_0_8px_rgba(255,255,255,0.6)] will-change-transform"
          style={{
            top: '2.5rem', 
            right: '2.5rem', 
          }}
        />
      ))}
    </div>
  );
}
