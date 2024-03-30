import { IProduct } from "./types/product.types";

export const getCartItem = () => {
  let cartData: any[] = [];
  const cartStringData = localStorage.getItem("cart-items");
  if (cartStringData) {
    cartData = JSON.parse(cartStringData);
  }
  return cartData;
};

export const saveToLocalStorage = (data: IProduct[]) => {
  localStorage.setItem("cart-items", JSON.stringify(data));
};
