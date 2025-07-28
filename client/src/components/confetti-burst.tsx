import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocity: {
    x: number;
    y: number;
  };
}

export default function ConfettiBurst() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(true);

  const colors = [
    "hsl(342, 69%, 29%)", // burgundy
    "hsl(332, 51%, 70%)", // rose
    "hsl(350, 100%, 88%)", // light pink
    "hsl(0, 0%, 100%)", // white
    "hsl(45, 100%, 85%)", // light gold
  ];

  useEffect(() => {
    // Create initial burst of confetti
    const pieces: ConfettiPiece[] = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 3;

    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        x: centerX + (Math.random() - 0.5) * 400,
        y: centerY + (Math.random() - 0.5) * 150,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 12 + 6,
        rotation: Math.random() * 360,
        velocity: {
          x: (Math.random() - 0.5) * 600,
          y: Math.random() * -400 - 150,
        },
      });
    }

    setConfetti(pieces);

    // Remove confetti after animation
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
          }}
          initial={{
            x: piece.x,
            y: piece.y,
            rotate: piece.rotation,
            opacity: 1,
          }}
          animate={{
            x: piece.x + piece.velocity.x,
            y: piece.y + piece.velocity.y + 500,
            rotate: piece.rotation + 360,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}