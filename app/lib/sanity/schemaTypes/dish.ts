const dish = {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Dish Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "served",
      title: "Served",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Warm", value: "warm" },
              { title: "Chilled", value: "chilled" },
            ],
          },
        },
      ],
    },
    {
      name: "overview",
      title: "Overview",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        {
          name: "story",
          title: "Story",
          type: "text",
        },
        {
          name: "all_ingredients",
          title: "All Ingredients",
          type: "text",
        },
        {
          name: "nutritional_info",
          title: "Nutritional Info",
          type: "object",
          fields: [
            {
              name: "calories",
              title: "Calories",
              type: "number",
              options: { nullable: true },
            },
            {
              name: "fat",
              title: "Fat",
              type: "number",
              options: { nullable: true },
            },
            {
              name: "carb",
              title: "Carb",
              type: "number",
              options: { nullable: true },
            },
            {
              name: "protein",
              title: "Protein",
              type: "number",
              options: { nullable: true },
            },
          ],
        },
        {
          name: "full_thumbnail",
          title: "Full Thumbnail",
          type: "image",
        },
      ],
    },
  ],
};

export default dish;
