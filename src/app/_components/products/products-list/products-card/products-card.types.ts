import { TagStatus } from "../../../types/tag-status.type";

export interface IProductsCardProps {
  product_id: string;
  title: string;
  img?: string;
  price: number;
  rate?: number;
  ratersNumber?: number;
  discount: number;
  tag_type?: TagStatus;
  slug?: string;
  category?: string;
}
