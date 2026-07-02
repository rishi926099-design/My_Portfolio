import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { sendContact } from "../api/contactApi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await sendContact(form);

      setSuccess("Message sent successfully ✅");

      // clear form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Let's <span className="text-blue-400">Connect</span>
            </h2>

            <p className="text-slate-400 mb-10 text-lg">
              I'm currently looking for new opportunities. Feel free to contact
              me for internships, collaborations, or full-time roles.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <div>
                  <p className="text-slate-400">Email</p>
                  <p>rishi926099@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p>+91 9260976531</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="text-slate-400">Location</p>
                  <p>Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-sm mt-2 text-green-400">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
