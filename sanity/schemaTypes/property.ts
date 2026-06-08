export const property = {
  name: "property",
  title: "Immobile",
  type: "document",
  fields: [
    { name: "title", title: "Titolo", type: "string", validation: (rule: any) => rule.required() },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule: any) => rule.required()
    },
    { name: "price", title: "Prezzo", type: "string" },
    { name: "location", title: "Località", type: "string" },
    { name: "propertyType", title: "Tipologia", type: "string" },
    { name: "floor", title: "Piano", type: "string" },
    { name: "surface", title: "Superficie", type: "number" },
    { name: "rooms", title: "Vani", type: "number" },
    { name: "bathrooms", title: "Bagni", type: "number" },
    { name: "description", title: "Descrizione", type: "text", rows: 6 },
    { name: "badges", title: "Badge", type: "array", of: [{ type: "string" }] },
    { name: "features", title: "Caratteristiche", type: "array", of: [{ type: "string" }] },
    {
      name: "images",
      title: "Immagini",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    },
    {
      name: "isFeatured",
      title: "In evidenza in homepage",
      type: "boolean",
      initialValue: false
    },
    { name: "sourceUrl", title: "Link origine", type: "url" },
    {
      name: "published",
      title: "Pubblicato",
      type: "boolean",
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "images.0"
    }
  }
};
