import { defineQuery } from "next-sanity";

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"] | order(_createdAt asc) {
  name,
  description,
  slice_index,
  items[] -> {
   _type,
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
      },
      details {
        full_thumbnail {
          asset -> {
            url
          }
        },
        nutritional_info,
        all_ingredients,
        story
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
