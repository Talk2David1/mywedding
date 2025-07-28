import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-[hsl(342,69%,29%)] text-white overflow-hidden">
      <div className="relative">
        <motion.div 
          className="flex space-x-8 whitespace-nowrap text-2xl font-script"
          animate={{ x: [0, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} className="inline-block">
              ● Love like this ● #lovelikethis ● #FJO2025 ●
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
} 