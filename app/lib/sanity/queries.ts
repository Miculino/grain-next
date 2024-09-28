import { defineQuery } from "next-sanity";

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"] | order(_createdAt asc) {
  name,
  description,
  slice_index,
  items[] -> {
    ...,
    _type == "dish" => {
      name,
      price,
      served,
      overview,
      thumbnail {
        asset -> {
          url
        }
      }
    },
    _type == "bundle" => {
      name,
      price,
      overview,
      thumbnail {
        asset -> {
          url
        }
      }
    }
  }
}`);
