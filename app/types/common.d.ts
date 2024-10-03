export interface BundleCategory {
  title: string;
  type: "mains" | "sides_desserts" | "drinks";
  products: Bundle[];
}

export interface IBundleProduct {
  name: string;
  price: number;
  bundle_surcharge: number;
  bundle_price: number;
  quantity: number;
  category: "mains" | "sides_desserts" | "drinks";
}
