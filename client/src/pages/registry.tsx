import { motion } from "framer-motion";
import { Heart, ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";
import ConfettiBackground from "@/components/confetti-background";

export default function Registry() {
  const [, navigate] = useLocation();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 relative">
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
              <span className="text-[hsl(342,69%,29%)] font-serif font-medium border-b-2 border-[hsl(342,69%,29%)]">
                Registry
              </span>
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
          <h1 className="text-6xl md:text-8xl font-serif text-[hsl(342,69%,29%)] mb-8">
            REGISTRY
          </h1>

          {/* Hero Image */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Beautiful couple"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-serif text-[hsl(342,69%,29%)] mb-6">
                Thank you for checking in on Us. 😃
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                We truly appreciate your presence at our wedding. 🙏🏾
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Gift Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <h2 className="text-3xl font-serif text-[hsl(342,69%,29%)] mb-6 text-center">
              Would you like to gift us?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              Having you at our wedding is the best gift we could ask for but if you would like to bless us with a cash gift, 
              we would truly appreciate it. Kindly find account details below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* USD Account */}
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif text-green-800 mb-6 text-center">$USD</h3>
                <div className="space-y-4">
                  <div>
                    <label className="font-semibold text-green-700 block mb-1">Bank Name:</label>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="text-gray-800">Lead Bank</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Lead Bank", "bank-usd")}
                        className="text-green-600 hover:text-green-800"
                      >
                        {copiedField === "bank-usd" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-green-700 block mb-1">Account Number:</label>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="text-gray-800">211163111348</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("211163111348", "account-usd")}
                        className="text-green-600 hover:text-green-800"
                      >
                        {copiedField === "account-usd" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-green-700 block mb-1">ACH Routing:</label>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="text-gray-800">101019644</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("101019644", "ach-usd")}
                        className="text-green-600 hover:text-green-800"
                      >
                        {copiedField === "ach-usd" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-green-700 block mb-1">Wire Routing:</label>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="text-gray-800">101019644</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("101019644", "wire-usd")}
                        className="text-green-600 hover:text-green-800"
                      >
                        {copiedField === "wire-usd" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-green-700 block mb-1">Account Type:</label>
                    <div className="bg-white p-3 rounded border">
                      <span className="text-gray-800">Checking</span>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-green-700 block mb-1">Bank Address:</label>
                    <div className="bg-white p-3 rounded border">
                      <span className="text-gray-800">1801 Main St., Kansas City, MO 64108</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* NGN Account */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif text-blue-800 mb-6 text-center">₦NGN</h3>
                <div className="space-y-4">
                  <div>
                    <label className="font-semibold text-blue-700 block mb-1">Bank:</label>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="text-gray-800">Access Bank</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Access Bank", "bank-ngn")}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {copiedField === "bank-ngn" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-blue-700 block mb-1">Account Number:</label>
                    <div className="flex items-center justify-between bg-white p-3 rounded border">
                      <span className="text-gray-800">0725312756</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("0725312756", "account-ngn")}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {copiedField === "account-ngn" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Thank You */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-script text-[hsl(342,69%,29%)] mb-8">
            Thank you
          </h2>
          <Button 
            onClick={() => navigate("/schedule")}
            className="bg-[hsl(342,69%,29%)] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-[hsl(342,60%,40%)] transition-colors shadow-lg"
          >
            View Wedding Schedule
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