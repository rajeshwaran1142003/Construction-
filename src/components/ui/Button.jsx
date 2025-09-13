import React from 'react';

const Button = ({
  text = "Button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-emerald-500",
    secondary: "bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md hover:-translate-y-0.5 focus:ring-emerald-500",
    outline: "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 focus:ring-white",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-red-500"
  };
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={classes}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;