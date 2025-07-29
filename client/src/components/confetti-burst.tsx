import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiBurst() {
  useEffect(() => {
    // Create a colorful confetti burst
    const fireConfetti = () => {
      // Multiple bursts for a more dramatic effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [
          '#f472b6', // pink
          '#ec4899', // rose
          '#db2777', // magenta
          '#be185d', // dark pink
          '#fbbf24', // amber
          '#f59e0b', // orange
          '#10b981', // emerald
          '#059669', // green
          '#3b82f6', // blue
          '#1d4ed8', // dark blue
          '#8b5cf6', // violet
          '#7c3aed', // purple
          '#ef4444', // red
          '#dc2626', // dark red
          '#ffffff', // white
        ],
        shapes: ['circle', 'square'],
        gravity: 0.8,
        ticks: 200,
        startVelocity: 30,
        decay: 0.95,
      });

      // Second burst with different timing
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: [
            '#f472b6', '#ec4899', '#db2777', '#be185d', '#fbbf24',
            '#f59e0b', '#10b981', '#059669', '#3b82f6', '#1d4ed8',
            '#8b5cf6', '#7c3aed', '#ef4444', '#dc2626', '#ffffff',
          ],
        });
      }, 250);

      // Third burst from the right side
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: [
            '#f472b6', '#ec4899', '#db2777', '#be185d', '#fbbf24',
            '#f59e0b', '#10b981', '#059669', '#3b82f6', '#1d4ed8',
            '#8b5cf6', '#7c3aed', '#ef4444', '#dc2626', '#ffffff',
          ],
      });
      }, 400);
    };

    // Fire confetti 2 times with delays
    fireConfetti(); // First burst immediately
    
    // Second burst after 3 seconds
    setTimeout(() => {
      fireConfetti();
    }, 3000);

    // Optional: Fire confetti on window focus (for when user returns to tab)
    const handleFocus = () => {
      // Only fire if it's been more than 5 seconds since page load
      if (Date.now() - performance.timing.navigationStart > 5000) {
        fireConfetti();
      }
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}