export default function ContactForm() {
  return (
    <form className="flex flex-col md:items-center">
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
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
  );
}
