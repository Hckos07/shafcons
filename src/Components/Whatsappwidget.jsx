import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919935900264"; 

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white shadow-lg rounded-xl p-4 w-72 mb-4 transition-all duration-300">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm font-semibold text-gray-800">
              👋 Hi there! Need help?
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Chat with us directly on WhatsApp!
          </p>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
          >
            Open WhatsApp
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;