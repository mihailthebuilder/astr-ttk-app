import { useState } from "react";
import type { ContactRequest } from "../lib/types";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = (event.currentTarget.email as HTMLInputElement).value;
    const message = (event.currentTarget.message as HTMLTextAreaElement).value;

    const request: ContactRequest = { email, message };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      setErrorMessage("Something went wrong. Please try again later.");
      return;
    }

    setErrorMessage("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="w-full p-2 bg-green-700 text-white rounded-md md:text-center">
        Thanks for reaching out. We'll get back to you ASAP!
      </div>
    );
  }

  return (
    <form className="flex flex-col md:items-center" onSubmit={submit}>
      <div className="mb-4 w-full">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-600"
          required
        />
      </div>

      <div className="mb-4 w-full">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your message"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-600"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 min-w-[10rem]"
      >
        Submit
      </button>

      {errorMessage && (
        <div className="mt-10 w-full p-2 bg-red-500 text-white rounded-md md:text-center">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
