import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contatti",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo", type: "string" }),
    defineField({ name: "subtitle", title: "Sottotitolo", type: "text", rows: 3 }),
    defineField({
      name: "contactText",
      title: "Testo contatti",
      type: "text",
      rows: 4
    }),
    defineField({ name: "mapUrl", title: "URL mappa", type: "url" }),
    defineField({ name: "formTitle", title: "Titolo modulo", type: "string" }),
    defineField({
      name: "formSubtitle",
      title: "Sottotitolo modulo",
      type: "text",
      rows: 3
    })
  ],
  preview: {
    prepare() {
      return { title: "Contatti" };
    }
  }
});
