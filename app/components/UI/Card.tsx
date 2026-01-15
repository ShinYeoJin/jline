'use client';
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-2xl border border-gray-200 shadow-sm ${className || ''}`}>
      {children}
    </div>
  );
}


