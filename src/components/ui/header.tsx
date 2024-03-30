"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Modal from "./modal";
import { motion } from "framer-motion";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { IProduct } from "@/utils/types/product.types";
import Image from "next/image";

const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const cartTotalItem: number = cart.reduce(
    (sum, current) => sum + (current.quantity ?? 0),
    0
  );

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity! ?? 0,
    0
  );

  const handleIncreaseQuantity = (item: IProduct) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="py-4 px-4 bg-slate-200 ">
      <nav className="flex justify-between items-center container mx-auto">
        <h2 className="text-xl font-semibold">
          <Link href="/">Shoppers Mart</Link>
        </h2>
        <button onClick={() => setIsOpen(true)} className="relative">
          <FaCartPlus size={22} />
          <p className="absolute font-medium -top-3 -right-4 z-10 bg-orange-400/70 text-sm rounded-full px-1">
            {cartTotalItem}
          </p>
        </button>
      </nav>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="mt-2 grid grid-cols-1 gap-5">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="group transition-all p-3 shadow-md duration-300"
              >
                <div className="flex items-center gap-5 ">
                  {/* set loading for a specific item only */}
                  <div className="relative flex justify-center items-center">
                    <div className="absolute"></div>
                    <Image
                      className={`w-14 duration-500 object-contain`}
                      src={item.image}
                      alt={item?.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="grow">
                    <h3
                      className="mb-2 font-medium line-clamp-1"
                      title={item?.title}
                    >
                      {item?.title}
                    </h3>
                    <div className="flex justify-between">
                      <div className="">
                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          className="button-secondary btn-xs rounded-sm px-3 mr-2"
                        >
                          +
                        </button>
                        {item?.quantity}
                        <button
                          disabled={item?.quantity === 1}
                          onClick={() => handleDecreaseQuantity(item?.id)}
                          className="button-secondary btn-xs rounded-sm px-3 ml-2"
                        >
                          -
                        </button>
                      </div>
                      <p>x</p>${item?.price}
                    </div>
                  </div>

                  <motion.button
                    initial={{ x: "100", opacity: 0.7 }}
                    whileHover={{ x: "0", opacity: 1 }}
                    transition={{ duration: 1 }}
                    onClick={() => handleDeleteItem(item.id)}
                    className="cursor-pointer text-opacity-0 group-hover:text-opacity-100 text-red-500 text-3xl font-medium   duration-700"
                    title="remove"
                  >
                    x
                  </motion.button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-10">No item in the cart</div>
          )}
        </div>

        <div className="flex justify-between mt-10">
          <p className="text-lg text-gray-700 font-medium">SubTotal</p>
          <p className="text-xl font-semibold text-gray-700">
            ${total.toFixed(2)}
          </p>
        </div>

        <div className="mt-4 text-center flex flex-col gap-3">
          <Link href="#">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="button-primary w-full"
            >
              Checkout
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
