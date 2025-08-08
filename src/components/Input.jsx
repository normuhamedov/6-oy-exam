import React from "react";
import clsx from "clsx";

const FancyInput = ({
    label = "Label",
    type = "text",
    placeholder = "Enter text...",
    value,
    onChange,
    className,
    inputClassName,
    labelClassName,
    ...props
}) => {
    return (
        <div className={clsx("flex flex-col gap-2 w-full mt-[24px]", className)}>
            {/* Label */}
            <label
                className={clsx(
                    "text-sm font-semibold tracking-wide text-white drop-shadow-md",
                    labelClassName
                )}
            >
                {label}
            </label>

            {/* Input */}
            <input
                type={type}
                placeholder={placeholder}
                defaultValue={value}
                onChange={onChange}

                className={clsx(
                    "px-4 py-3 rounded-[20px] outline-none",
                    "bg-[linear-gradient(94.56deg,#FFFFFF33_0%,#21242F33_100%)]",
                    "backdrop-blur-md text-white placeholder-gray-300",
                    "focus:border-[#ffffff55] focus:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
                    "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                    "transition-all duration-300 ease-in-out border-[2px] border-[#ffffff33]",
                    inputClassName
                )}
                {...props}
            />
        </div>
    );
};

export default FancyInput;
