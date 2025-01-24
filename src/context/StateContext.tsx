import React, { useState, useEffect, useRef, useContext, createContext, ReactNode } from 'react';

// Типизация для контекста
interface StateContextType {
  showContactModal: boolean;
  setShowContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLDivElement>;
}

// Создаем контекст с типом
const Context = createContext<StateContextType | undefined>(undefined);

// Компонент StateContext с типами
interface StateContextProps {
  children: ReactNode;
}

export const StateContext = ({ children }: StateContextProps) => {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Check clicks outside all dropdowns
        if (showContactModal) {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setShowContactModal(false);
          }
        }
      };
  
      // Add event listener for clicks outside
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [showContactModal]);

  return (
    <Context.Provider value={{ showContactModal, setShowContactModal, modalRef }}>
      {children}
    </Context.Provider>
  );
};

// Хук для использования контекста
export const useStateContext = (): StateContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useStateContext must be used within a StateContext provider');
  }
  return context;
};
