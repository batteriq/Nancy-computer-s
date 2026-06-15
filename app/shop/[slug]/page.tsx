import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found | Firelite Computers" };
  return {
    title: `${product.name} | Firelite Computers`,
    description: `${product.name} — ${product.specs}. Buy now at Firelite Computers, Nairobi.`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return <ProductDetail product={product} related={related} />;
}
