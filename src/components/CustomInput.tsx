/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FaRegEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

// Define the props interface for the CustomInput component
interface CustomInputProps {
  label?: string; // Label for the input field
  type?: string; // Input type (e.g., "text", "password", "email", "select")
  name?: string;
  placeholder?: string; // Placeholder text (optional for select)
  value?: any; // Optional: Controlled input value
  onChange?: (e: any) => void; // Allow any event type for flexibility
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  className?: string; // Optional: Additional CSS classes
  required?: boolean; // Optional: Whether the input is required
  disabled?: boolean; // Optional: Whether the input is disabled
  options?: { label: string; value: string | number }[]; // Optional: Dropdown options
  error?: string | boolean; // Optional: Error message or boolean flag
}

// CustomInput component
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onFocus,
  className = '',
  required = false,
  disabled = false,
  options,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Determine the input type based on whether it's a password and visibility is toggled
  const inputType = type === 'password' && showPassword ? 'text' : type;

 
  const borderColor = error ? 'border-danger focus:ring-danger' : 'border-primary focus:ring-primary border';

  return (
    <div className="w-full">
    
      {label && (
        <label className="block text-sm font-light text-gray_light mb-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

    
      <div className="relative">
        {type === 'select' && options ? (
        
          <select
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            disabled={disabled}
            className={`w-full border py-[10px] px-2 rounded-md shadow-lg focus:outline-none focus:border-transparent bg-[#fff] ${borderColor} ${className}`}
          >
            <option value="" disabled>
              {placeholder || 'Select an option'}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          // Render input field for other types
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onFocus={onFocus}
            name={name}
            className={`w-full border py-[10px] px-2 rounded-md shadow-lg focus:outline-none focus:border-transparent bg-[#fff] ${borderColor} ${type === 'email' ? 'pl-2' : ''} ${className}`}
          />
        )}
 
        {/* Email Icon */}
        {type === 'email' && (
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <FaRegEnvelope className="text-primaryLight" />
          </div>
        )}

        {/* Eye Icon for Password */}
        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-primaryLight" />
            ) : (
              <FaEye className="text-primaryLight" />
            )}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && typeof error === 'string' && (
        <p className="text-danger text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
