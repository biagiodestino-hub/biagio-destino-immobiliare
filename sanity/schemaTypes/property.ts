import { defineField, defineType } from "sanity";

export const property = defineType({
  name: "property",
  title: "Immobile",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "price", title: "Prezzo", type: "string" }),
    defineField({ name: "location", title: "Località", type: "string" }),
    defineField({
      name: "cityRef",
      title: "Città/Zona",
      type: "reference",
      to: [{ type: "serviceArea" }],
      options: {
        filter: "active == true"
      },
      description:
        "Seleziona una zona attiva. Per aggiungere Caronia o altre località, crea prima la zona in 'Zone servite'."
    }),
    defineField({
      name: "city",
      title: "Città legacy",
      type: "string",
      readOnly: true,
      hidden: ({ document }) => Boolean(document?.cityRef),
      description:
        "Campo mantenuto per compatibilità con gli immobili esistenti. Per i nuovi immobili usa Città/Zona."
    }),
    defineField({ name: "propertyType", title: "Tipologia", type: "string" }),
    defineField({ name: "floor", title: "Piano", type: "string" }),
    defineField({ name: "surface", title: "Superficie", type: "number" }),
    defineField({ name: "rooms", title: "Vani", type: "number" }),
    defineField({ name: "bathrooms", title: "Bagni", type: "number" }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "text",
      rows: 7
    }),
    defineField({
      name: "badges",
      title: "Badge",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "features",
      title: "Caratteristiche",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "images",
      title: "Immagini",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    }),
    defineField({
      name: "isFeatured",
      title: "In evidenza in homepage",
      type: "boolean",
      initialValue: false
    }),
    defineField({ name: "sourceUrl", title: "Link origine", type: "url" }),
    defineField({
      name: "published",
      title: "Pubblicato",
      type: "boolean",
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
      cityName: "cityRef.name",
      legacyCity: "city",
      media: "images.0"
    },
    prepare({ title, location, cityName, legacyCity, media }) {
      return {
        title,
        subtitle: [cityName || legacyCity, location].filter(Boolean).join(" · "),
        media
      };
    }
  }
});
