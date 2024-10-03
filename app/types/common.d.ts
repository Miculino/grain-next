export interface BundleCategory {
  title: string;
  type: "mains" | "sides_desserts" | "drinks";
  products: Bundle[];
}
