export const sanityApiVersion = "2025-02-19";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityReadToken = process.env.SANITY_API_READ_TOKEN;

export function isSanityConfigured() {
  return Boolean(sanityProjectId && sanityDataset);
}

type SanityResponse<T> = {
  result?: T;
};

export async function fetchSanity<T>(query: string) {
  if (!isSanityConfigured()) {
    return null;
  }

  const url = new URL(
    `https://${sanityProjectId}.api.sanity.io/v${sanityApiVersion}/data/query/${sanityDataset}`
  );
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");

  try {
    const response = await fetch(url, {
      headers: sanityReadToken ? { Authorization: `Bearer ${sanityReadToken}` } : undefined,
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as SanityResponse<T>;
    return data.result ?? null;
  } catch {
    return null;
  }
}
