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
                  $USD
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bank Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Lead Bank</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Lead Bank", "usd-bank")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "usd-bank" ? (
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
                      <span className="font-medium">211163111348</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("211163111348", "usd-number")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "usd-number" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">ACH Routing:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">101019644</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("101019644", "usd-ach")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "usd-ach" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Wire Routing:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">101019644</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("101019644", "usd-wire")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "usd-wire" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Type:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Checking</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Checking", "usd-type")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "usd-type" ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bank Address:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">1801 Main St., Kansas City, MO 64108</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("1801 Main St., Kansas City, MO 64108", "usd-address")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "usd-address" ? (
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
                  Nigerian Account
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/80 p-3 rounded flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Basil Ayodele</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("Basil Ayodele", "basil-name")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "basil-name" ? (
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
                        onClick={() => copyToClipboard("0775569088", "basil-number")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "basil-number" ? (
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
                        onClick={() => copyToClipboard("GT Bank", "basil-bank")}
                        className="p-1 h-6 w-6"
                      >
                        {copiedField === "basil-bank" ? (
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