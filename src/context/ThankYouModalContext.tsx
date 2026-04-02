import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThankYouModalContextType {
  isThankYouOpen: boolean;
  openThankYouModal: () => void;
  closeThankYouModal: () => void;
}

const ThankYouModalContext = createContext<ThankYouModalContextType | undefined>(undefined);

export const ThankYouModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const openThankYouModal = () => setIsThankYouOpen(true);
  const closeThankYouModal = () => setIsThankYouOpen(false);

  return (
    <ThankYouModalContext.Provider value={{ isThankYouOpen, openThankYouModal, closeThankYouModal }}>
      {children}
    </ThankYouModalContext.Provider>
  );
};

export const useThankYouModal = () => {
  const context = useContext(ThankYouModalContext);
  if (context === undefined) {
    throw new Error('useThankYouModal must be used within a ThankYouModalProvider');
  }
  return context;
};
