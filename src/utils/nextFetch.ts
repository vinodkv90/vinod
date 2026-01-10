import { IFormInput } from "@/types/contact";

export const nextFetch = async <T = unknown>(
  slug: string,
  method: string = "GET",
  headers: Record<string, string> = { "Content-Type": "application/json" },
  body: IFormInput | null = null,
  credentials: RequestCredentials = "include",
  revalidate: number = 300 // default: 5 minutes
): Promise<T> => {
  if (!slug) {
    throw new Error("Slug is required");
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_END_POINT;
  if (!baseUrl) {
    throw new Error("API endpoint is not configured");
  }

  const url = baseUrl + slug;

  const options: RequestInit = {
    method,
    headers: {
      ...headers,
      Accept: "application/json",
    },
    credentials,
    next: { revalidate }, // ✅ ISR instead of no-store
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response is not JSON");
    }

    const result: T = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Unknown fetch error:", error);
    }
    throw error; // Re-throw to handle in the component
  }
};
