import { IBestProductCard } from "../best-products/best-products-card/best-products-card .types";
import { IProductsCardProps } from "../products-list/products-card/products-card.types";

export interface IProductDetailsProps extends IBestProductCard,IProductsCardProps {
    category: string;
    slug: string;
}