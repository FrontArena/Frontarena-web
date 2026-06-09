import { ChevronDown } from "lucide-react";

export default function Select({
    options = [],
    value,
    onChange,
    placeholder = "Selecione...",
    className = "",
}) {
    return (
        <div className={`relative ${className}`}>
            <select
                value={value}
                onChange={onChange}
                className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    backdrop-blur-md
                    outline-none
                    transition
                    hover:border-purple-500
                    focus:border-cyan-500
                "
            >
                <option
                    value=""
                    disabled
                    className="bg-black"
                >
                    {placeholder}
                </option>

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="bg-black"
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={18}
                className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                "
            />
        </div>
    );
}