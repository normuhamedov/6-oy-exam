"use client"
import clsx from "clsx"

const Button = ({
  children,
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  variant = "primary",
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-[30px] py-[10px] text-sm",
    md: "px-4 py-[15px] text-base w-full",
    lg: "px-6 py-3 text-lg",
  }

  const variantClasses = {
    primary: "bg-[#0075FF] hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border-2 border-[#0075FF] text-[#0075FF] hover:bg-[#0075FF] hover:text-white",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "cursor-pointer rounded-lg shadow-md transition duration-200 active:scale-95",
        "font-[Plus Jakarta Display] font-bold text-[10px] leading-[150%] tracking-[0em]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        "flex items-center justify-center gap-2",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
      {children}
    </button>
  )
}

export default Button
