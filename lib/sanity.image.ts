import { sanityDataset, sanityProjectId } from "./sanity.client";

type SanityImageAsset = {
  _ref?: string;
  url?: string;
};

type SanityImage = {
  asset?: SanityImageAsset;
  url?: string;
};

export function urlForImage(image?: SanityImage | string | null) {
  if (!image) {
    return "";
  }

  if (typeof image === "string") {
    return image;
  }

  if (image.url) {
    return image.url;
  }

  if (image.asset?.url) {
    return image.asset.url;
  }

  const ref = image.asset?._ref;

  if (!ref || !sanityProjectId || !sanityDataset) {
    return "";
  }

  const [, id, dimensions, extension] = ref.split("-");

  if (!id || !dimensions || !extension) {
    return "";
  }

  return `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/${id}-${dimensions}.${extension}`;
}
