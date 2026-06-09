import { defineField, defineType } from "sanity";

type ValidationRule = {
  required: () => ValidationRule;
};

export const property = defineType({
  name: "property",
  title: "Immobile",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titolo",
      type: "string",
      validation: (rule: ValidationRule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (rule: ValidationRule) => rule.required()
    }),
    defineField({
      name: "price",
      title: "Prezzo",
      type: "string"
    }),
    defineField({
      name: "location",
      title: "Località",
      type: "string"
    }),
    defineField({
      name: "propertyType",
      title: "Tipologia",
      type: "string"
    }),
    defineField({
      name: "floor",
      title: "Piano",
      type: "string"
    }),
    defineField({
      name: "surface",
      title: "Superficie",
      type: "number"
    }),
    defineField({
      name: "rooms",
      title: "Vani",
      type: "number"
    }),
    defineField({
      name: "bathrooms",
      title: "Bagni",
      type: "number"
    }),
    defineField({
      name: "description",
      title: "Descrizione",
      type: "text",
      rows: 6
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
    defineField({
      name: "sourceUrl",
      title: "Link origine",
      type: "url"
    }),
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
      subtitle: "location",
      media: "images.0"
    }
  }
});
