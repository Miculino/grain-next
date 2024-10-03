// Import necessary types from sanity
import { SanityImageHotspot, SanityImageCrop } from "./sanity";

// Define Dish type
export interface Dish {
  _id: string;
  _type: "dish";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string | null;
  price: number | null;
  bundle_price: number;
  served: Array<"chilled" | "warm"> | null;
  overview: string | null;
  tags?: Array<string>;
  thumbnail: {
    asset: {
      url: string | null;
    } | null;
  } | null;
  details: {
    story?: string;
    all_ingredients?: string;
    nutritional_info?: {
      calories?: number;
      fat?: number;
      carb?: number;
      protein?: number;
    };
    full_thumbnail: {
      asset: {
        url: string;
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  };
}

// Define Bundle type
export interface Bundle {
  _id: string;
  _type: "bundle";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string | null;
  overview: string | null;
  price: number | null;
  thumbnail: {
    asset: {
      url: string | null;
    } | null;
  } | null;
  [key: "mains" | "drinks" | "sides_desserts"]: {
    required: boolean;
    limit: number;
  };
  mains: {
    required: boolean;
    limit: number;
  };
  drinks: {
    required: boolean;
    limit: number;
  };
  sides_desserts: {
    required: boolean;
    limit: number;
  };
}

// Define SanityItems type
export type SanityItems = Array<Bundle | Dish> | null;

// Define BundleCategory type
export interface BundleCategory {
  title: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  type: string;
  products: Dish[];
}

// Define additional props interfaces as needed
export interface AddressPickerOptionProps {
  type: "pick_up" | "delivery";
  title: string;
  setIsDropdownOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OrderNavigationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  small?: boolean;
  isDropdownOpen: boolean;
}

export interface DropdownContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ShoppingCartProductProps {
  name: string;
  price: number;
  quantity: number;
  total_price: number;
}

interface CheckmarkProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}
