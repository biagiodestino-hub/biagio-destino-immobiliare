import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Sopratitolo hero", type: "string" }),
    defineField({ name: "heroTitle", title: "Titolo hero", type: "string" }),
    defineField({
      name: "heroSubtitle",
      title: "Sottotitolo hero",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "heroImage",
      title: "Immagine hero",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "primaryButtonText",
      title: "Testo pulsante principale",
      type: "string"
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Testo pulsante secondario",
      type: "string"
    }),
    defineField({ name: "servicesTitle", title: "Titolo servizi", type: "string" }),
    defineField({
      name: "servicesSubtitle",
      title: "Sottotitolo servizi",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "valuationCtaTitle",
      title: "Titolo CTA valutazione",
      type: "string"
    }),
    defineField({
      name: "valuationCtaText",
      title: "Testo CTA valutazione",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "featuredSectionTitle",
      title: "Titolo immobili in evidenza",
      type: "string"
    }),
    defineField({
      name: "featuredSectionSubtitle",
      title: "Sottotitolo immobili in evidenza",
      type: "text",
      rows: 3
    })
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    }
  }
});
