import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="py-2 px-4 bg-slate-200 ">
      <nav className="flex justify-between items-center container mx-auto">
        <h2 className="text-lg font-semibold">
          <Link href="/">Shoppers Mart</Link>
        </h2>
        <div className="">
          <FaCartPlus />
        </div>
      </nav>
    </div>
  );
};

export default Header;
