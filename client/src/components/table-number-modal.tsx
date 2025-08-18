import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { weddingApi } from "@/services/wedding-api";
import type { Contact } from "@shared/wedding-schema";

interface TableNumberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TableNumberModal({ isOpen, onClose }: TableNumberModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundContact, setFoundContact] = useState<Contact | null>(null);
  const [searchResult, setSearchResult] = useState<"found" | "not-found" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckName = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setFoundContact(null);
    setSearchResult(null);
    
    try {
      const response = await weddingApi.searchContacts(searchQuery.trim());
      
      if (response.success && response.data && response.data.length > 0) {
        // If multiple matches, take the first one
        const contact = response.data[0];
        setFoundContact(contact);
        setSearchResult("found");
      } else {
        setSearchResult("not-found");
      }
    } catch (err) {
      console.error('Error searching contacts:', err);
      setError('Failed to search contacts. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSearchQuery("");
    setFoundContact(null);
    setSearchResult(null);
    setError(null);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center -mt-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <motion.div
        className="bg-white rounded-3xl shadow-xl w-96 md:w-[32rem] lg:w-[40rem] xl:w-[48rem] max-w-[95vw] overflow-hidden relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isOpen ? 1 : 0.9, opacity: isOpen ? 1 : 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close button */}
        <div className="absolute top-8 right-2 z-20">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-10 w-10 p-0 text-gray-600 hover:text-gray-800"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Modal body */}
        <div className="p-8 md:p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h3 className="text-[hsl(342,69%,29%)] text-xl md:text-2xl font-serif leading-relaxed">
              Hello dear, kindly enter your name, email, or phone number to find your table number
            </h3>
          </div>

          {/* Input and button row */}
          <div className="flex gap-4 mb-8">
            <Input
              type="text"
              placeholder="ENTER YOUR NAME, EMAIL, OR PHONE"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-gray-300 focus:border-[hsl(342,69%,29%)] focus:ring-[hsl(342,69%,29%)] text-lg py-3"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCheckName();
                }
              }}
            />
            <Button
              onClick={handleCheckName}
              disabled={!searchQuery.trim() || isLoading}
              className="bg-pink-100 text-[hsl(342,69%,29%)] hover:bg-pink-200 border border-pink-200 px-6 py-3 text-lg"
            >
              {isLoading ? "Checking..." : "CHECK NAME"}
            </Button>
          </div>

          {/* Error message */}
          {error && (
            <motion.div
              className="text-center p-4 rounded-lg bg-red-50 border border-red-200 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-red-600 font-medium">{error}</p>
            </motion.div>
          )}

          {/* Result */}
          {searchResult && (
            <motion.div
              className="text-center p-6 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {searchResult === "not-found" ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-yellow-800 font-medium text-lg mb-2">
                    Contact not found
                  </p>
                  <p className="text-yellow-700">
                    Please confirm your information or contact us for assistance.
                  </p>
                </div>
              ) : foundContact ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-600 mb-2 text-lg">Welcome, {foundContact.fullName}!</p>
                  {foundContact.tableNumber ? (
                    <div>
                      <p className="text-gray-600 mb-3 text-lg">Your table number is:</p>
                      <p className="text-4xl font-bold text-[hsl(342,69%,29%)] mb-2">
                        Table {foundContact.tableNumber}
                      </p>
                    </div>
                  ) : (
                    <p className="text-orange-600 font-medium text-lg">
                      Table assignment pending. Please check back later.
                    </p>
                  )}
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Email: {foundContact.email}</p>
                    <p>Phone: {foundContact.phoneNumber}</p>
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}

         
        </div>
      </motion.div>
    </motion.div>
  );
} 