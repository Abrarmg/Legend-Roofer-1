import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Get Your Free Inspection</h3>
              <p className="text-slate-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-colors" 
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-colors" 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-colors" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-colors" 
                />
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-colors">
                  <option>Select Service</option>
                  <option>Roof Replacement</option>
                  <option>Roof Repair</option>
                  <option>Commercial Roof Repair</option>
                  <option>Emergency Roof Repair</option>
                  <option>Metal Roofing</option>
                  <option>Flat Roof Repair</option>
                  <option>Slate Roofing</option>
                </select>
                <textarea 
                  placeholder="Message (Optional)" 
                  rows={3} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 outline-none transition-colors resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-600/20 hover:bg-orange-700 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
