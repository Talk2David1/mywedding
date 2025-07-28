import { motion } from "framer-motion";
import { Heart, ArrowLeft, MapPin, Clock, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";
import CountdownTimer from "@/components/countdown-timer";
import ConfettiBackground from "@/components/confetti-background";
import ConfettiBurst from "@/components/confetti-burst";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

export default function Schedule() {
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
  };

  return (
    <div className="min-h-screen bg-rose-50 relative">
      <ConfettiBackground />
      <ConfettiBurst />
      
      <NavigationBar currentPage="schedule" />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[hsl(342,69%,29%)] mb-8">
            WE'RE GETTING <span className="text-[hsl(332,51%,70%)]">MARRIED!</span>
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

          {/* Hero Image */}
          <motion.div 
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600"
              alt="Beautiful couple portrait"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* RSVP Section */}
        <section id="rsvp" className="mb-20">
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
                <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="Your full name"
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
                      placeholder="your.email@example.com"
                    />
                  </div>
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
                    placeholder="Any special wishes or dietary requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full py-3 bg-[hsl(342,69%,29%)] hover:bg-[hsl(342,60%,40%)] text-white font-serif text-lg"
                >
                  Send RSVP
                </Button>
              </form>
            </Card>
          </motion.div>
        </section>

        {/* Event Details Section */}
        <section className="mb-20">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  02
                </div>
                <h2 className="text-3xl font-serif text-[hsl(342,69%,29%)]">EVENT DETAILS</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Date & Time */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-[hsl(342,69%,29%)]" />
                    <h3 className="text-xl font-serif text-[hsl(342,69%,29%)]">Date & Time</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-lg font-medium text-gray-800">Saturday, August 2nd, 2025</p>
                    <p className="text-gray-600">Ceremony begins at 11:00 AM</p>
                    <p className="text-gray-600">Reception to follow</p>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-[hsl(342,69%,29%)]" />
                    <h3 className="text-xl font-serif text-[hsl(342,69%,29%)]">Location</h3>
                  </div>
                  <div className="pl-9">
                    <p className="text-lg font-medium text-gray-800">Aquila Events Hub</p>
                    <p className="text-gray-600">Ikorodu, Lagos State</p>
                    <p className="text-gray-600">Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-[hsl(342,69%,29%)]" />
                  <h3 className="text-xl font-serif text-[hsl(342,69%,29%)]">Contact</h3>
                </div>
                <div className="pl-9">
                  <p className="text-gray-700">For any questions or special arrangements:</p>
                  <p className="text-lg font-medium text-gray-800 mt-2">+234 xxx xxx xxxx</p>
                  <p className="text-gray-600">We can't wait to celebrate with you!</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}