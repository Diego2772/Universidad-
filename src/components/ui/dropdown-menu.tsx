import React, { useContext, useState, ReactNode, MouseEvent } from 'react';
import { Menu, MenuItem, Button, ButtonProps, MenuProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface DropdownMenuContextType {
  anchorEl: HTMLElement | null;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextType | null>(null);

interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DropdownMenuContext.Provider value={{ anchorEl, handleClick, handleClose }}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

interface DropdownMenuTriggerProps extends ButtonProps {
  className?: string;
  children: ReactNode;
}

const StyledButton = styled(Button)({
  textTransform: 'none',
});

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, className }) => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('DropdownMenuTrigger must be used within a DropdownMenu');
  }
  const { handleClick } = context;
  return (
    <StyledButton onClick={handleClick} className={className}>
      {children}
    </StyledButton>
  );
};

interface DropdownMenuContentProps extends Omit<MenuProps, 'open' | 'anchorEl' | 'onClose'> {
  align?: 'start' | 'center' | 'end';
  children: ReactNode;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, align = 'start', ...props }) => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('DropdownMenuContent must be used within a DropdownMenu');
  }
  const { anchorEl, handleClose } = context;
  const horizontal = align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal }}
      transformOrigin={{ vertical: 'top', horizontal }}
      {...props}
    >
      {children}
    </Menu>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children }) => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('DropdownMenuItem must be used within a DropdownMenu');
  }
  const { handleClose } = context;
  return <MenuItem onClick={handleClose}>{children}</MenuItem>;
};
