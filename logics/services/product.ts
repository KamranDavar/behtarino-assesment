import { fakestoreapiApi } from "../clients/fakestoreapi";
import { product, products, id } from "../types";

export const getProducts = async () => {
  const response = await fakestoreapiApi.get<products>(
    "/products"
  );
  console.log("response", response);
  return response.data;
};
export const getSingleProduct = async (id: id) => {
  const response = await fakestoreapiApi.get<product>(`/products/${id}`);
  console.log("response", response);
  return response.data;
};
