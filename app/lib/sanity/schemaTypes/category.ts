const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "slice_index",
      title: "Slice Index",
      type: "number",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "dish" }, { type: "bundle" }],
        },
      ],
    },
  ],
};

export default category;
