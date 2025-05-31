import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  fullWidth = false,
  icon,
  className = '',
  ...props
}, ref) => {
  const inputBaseClasses = "px-4 py-2 bg-white border rounded-lg text-gray-700 focus:outline-none focus:ring-2 transition-all duration-200";
  const inputErrorClasses = error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-green-200 focus:border-green-500";
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <div className={`${widthClass} mb-4`}>
      {label && (
        <label className="block text-gray-700 text-sm font-medium mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          ref={ref}
          className={`
            ${inputBaseClasses}
            ${inputErrorClasses}
            ${icon ? 'pl-10' : ''}
            ${className}
            ${widthClass}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;