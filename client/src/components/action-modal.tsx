import { motion } from "framer-motion";
import { MapPin, Grid3X3, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActionModal({ isOpen, onClose }: ActionModalProps) {
  const actions = [
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Get Direction",
      onClick: () => {
        // Handle get direction
        onClose();
      }
    },
    {
      icon: <Grid3X3 className="h-5 w-5" />,
      text: "Check Table Number",
      onClick: () => {
        // Handle check table number
        onClose();
      }
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      text: "Add to Google Calendar",
      onClick: () => {
        // Handle add to Google calendar
        onClose();
      }
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      text: "Add to Outlook Calendar",
      onClick: () => {
        // Handle add to Outlook calendar
        onClose();
      }
    },
    {
      icon: <Download className="h-5 w-5" />,
      text: "Download Order of Service",
      onClick: () => {
        // Handle download
        onClose();
      }
    }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
            {/* Modal Content */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-[100] -translate-y-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-xl w-80 md:w-96 lg:w-[28rem] max-w-[90vw] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* White body with buttons */}
          <div className="p-6 space-y-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`w-full justify-start gap-3 h-14 rounded-xl font-medium ${
                  index === 0 
                    ? "bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100" 
                    : "bg-[hsl(342,69%,29%)] text-white hover:bg-[hsl(342,60%,40%)]"
                }`}
                onClick={action.onClick}
              >
                {action.icon}
                {action.text}
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 