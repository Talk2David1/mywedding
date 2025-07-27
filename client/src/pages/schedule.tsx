import { motion } from "framer-motion";
import { Heart, ArrowLeft, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";
import CountdownTimer from "@/components/countdown-timer";
import ConfettiBackground from "@/components/confetti-background";

export default function Schedule() {
  const [, navigate] = useLocation();
  const [rsvpForm, setRsvpForm] = useState({
    hasInvite: "",
    willAttend: "",
    fullName: "",
    email: ""
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle RSVP submission
    console.log("RSVP submitted:", rsvpForm);
  };

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
              <button 
                onClick={() => navigate("/gallery")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                Gallery
              </button>
            </nav>

            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => navigate("/registry")}
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                Registry
              </button>
              <span className="text-[hsl(342,69%,29%)] font-serif font-medium border-b-2 border-[hsl(342,69%,29%)]">
                Schedule
              </span>
              <a 
                href="#rsvp"
                className="text-[hsl(342,69%,29%)] hover:text-[hsl(342,60%,40%)] font-serif font-medium transition-colors"
              >
                RSVP
              </a>
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
                <div>
                  <label className="block text-[hsl(342,69%,29%)] font-semibold mb-3">
                    Did you receive an invite card via WhatsApp? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="hasInvite" 
                        value="no"
                        onChange={(e) => setRsvpForm(prev => ({ ...prev, hasInvite: e.target.value }))}
                        className="mr-2" 
                      />
                      No
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="hasInvite" 
                        value="yes"
                        onChange={(e) => setRsvpForm(prev => ({ ...prev, hasInvite: e.target.value }))}
                        className="mr-2" 
                      />
                      Yes
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[hsl(342,69%,29%)] font-semibold mb-3">
                    Will you be Attending? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="willAttend" 
                        value="no"
                        onChange={(e) => setRsvpForm(prev => ({ ...prev, willAttend: e.target.value }))}
                        className="mr-2" 
                      />
                      No
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="willAttend" 
                        value="yes"
                        onChange={(e) => setRsvpForm(prev => ({ ...prev, willAttend: e.target.value }))}
                        className="mr-2" 
                      />
                      Yes
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[hsl(342,69%,29%)] font-semibold mb-3">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    value={rsvpForm.fullName}
                    onChange={(e) => setRsvpForm(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(342,69%,29%)]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[hsl(342,69%,29%)] font-semibold mb-3">
                    Email *
                  </label>
                  <input 
                    type="email"
                    value={rsvpForm.email}
                    onChange={(e) => setRsvpForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(342,69%,29%)]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[hsl(342,69%,29%)] text-white py-3 rounded-lg font-medium hover:bg-[hsl(342,60%,40%)] transition-colors"
                >
                  RSVP
                </Button>
              </form>
            </Card>
          </motion.div>
        </section>

        {/* Wedding Schedule Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                02
              </div>
              <h2 className="text-3xl font-serif text-[hsl(342,69%,29%)]">Wedding Schedule</h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are thrilled to share this day with you & look forward to your presence at our wedding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Wedding Ceremony */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    01
                  </div>
                  <h3 className="text-2xl font-serif text-[hsl(342,69%,29%)]">Wedding Ceremony</h3>
                </div>
                
                <p className="text-gray-700 mb-8">
                  Join us as we take our vows. Please arrive 15 minutes early to be seated before the ceremony begins
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[hsl(342,69%,29%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(342,69%,29%)]">Date</h4>
                      <p className="text-gray-700">2nd August, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[hsl(342,69%,29%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(342,69%,29%)]">Time</h4>
                      <p className="text-gray-700">11:00AM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[hsl(342,69%,29%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(342,69%,29%)]">RSVP</h4>
                      <p className="text-gray-700">+234 905 896 8649</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[hsl(342,69%,29%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(342,69%,29%)]">Location</h4>
                      <p className="text-gray-700">Aquila Events Hub, No 40 Tos Benson Road Ikorodu Ikorodu, Lagos 100001</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Reception */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[hsl(332,51%,70%)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    02
                  </div>
                  <h3 className="text-2xl font-serif text-[hsl(342,69%,29%)]">Reception Celebration</h3>
                </div>
                
                <p className="text-gray-700 mb-8">
                  Join as we celebrate our love.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[hsl(332,51%,70%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(332,51%,70%)]">Date</h4>
                      <p className="text-gray-700">2nd August, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[hsl(332,51%,70%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(332,51%,70%)]">Time</h4>
                      <p className="text-gray-700">01:00PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[hsl(332,51%,70%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(332,51%,70%)]">RSVP</h4>
                      <p className="text-gray-700">+234 905 896 8649</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[hsl(332,51%,70%)]" />
                    <div>
                      <h4 className="font-semibold text-[hsl(332,51%,70%)]">Location</h4>
                      <p className="text-gray-700">Aquila Events Hub, No 40 Tos Benson Road Ikorodu Ikorodu, Lagos 100001</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Action Buttons */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open("https://www.google.com/maps/dir//No+40+Tos+Benson+Road+Ikorodu+Ikorodu,+Lagos+100001/@6.610135,3.4171,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103bedfd34f99b21:0x9d368bcb9e60e186!2m2!1d3.4995019!2d6.6101418", "_blank")}
              className="bg-[hsl(342,69%,29%)] text-white px-8 py-3 rounded-full font-medium hover:bg-[hsl(342,60%,40%)] transition-colors"
            >
              Get Directions
            </Button>
            <Button 
              onClick={() => navigate("/gallery")}
              variant="outline"
              className="border-[hsl(342,69%,29%)] text-[hsl(342,69%,29%)] px-8 py-3 rounded-full font-medium hover:bg-[hsl(342,69%,29%)] hover:text-white transition-colors"
            >
              View Gallery
            </Button>
          </div>
        </motion.div>

        {/* Bottom Banner */}
        <div className="fixed bottom-0 left-0 right-0 bg-[hsl(342,69%,29%)] text-white py-3 text-center z-30">
          <div className="flex justify-center items-center space-x-6 text-sm">
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Programme</button>
            <span>|</span>
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Calendar</button>
            <span>|</span>
            <button 
              onClick={() => window.open("https://www.google.com/maps/dir//No+40+Tos+Benson+Road+Ikorodu+Ikorodu,+Lagos+100001", "_blank")}
              className="hover:text-[hsl(332,51%,70%)] transition-colors"
            >
              Get Direction
            </button>
            <span>|</span>
            <button className="hover:text-[hsl(332,51%,70%)] transition-colors">Check Table No.</button>
          </div>
        </div>
      </div>
    </div>
  );
}