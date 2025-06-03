import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseClasses = 'font-light tracking-wide transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-terra-600 hover:bg-terra-700 text-white',
    secondary: 'bg-stone-800 hover:bg-stone-900 text-white',
    outline: 'border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white',
    text: 'text-stone-800 hover:text-terra-700 underline-offset-4 hover:underline',
  };
  
  const sizeClasses = {
    sm: 'text-xs py-2 px-4',
    md: 'text-sm py-3 px-6',
    lg: 'text-sm py-4 px-8',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;