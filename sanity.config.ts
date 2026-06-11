import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const singletonTypes = new Set([
  "siteSettings",
  "homePage",
  "aboutPage",
  "contactPage"
]);

const singletonItems = [
  { type: "siteSettings", title: "Impostazioni sito" },
  { type: "homePage", title: "Homepage" },
  { type: "aboutPage", title: "Chi sono" },
  { type: "contactPage", title: "Contatti" }
];

const config = defineConfig({
  name: "biagio-destino-immobiliare",
  title: "Biagio Destino Immobiliare",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenuti")
          .items([
            ...singletonItems.map((item) =>
              S.listItem()
                .id(item.type)
                .title(item.title)
                .child(
                  S.document()
                    .schemaType(item.type)
                    .documentId(item.type)
                    .title(item.title)
                )
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !singletonTypes.has(item.getId() || "")
            )
          ])
    })
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !singletonTypes.has(template.schemaType))
  },
  document: {
    actions: (actions, context) =>
      singletonTypes.has(context.schemaType)
        ? actions.filter(
            (action) =>
              action.action === "publish" ||
              action.action === "discardChanges" ||
              action.action === "restore"
          )
        : actions
  }
});

export default config;
