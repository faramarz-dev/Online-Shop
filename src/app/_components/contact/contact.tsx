"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Your message has been successfully sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ An error occurred, please try again.");
      }
    } catch (error) {
      console.error("⚠️ Server connection error:", error);
      setStatus(`⚠️ Server connection error: ${error}`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="xs:px-12 lg:px-24 xs:h-[1000px] py-24 bg-gradient-to-r from-cyan-900 to-purple-950">
      <div>
        <h1 className="lg:text-3xl xs:text-2xl font-semibold text-white">Contact Us</h1>
        <p className="text-lg text-white">
          Whatever your goal - we will get you there.
        </p>
      </div>

      <div className="h-96 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 mt-14">
        <div className="space-y-14">
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 size-6 text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="grow">
              <h4 className="text-white font-semibold">Our address:</h4>
              <address className="mt-1 text-neutral-300 text-sm not-italic">
                300 Bath Street, Tay House
                <br />
                Glasgow G2 4JR, United Kingdom
              </address>
            </div>
          </div>
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 size-6 text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div className="grow">
              <h4 className="text-white font-semibold">Email us:</h4>
              <Link
                className="mt-1 text-neutral-300 text-sm hover:text-neutral-100 focus:outline-hidden focus:text-neutral-200"
                href="mailto:example@site.co"
                target="_blank"
              >
                hello@example.so
              </Link>
            </div>
          </div>
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 size-6 text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 11 18-5v12L3 14v-3z" />
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
            <div className="grow">
              <h4 className="text-white font-semibold">We&apos;re hiring</h4>
              <p className="mt-1 text-neutral-300">
                We&apos;re thrilled to announce that we&apos;re expanding our
                team and looking for talented individuals like you to join us.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl p-6 rounded-lg">
          {status && <p className="text-center text-red-500">{status}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 border rounded-lg"
              required
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}