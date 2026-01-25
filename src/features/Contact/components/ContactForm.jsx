const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Send Us a Message
        </h2>

        <form className="bg-white rounded-2xl shadow-lg p-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
