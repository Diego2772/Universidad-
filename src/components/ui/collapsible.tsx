import React, { useState, ReactNode, useContext, createContext } from 'react';

interface CollapsibleContextType {
  isOpen: boolean;
  toggle: () => void;
}

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

interface CollapsibleProps {
  children: ReactNode;
  className?: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggle }}>
      <div className={className}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
};

interface CollapsibleTriggerProps {
  children: ReactNode;
  className?: string;
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ children, className }) => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error('CollapsibleTrigger must be used within a Collapsible');
  }
  const { toggle } = context;

  return (
    <div onClick={toggle} className={className} role="button" tabIndex={0}>
      {children}
    </div>
  );
};

interface CollapsibleContentProps {
  children: ReactNode;
  className?: string;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ children, className }) => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error('CollapsibleContent must be used within a Collapsible');
  }
  const { isOpen } = context;

  return (
    <div className={`${className} ${isOpen ? 'block' : 'hidden'}`}>
      {children}
    </div>
  );
};
