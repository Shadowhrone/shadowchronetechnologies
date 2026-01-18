
import { getProducts } from "../../../lib/api";
import ProductClient from "./ProductClient";

export const revalidate = 60;

export default async function Page() {
  const products = await getProducts(); // server fetch

  return <ProductClient products={products} />;
}
