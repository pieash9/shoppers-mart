"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const cartTotalItem: number = cart.reduce(
    (sum, current) => sum + (current.quantity ?? 0),
    0
  );
  return (
    <div className="py-3 px-4 bg-slate-200 ">
      <nav className="flex justify-between items-center container mx-auto">
        <h2 className="text-xl font-semibold">
          <Link href="/">Shoppers Mart</Link>
        </h2>
        <div className="">
          <FaCartPlus size={22} /> {cartTotalItem}
        </div>
      </nav>
    </div>
  );
};

export default Header;
