import { ProductsListData } from "@/data/products.data";
import { BestProductListData } from "@/data/best-products.data";
import ProductDetailsPage from "./products-details";

type PageParams = {
  category: string;
  slug: string;
};

export async function generateMetadata({ params }: { params: PageParams }) {
  const { slug, category } = params;
  const allProductsData = [...ProductsListData, ...BestProductListData];
  const product = allProductsData.find(
    (p) => p.slug === slug && p.category === category
  );

  if (!product) {
    return {
      title: "محصول پیدا نشد | فروشگاه ما",
      description: "محصول مورد نظر در فروشگاه موجود نیست.",
    };
  }

  return {
    title: `${product.title} | ${product.category}`,
    description: `خرید ${product.title} با قیمت ${product.price} تومان و تخفیف ${product.discount}% در دسته‌بندی ${product.category}.`,
  };
}

export default function Page({ params }: { params: PageParams }) {
  return <ProductDetailsPage category={params.category} slug={params.slug} />;
}