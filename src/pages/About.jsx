// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg opacity-90">
            From a small idea to your favorite shopping destination
          </p>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="opacity-90 mb-8">
                We believe shopping should be simple, enjoyable, and accessible
                to everyone. Our mission is to bring you the best products at
                the best prices, with exceptional customer service every step of
                the way.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm opacity-80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm opacity-80">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format"
                alt="Our team working"
                className="rounded-2xl shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="bg-base-100 p-6 rounded-2xl shadow text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Trust & Security</h3>
              <p className="opacity-90">
                Your data and transactions are always protected with
                industry-leading security.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-base-100 p-6 rounded-2xl shadow text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p className="opacity-90">
                Quick shipping and real-time tracking so you know exactly when
                to expect your order.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-base-100 p-6 rounded-2xl shadow text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="opacity-90">
                Your satisfaction is our priority. We're here to help 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Story Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8 relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-base-300 hidden md:block"></div>

            {[
              {
                year: "2020",
                title: "The Beginning",
                desc: "Started as a small online store with just 10 products and big dreams.",
              },
              {
                year: "2022",
                title: "First Milestone",
                desc: "Reached 10,000 happy customers and expanded to 1000+ products.",
              },
              {
                year: "2024",
                title: "Today",
                desc: "Now serving thousands of customers monthly with 24/7 support.",
              },
            ].map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-16 flex">
                {/* Year badge */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold -ml-4 md:-ml-6">
                  {item.year.slice(-2)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="opacity-90 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* Founder 1 */}
            <div className="bg-base-100 rounded-2xl p-6 max-w-xs text-center shadow">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format"
                alt="Founder 1"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="opacity-80 mb-3">Co-Founder & CEO</p>
              <p className="opacity-90 text-sm mb-4">
                Passionate about e-commerce and customer experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-lg">
                  📧
                </a>
                <a href="#" className="text-lg">
                  💼
                </a>
                <a href="#" className="text-lg">
                  🐦
                </a>
              </div>
            </div>
            {/* Founder 2 */}
            <div className="bg-base-100 rounded-2xl p-6 max-w-xs text-center shadow">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format"
                alt="Founder 2"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="opacity-80 mb-3">Co-Founder & CTO</p>
              <p className="opacity-90 text-sm mb-4">
                Tech enthusiast building the future of online shopping.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-lg">
                  📧
                </a>
                <a href="#" className="text-lg">
                  💼
                </a>
                <a href="#" className="text-lg">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to start shopping?</h2>
          <p className="opacity-90 mb-8">
            Join thousands of satisfied customers today
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
