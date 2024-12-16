interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}
export default function Button({ className, text, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-[#136DEC] text-[#FFFFFF] px-3 py-2 rounded-lg  hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
