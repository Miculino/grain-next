import {
  internalGroqTypeReferenceTo,
  SanityImageHotspot,
  SanityImageCrop,
} from "./sanity";

export type SanityItems = Array<
  | {
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
    }
  | {
      _id: string;
      _type: "dish";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name: string | null;
      price: number | null;
      served: Array<"chilled" | "warm"> | null;
      overview: string | null;
      tags?: Array<string>;
      thumbnail: {
        asset: {
          url: string | null;
        } | null;
      } | null;
      details?: {
        story?: string;
        all_ingredients?: string;
        nutritional_info?: {
          calories?: number;
          fat?: number;
          carb?: number;
          protein?: number;
        };
        full_thumbnail?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
      };
    }
> | null;

export type Bundle = {
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
};

export type Dish = {
  _id: string;
  _type: "dish";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string | null;
  price: number | null;
  served: Array<"chilled" | "warm"> | null;
  overview: string | null;
  tags?: Array<string>;
  thumbnail: {
    asset: {
      url: string | null;
    } | null;
  } | null;
  details?: {
    story?: string;
    all_ingredients?: string;
    nutritional_info?: {
      calories?: number;
      fat?: number;
      carb?: number;
      protein?: number;
    };
    full_thumbnail?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  };
};
