import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const config = {
  name: "biagio-destino-immobiliare",
  title: "Biagio Destino Immobiliare",
  projectId,
  dataset,
  basePath: "/studio",
  schema: {
    types: schemaTypes
  }
};

export default config;
