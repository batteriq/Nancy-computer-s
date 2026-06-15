import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found | Nancy Fire Computers" };
  return {
    title: `${product.name} | Nancy Fire Computers`,
    description: `${product.name} - ${product.specs}. Buy now at Nancy Fire Computers, Nairobi.`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  let related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  if (related.length < 4) {
    related = related.concat(
      products
        .filter(
          (p) => p.id !== product.id && !related.some((r) => r.id === p.id)
        )
        .slice(0, 4 - related.length)
    );
  }

  return <ProductDetail product={product} related={related} />;
}
