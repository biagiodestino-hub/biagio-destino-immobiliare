import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Impostazioni sito",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Nome brand", type: "string" }),
    defineField({ name: "siteUrl", title: "URL sito", type: "url" }),
    defineField({
      name: "whatsappNumber",
      title: "Numero WhatsApp",
      type: "string"
    }),
    defineField({ name: "phone", title: "Telefono", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "officeAddress",
      title: "Indirizzo ufficio",
      type: "string"
    }),
    defineField({ name: "facebookUrl", title: "Facebook", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram", type: "url" }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "emotionalQuote",
      title: "Frase emozionale",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "defaultSeoTitle",
      title: "Titolo SEO predefinito",
      type: "string"
    }),
    defineField({
      name: "defaultSeoDescription",
      title: "Descrizione SEO predefinita",
      type: "text",
      rows: 3
    })
  ],
  preview: {
    prepare() {
      return { title: "Impostazioni sito" };
    }
  }
});
