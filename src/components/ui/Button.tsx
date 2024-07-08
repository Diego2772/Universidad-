import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';

// Definimos los tipos de propiedades adicionales que vamos a utilizar
interface CustomButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: 'outline' | 'default';
  size?: 'icon' | 'small' | 'medium' | 'large';
}

// Estilizamos el botón usando `styled` de Material UI
const StyledButton = styled(MuiButton)(({ theme }) => ({
  '&.outline': {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  '&.icon': {
    padding: theme.spacing(1),
    minWidth: 'auto',
  },
}));

const CustomButton: React.FC<CustomButtonProps> = ({ variant, size, className, ...props }) => {
  return (
    <StyledButton
      className={clsx({
        outline: variant === 'outline',
        icon: size === 'icon',
      }, className)}
      {...props}
    />
  );
};

export default CustomButton;