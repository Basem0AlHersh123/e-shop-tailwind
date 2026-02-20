// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setMapLoaded(true), 500);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-base-200 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-90">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
        {/* Wave SVG (optional visual) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill={isDarkMode ? "#1a1a1a" : "#f8f9fa"}
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Visit Us */}
            <div className="bg-base-100 p-6 rounded-2xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="opacity-90">
                123 Business Avenue
                <br />
                Tech District, San Francisco
                <br />
                CA 94105
              </p>
            </div>
            {/* Card 2: Email Us */}
            <div className="bg-base-100 p-6 rounded-2xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="opacity-90">
                support@styleshop.com
                <br />
                careers@styleshop.com
                <br />
                press@styleshop.com
              </p>
            </div>
            {/* Card 3: Call Us */}
            <div className="bg-base-100 p-6 rounded-2xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="opacity-90">
                +1 (555) 123-4567
                <br />
                +1 (555) 765-4321
                <br />
                Mon-Fri, 9am-6pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>

              {submitSuccess && (
                <div className="alert alert-success mb-6">
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block opacity-80 mb-2">👤 Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block opacity-80 mb-2">
                    ✉️ Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block opacity-80 mb-2">🏷️ Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="block opacity-80 mb-2">💬 Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="textarea textarea-bordered w-full"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow">
                {!mapLoaded && (
                  <div className="flex flex-col items-center justify-center h-64 bg-base-200">
                    <span className="loading loading-spinner"></span>
                    <p className="mt-2 opacity-70">Loading map...</p>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.99655086038!2d-122.52000186730913!3d37.75767927571268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645564625678!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0, opacity: mapLoaded ? 1 : 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Store Location"
                  onLoad={() => setMapLoaded(true)}
                  className="transition-opacity duration-300"
                ></iframe>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <h3 className="font-bold mb-4">🕒 Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="opacity-90">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="opacity-90">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="opacity-70">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold mb-4">🔗 Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="btn btn-circle btn-outline">
                    f
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    x
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    📷
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-base-100 p-6 rounded-2xl shadow">
              <h4 className="font-bold mb-2">
                How quickly do you respond to inquiries?
              </h4>
              <p className="opacity-90">
                We aim to respond to all messages within 24 hours during
                business days.
              </p>
            </div>
            <div className="bg-base-100 p-6 rounded-2xl shadow">
              <h4 className="font-bold mb-2">
                Do you offer international shipping?
              </h4>
              <p className="opacity-90">
                Yes! We ship to most countries worldwide. Shipping costs and
                times vary by location.
              </p>
            </div>
            <div className="bg-base-100 p-6 rounded-2xl shadow">
              <h4 className="font-bold mb-2">What is your return policy?</h4>
              <p className="opacity-90">
                We offer 30-day returns on all unused items in original
                packaging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
