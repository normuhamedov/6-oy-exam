"use client"

import { useState } from "react"
import clsx from "clsx"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const FancyInput = ({
  label = "Label",
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  className,
  inputClassName,
  labelClassName,
  error,
  required = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"

  return (
    <div className={clsx("flex flex-col gap-2 w-full mb-[14px]", className)}>
      {/* Label */}
      <label className={clsx("text-[12px] font-semibold tracking-wide text-white drop-shadow-md", labelClassName)}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {/* Input Container */}
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(
            "px-4 py-3 rounded-[20px] outline-none w-full",
            "bg-[linear-gradient(94.56deg,#FFFFFF33_0%,#21242F33_100%)]",
            "backdrop-blur-md text-white placeholder-gray-300",
            "focus:border-[#ffffff55] focus:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
            "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
            "transition-all duration-300 ease-in-out border-[2px]",
            error ? "border-red-400" : "border-[#ffffff33]",
            isPassword && "pr-12",
            inputClassName,
          )}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
    </div>
  )
}

export default FancyInput
