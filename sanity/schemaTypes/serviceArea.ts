import { defineField, defineType } from "sanity";

export const serviceArea = defineType({
  name: "serviceArea",
  title: "Zona servita",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "province", title: "Provincia", type: "string" }),
    defineField({ name: "order", title: "Ordine", type: "number", initialValue: 0 }),
    defineField({
      name: "active",
      title: "Attiva",
      type: "boolean",
      initialValue: true
    })
  ],
  orderings: [
    {
      title: "Ordine manuale",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }]
    }
  ],
  preview: {
    select: { title: "name", subtitle: "province" }
  }
});
