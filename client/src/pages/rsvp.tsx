import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import CountdownTimer from "@/components/countdown-timer";
import ConfettiBackground from "@/components/confetti-background";
import ConfettiBurst from "@/components/confetti-burst";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";
import confetti from "canvas-confetti";

export default function RSVP() {
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    message: ""
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP submitted:", rsvpForm);
    
    // Fire confetti burst on RSVP submission
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: [
        '#f472b6', '#ec4899', '#db2777', '#be185d', '#fbbf24',
        '#f59e0b', '#10b981', '#059669', '#3b82f6', '#1d4ed8',
        '#8b5cf6', '#7c3aed', '#ef4444', '#dc2626', '#ffffff',
      ],
      shapes: ['circle', 'square'],
      gravity: 0.8,
      ticks: 200,
      startVelocity: 30,
      decay: 0.95,
    });
    
    // Reset form
    setRsvpForm({
      name: "",
      email: "",
      attendance: "",
      guests: "1",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-rose-50 relative">
      <ConfettiBackground />
      <ConfettiBurst />
      
      <NavigationBar currentPage="rsvp" />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[hsl(342,69%,29%)] mb-8">
            RSVP TO OUR <span className="text-[hsl(332,51%,70%)]">WEDDING</span>
          </h1>

          {/* Countdown Timer */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <CountdownTimer targetDate="2025-08-02T00:00:00" />
          </motion.div>
        </motion.div>

        {/* RSVP Section */}
        <section className="mb-20">
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  01
                </div>
                <h2 className="text-3xl font-serif text-[hsl(342,69%,29%)]">RSVP FORM</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                Please take a moment to let us know if you'll be able to join us by filling out the contact form below.
              </p>

              <form onSubmit={handleRsvpSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpForm.name}
                    onChange={(e) => setRsvpForm({...rsvpForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(342,69%,29%)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={rsvpForm.email}
                    onChange={(e) => setRsvpForm({...rsvpForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(342,69%,29%)] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Will you attend? *
                    </label>
                    <select
                      required
                      value={rsvpForm.attendance}
                      onChange={(e) => setRsvpForm({...rsvpForm, attendance: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(342,69%,29%)] focus:border-transparent"
                    >
                      <option value="">Please select</option>
                      <option value="yes">Yes, I'll be there!</option>
                      <option value="no">Sorry, can't make it</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={rsvpForm.guests}
                      onChange={(e) => setRsvpForm({...rsvpForm, guests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(342,69%,29%)] focus:border-transparent"
                    >
                      <option value="1">Just me</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5+">5+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Message (Optional)
                  </label>
                  <textarea
                    value={rsvpForm.message}
                    onChange={(e) => setRsvpForm({...rsvpForm, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[hsl(342,69%,29%)] focus:border-transparent"
                    placeholder="Any special requests or messages for the couple..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[hsl(342,69%,29%)] text-white hover:bg-[hsl(342,60%,40%)] py-3 text-lg"
                >
                  Send RSVP
                </Button>
              </form>
            </Card>
          </motion.div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
} 