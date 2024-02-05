import type { APIRoute } from "astro";
import type { ContactRequest } from "../../lib/types";
import SgMail from "@sendgrid/mail";

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.SENDGRID_API_KEY;
    SgMail.setApiKey(apiKey);

    const body = (await request.json()) as ContactRequest;
    const text = `Email: ${body.email} . Message: ${body.message}`;

    const to = import.meta.env.EMAIL_FROM;
    const from = import.meta.env.EMAIL_TO;
    const subject = "New ttk contact submission";

    await SgMail.send({ to, from, subject, text });

    return new Response("", { status: 200 });
  } catch (e) {
    const error = e as Error;

    console.error("error sending email: ", error.message, error.stack);
    return new Response("", { status: 500 });
  }
};
