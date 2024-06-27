import { FaSpinner } from "react-icons/fa";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <FaSpinner className="animate-spin text-4xl text-[#4B49AC]" />
    </div>
  );
};
export default Loader;
