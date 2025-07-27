import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import ConfettiBackground from "@/components/confetti-background";

export default function Gallery() {
  const [, navigate] = useLocation();

  const galleryPhotos = [
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Beautiful couple portrait"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Dancing moment"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Elegant formal wear"
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Romantic couple moment"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Wedding rings and flowers"
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Beautiful wedding bouquet"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Wedding ceremony setup"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Groom in formal attire"
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Wedding celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
      alt: "Couple laughing together"
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50 relative">
      <ConfettiBackground />
      
      {/* Header */}
      <header className="bg-rose-50/90 backdrop-blur-md py-6 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Button>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigate("/")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigate("/our-story")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                Our Story
              </button>
              <span className="text-[hsl(342,69%,29%)] font-serif font-medium border-b-2 border-[hsl(342,69%,29%)]">
                Gallery
              </span>
            </nav>

            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => navigate("/registry")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                Registry
              </button>
              <button 
                onClick={() => navigate("/schedule")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                Schedule
              </button>
              <button 
                onClick={() => navigate("/schedule#rsvp")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                RSVP
              </button>
            </div>

            {/* Logo/Monogram */}
            <div className="w-12 h-12 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center">
              <span className="text-white font-script text-xl font-bold">O&J</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-script text-[hsl(342,69%,29%)] mb-8">
            Gallery
          </h1>

          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ❤️
            </motion.div>
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🌸
            </motion.div>
            <motion.div 
              className="w-16 h-16 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className={`
                overflow-hidden rounded-xl shadow-lg group cursor-pointer
                ${index === 0 ? 'col-span-1 sm:col-span-2 row-span-2' : ''}
                ${index === 2 ? 'sm:col-span-1 lg:col-span-2' : ''}
              `}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className={`
                  w-full object-cover group-hover:scale-105 transition-transform duration-500
                  ${index === 0 ? 'h-96 sm:h-full' : 'h-48 sm:h-64'}
                `}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            onClick={() => navigate("/schedule")}
            className="bg-[hsl(342,69%,29%)] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-[hsl(342,60%,40%)] transition-colors shadow-lg"
          >
            View Wedding Details
          </Button>
        </motion.div>

        {/* Bottom Banner */}
        <div className="fixed bottom-0 left-0 right-0 bg-[hsl(342,69%,29%)] text-white py-3 text-center z-30">
          <div className="flex justify-center items-center space-x-6 text-sm">
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Programme</button>
            <span>|</span>
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Calendar</button>
            <span>|</span>
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Get Direction</button>
            <span>|</span>
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Check Table No.</button>
          </div>
        </div>
      </div>
    </div>
  );
}