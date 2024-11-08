interface ButtonProps {
  [key: string]: string;
}
export default function Button({ className, text }: ButtonProps) {
  return (
    <button
      className={`bg-[#136DEC] text-[#FFFFFF] px-3 py-2 rounded-lg  hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
}
