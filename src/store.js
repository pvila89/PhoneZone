import { create } from "zustand";

const useMobileStore = create((set) => ({
    cartItems: 0,
    setCartItems: (itemsNumber) =>
        set(() => ({cartItems: itemsNumber}))
}));

export default useMobileStore;
