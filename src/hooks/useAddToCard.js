import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient('/cart');

const useAddToCart = () => {
  return useMutation(({ id, colorCode, storageCode }) => apiClient.addToCart(id, colorCode, storageCode));
};

export default useAddToCart;
