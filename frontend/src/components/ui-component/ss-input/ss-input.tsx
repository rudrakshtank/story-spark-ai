import { useState } from "react";
import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

interface SSInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T>;
  error?: FieldError;
  autoComplete?: string;
  autoFocus?: boolean;
}

const SSInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  register,
  validation,
  error,
  autoComplete,
  autoFocus
}: SSInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);



  const inputType =

    type === "password" ? (showPassword ? "text" : "password") : type;



  return (
    <div className="w-full min-w-0" className="w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      <div className="relative w-full w-full min-w-0">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <i className={icon}></i>
          </span>
        )}

       <input
  type={inputType}
  id={name}
  className={`w-full box-border pl-8 pr-10 py-1.5 text-base text-gray-900 dark:text-gray-200 bg-white dark:bg-slate-800 border-0 sm:text-sm ${
    error
      ? "outline-red-500"
      : "outline-gray-800 focus:outline-indigo-600"
  }`}
  placeholder={placeholder}
  autoComplete={autoComplete}
  {...register(name, validation)}
/>


        <input
          id={name}
  type={inputType}
  id={name}
  className={`block w-full max-w-full box-border pl-8 ${
    type === "password" ? "pr-0" : "pr-0"
  } py-1.5 text-base text-gray-900 dark:text-gray-200 bg-white dark:bg-slate-800 border rounded-md sm:text-sm ${
    error
      ? "border-red-500"
      : "border-gray-300 focus:outline-indigo-600"
  }`}
  placeholder={placeholder}
  autoComplete={autoComplete}
  {...register(name, validation)}
          className={`
            w-full
            min-w-0
            rounded-xl
            border
            bg-white
            dark:bg-slate-800
            px-4
            py-3
            ${icon ? "pl-10" : ""}
            ${type === "password" ? "pr-12" : ""}
            text-sm
            text-slate-900
            dark:text-slate-100
            placeholder:text-slate-400
            transition-all
            duration-200

            ${
              error
                ? `
                  border-red-500
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-500/20
                `
                : `
                  border-slate-300
                  dark:border-slate-700
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                `
            }

            focus:outline-none
          `}
/>

        {type === "password" && (
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}

    className="absolute inset-y-0 right-2 flex items-center text-gray-500"

    
    aria-label={showPassword ? "Hide password" : "Show password"}
    title={showPassword ? "Hide password" : "Show password"}

  >
    <i
              className={showPassword ? "fi fi-rr-eye" : "fi fi-rr-eye-crossed"}
            />
  </button>
)}
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-1 w-full break-words overflow-hidden">
        {error.message}
        </p>
    )}
    </div>
  );
};

export default SSInput;
