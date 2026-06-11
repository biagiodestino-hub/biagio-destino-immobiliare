import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Servizio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "text",
      rows: 4
    }),
    defineField({ name: "iconName", title: "Nome icona", type: "string" }),
    defineField({ name: "order", title: "Ordine", type: "number", initialValue: 0 })
  ],
  orderings: [
    {
      title: "Ordine manuale",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }]
    }
  ]
});
