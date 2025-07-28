import { motion } from "framer-motion";
import { Heart, ArrowLeft, Copy, Check, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useState } from "react";
import ConfettiBackground from "@/components/confetti-background";
import ConfettiBurst from "@/components/confetti-burst";
import NavigationBar from "@/components/navigation-bar";
import Footer from "@/components/footer";

export default function Registry() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 relative">
      <ConfettiBackground />
      <ConfettiBurst />
      
      <NavigationBar currentPage="registry" />

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

            {/* Account Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Account 1 */}
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-serif text-[hsl(342,69%,29%)] mb-4 text-center">
                  Olufunbi's Account
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Olufunbi Adeboyejo</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Olufunbi Adeboyejo", "funbi-name")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "funbi-name" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">2206728391</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("2206728391", "funbi-number")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "funbi-number" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bank:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">UBA</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("UBA", "funbi-bank")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "funbi-bank" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account 2 */}
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-serif text-[hsl(342,69%,29%)] mb-4 text-center">
                  Joseph's Account
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Joseph Ayodele</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Joseph Ayodele", "joseph-name")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "joseph-name" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">0775569088</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("0775569088", "joseph-number")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "joseph-number" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bank:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">GT Bank</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("GT Bank", "joseph-bank")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "joseph-bank" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Message */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[hsl(342,69%,29%)] rounded-full flex items-center justify-center">
                <Heart className="text-white text-2xl fill-current" />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-[hsl(342,69%,29%)] mb-4">
              With Love & Gratitude
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your love, laughter, and presence mean everything to us as we start this beautiful journey together.
            </p>
          </Card>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}