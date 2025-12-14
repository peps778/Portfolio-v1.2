import React, { useState } from "react";
import Swal from "sweetalert2";

const inputVariables =
  "bg-353846 border border-white rounded-2xl px-4 py-2 w-full focus:border-green focus:border-2";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkbox: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    let fieldValue: string | boolean = value;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }

    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return; 

    setIsSubmitting(true); 

    try {
      const payload = {
      ...form,
      checkbox: Boolean(form.checkbox),
    };

      const res = await fetch("/.netlify/functions/sendToMake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Server returned an error:", errText);
        Swal.fire("Error", "Server returned an error", "error");
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();
      setForm({
        fullName: "",
        email: "",
        phone: "",
        checkbox: false,
      }); 
      window.location.href = "/thank-you";
    } catch (err: any) {
      console.error("Fetch error:", err.message || err);
      Swal.fire("Error", "Failed to send message", "error");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white rounded-2xl mt-15 px-6 py-6 w-[90%] max-w-md lg:mr-70 md:ml-10 sm:justify-self-center order-2 sm:order-1 max-sm:order-1 lg:order-2"
      method="POST"
    >
      <h1 className="text-green text-header text-center font-bold font-primary">
        Contact Me!
      </h1>
      <p className="text-center mb-6 font-secondary text-gray-300">
        <i>I’m excited to hear about your project.</i>
      </p>

      {/* Full Name */}
      <label htmlFor="fullName">Full Name:*</label>
      <input
        id="fullName"
        className={inputVariables}
        type="text"
        name="fullName"
        placeholder="Juan Dela Cruz"
        onChange={handleChange}
        value={form.fullName}
        required
      />

      {/* Email */}
      <label htmlFor="email" className="mt-4 block">
        Email:*
      </label>
      <input
        id="email"
        className={inputVariables}
        type="email"
        name="email"
        placeholder="yourname@email.com"
        onChange={handleChange}
        value={form.email}
        required
      />

      {/* Phone */}
      <label htmlFor="phone" className="mt-4 block">
        Phone:*
      </label>
      <input
        id="phone"
        className={inputVariables}
        type="text"
        name="phone"
        placeholder="+63 1234 567 8901"
        onChange={handleChange}
        value={form.phone}
        required
      />

      {/* Consent */}
      <div className="flex items-start gap-2 mt-5 ml-2">
        <input
          type="checkbox"
          name="checkbox"
          className="scale-150 mt-1 ml-1 hover:border-green hover:border-2"
          onChange={handleChange}
          checked={form.checkbox}
        />
        <label
          htmlFor="checkbox"
          className="text-sm leading-tight font-secondary font-thin text-gray-300 "
        >
          I consent to the collection and use of my information and agree to
          receive communications from{" "}
          <span className="text-green">Paul Jhon Magbanua</span> via email and
          SMS.
        </label>
      </div>

      {/* Button */}
      <button
        id="formSubmit"
        type="submit"
        className="mt-6 w-full bg-green border-2 border-white rounded-2xl py-2 font-semibold font-secondary flex justify-center items-center gap-2"
        disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="loader-border border-t-2 border-white w-5 h-5 rounded-full animate-spin"></span>
            Sending...
          </>
        ) : (
          "Let's Connect"
        )}
      </button>

      <p className="mt-5 text-sm text-green justify-self-center"><a className="underline hover:text-blue-500" href="/terms-and-conditions">Terms and Conditions</a> | <a className="underline hover:text-blue-500" href="/privacy-policy">Privacy Policy</a></p>
    </form>
  );
}
