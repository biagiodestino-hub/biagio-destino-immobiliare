import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "Chi sono",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titolo", type: "string" }),
    defineField({ name: "subtitle", title: "Sottotitolo", type: "string" }),
    defineField({
      name: "biography",
      title: "Biografia",
      type: "text",
      rows: 8
    }),
    defineField({
      name: "profileImage",
      title: "Foto profilo",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "experienceText",
      title: "Testo esperienza",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "licenseText",
      title: "Testo abilitazione",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "territoryText",
      title: "Testo territorio",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "values",
      title: "Valori",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", title: "Anno", type: "string" }),
            defineField({ name: "title", title: "Titolo", type: "string" }),
            defineField({ name: "text", title: "Descrizione", type: "text", rows: 3 })
          ],
          preview: {
            select: { title: "title", subtitle: "year" }
          }
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: "Chi sono" };
    }
  }
});
