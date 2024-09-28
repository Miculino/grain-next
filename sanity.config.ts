import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/app/lib/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "grain",
  projectId: "23p810jf",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
