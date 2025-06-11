export interface BreadCrumbItem {
  label: string;
  href: string;
}

export interface BreadCrumbProps {
  items: BreadCrumbItem[];
}