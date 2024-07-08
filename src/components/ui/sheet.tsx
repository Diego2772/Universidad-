import React, { useState, ReactNode, useContext, createContext } from 'react';
import { Drawer, DrawerProps, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MdClose } from 'react-icons/md';

interface SheetContextType {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const SheetContext = createContext<SheetContextType | null>(null);

interface SheetProps {
  children: ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SheetContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </SheetContext.Provider>
  );
};

interface SheetTriggerProps {
  asChild?: boolean;
  children: ReactNode;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ asChild, children }) => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error('SheetTrigger must be used within a Sheet');
  }
  const { handleOpen } = context;

  if (asChild) {
    return React.cloneElement(children as React.ReactElement<any>, { onClick: handleOpen });
  }

  return (
    <button type="button" onClick={handleOpen}>
      {children}
    </button>
  );
};

interface SheetContentProps extends Omit<DrawerProps, 'open' | 'onClose' | 'anchor'> {
  children: ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: 250,
    backgroundColor: '#424242', // Aplicar color de fondo aquí
  },
});

export const SheetContent: React.FC<SheetContentProps> = ({ children, side = 'left', ...props }) => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error('SheetContent must be used within a Sheet');
  }
  const { open, handleClose } = context;

  return (
    <StyledDrawer
      anchor={side}
      open={open}
      onClose={handleClose}
      {...props}
    >
      <div className="flex justify-end p-4">
        <IconButton onClick={handleClose}>
          <MdClose />
        </IconButton>
      </div>
      <div style={{ padding: '16px', backgroundColor: '#424242', height: '100%' }}> {/* Asegurarse de que el contenido tenga el fondo correcto */}
        {children}
      </div>
    </StyledDrawer>
  );
};
