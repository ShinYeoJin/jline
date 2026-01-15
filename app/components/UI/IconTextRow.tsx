'use client';
interface IconTextRowProps {
  icon: React.ReactNode;
  text: string;
}
export default function IconTextRow({ icon, text }: IconTextRowProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 bg-[#C9A27E] rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="font-medium text-gray-700">{text}</span>
    </div>
  );
}


