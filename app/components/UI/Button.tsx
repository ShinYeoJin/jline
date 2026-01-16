'use client';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`
          w-full 
          bg-black text-white 
          py-3 sm:py-4 
          rounded-xl sm:rounded-2xl 
          text-base sm:text-lg font-semibold 
          transition 
          duration-300
          hover:bg-gray-800
          active:bg-gray-900
          min-h-[44px]
          touch-manipulation
          ${className || ''}
        `}
      >
        {children}
      </button>
    );
  }


