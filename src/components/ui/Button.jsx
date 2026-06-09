export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    const variants = {
        primary: `
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            text-white
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(168,85,247,.4)]
        `,

        secondary: `
            border
            border-white/10
            text-white
            hover:border-cyan-500
        `,

        ghost: `
            text-gray-400
            hover:text-white
        `,
    };

    return (
        <button
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-6
                py-3
                font-medium
                transition-all
                duration-300
                cursor-pointer
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}