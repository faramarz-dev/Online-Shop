import { ProductsListData } from "@/data/products.data";
import { BestProductListData } from "@/data/best-products.data";
import ProductDetailsPage from "./products-details";
import { IProductDetailsProps } from "@/app/_components/products/product-details/products-details.types";

type PageProps = {
  params: {
    category: string;
    slug: string;
  };
};


export async function generateMetadata({ params }: { params: IProductDetailsProps }) {
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
    title: `${product.title} `,
    description: `خرید ${product.title} با قیمت ${product.price} تومان و تخفیف ${product.discount}% در دسته‌بندی ${product.category}.`,
  };
}

export default function Page({ params }: PageProps) {
  return <ProductDetailsPage key={params.slug} {...params} />;
}

