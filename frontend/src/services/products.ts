import API_URL from "./api";
import { Product } from "../types/Product";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await API_URL.get<Product[]>("/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}