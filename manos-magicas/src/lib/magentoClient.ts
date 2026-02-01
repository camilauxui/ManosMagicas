import magento from "../data/magento.mock.json";

export type Product = (typeof magento.products)[number];
export type Category = (typeof magento.categories)[number];

export function getCategories(): Category[] {
  return magento.categories;
}

export function getProducts(): Product[] {
  return magento.products;
}

export function getProductsByCategory(categoryKey: string): Product[] {
  return magento.products.filter((p) => p.categoryKey === categoryKey);
}

export function getProductBySlug(slug: string): Product | undefined {
  return magento.products.find((p) => p.slug === slug);
}

