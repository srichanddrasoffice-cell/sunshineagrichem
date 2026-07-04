export type Locale = "en" | "te" | "hi";

import type { Product as ProductType } from "@/types/product";
import { products as productCatalog } from "./products/index";

export type Product = ProductType;
export const products: Product[] = productCatalog as Product[];
