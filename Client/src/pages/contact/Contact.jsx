import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">📞 Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="card bg-base-100 shadow-md p-8">
          <form className="space-y-4">
            <div>
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-semibold">Message</label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 Our Location</h3>
            <p>123 Learning Street, Knowledge City, 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <p>support@yourapp.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📱 Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="btn btn-circle btn-outline"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="btn btn-circle btn-outline"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="btn btn-circle btn-outline"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
