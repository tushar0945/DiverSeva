import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappNumber = "918999703730"; // replace with your WhatsApp number

    const text = `New Contact Message:

Name: ${name}
Email: ${email}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Send Us a Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
