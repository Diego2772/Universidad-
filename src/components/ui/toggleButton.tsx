// components/ui/Button.tsx
import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost'; // Agrega más variantes aquí si es necesario
  size?: 'icon'; // Agrega más tamaños aquí si es necesario
  className?: string;
}

const ToggleButton: React.FC<ButtonProps> = ({ variant = 'ghost', size = 'icon', className, children, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants: Record<'ghost', string> = {
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-50',
    // Agrega más variantes aquí si es necesario
  };
  const sizes: Record<'icon', string> = {
    icon: 'p-2',
    // Agrega más tamaños aquí si es necesario
  };

  const classes = clsx(
    baseClasses,
    variant && variants[variant],
    size && sizes[size],
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default ToggleButton;
