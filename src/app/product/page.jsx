
import { getProducts } from "../../../lib/api";
import ProductClient from "../product/ProdutClient";

export const revalidate = 60;

export default async function Page() {
  const products = await getProducts(); // server fetch

  return <ProductClient products={products} />;
}
