import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import { useThankYouModal } from '../context/ThankYouModalContext';

const ThankYouModal = () => {
  const { isThankYouOpen, closeThankYouModal } = useThankYouModal();

  return (
    <AnimatePresence>
      {isThankYouOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeThankYouModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.90, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.90, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-10 text-center"
          >
            <button
              onClick={closeThankYouModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={56} />
            </div>
            
            <h3 className="text-3xl font-black text-slate-900 mb-4">Thank You!</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your request has been received. One of our roofing specialists will contact you shortly to schedule your free inspection.
            </p>
            
            <button 
              onClick={closeThankYouModal}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;
