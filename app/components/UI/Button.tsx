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
          py-4 
          rounded-2xl 
          text-lg font-semibold 
          transition 
          duration-300
          hover:bg-gray-800
          ${className || ''}
        `}
      >
        {children}
      </button>
    );
  }


