import type { APIRoute } from "astro";
import type { ContactRequest } from "../../lib/types";

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json()) as ContactRequest;
  console.log(body);

  return new Response("", { status: 200 });
};
