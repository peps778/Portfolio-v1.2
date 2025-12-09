import { useFormStatus } from "react-dom"
import React, { useRef, useEffect } from 'react';
import Swal from "sweetalert2";
import { useState } from "react";
const inputVariables = "bg-353846 border border-white rounded-2xl px-4 py-2 w-full focus:border-green focus:border-2";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkbox: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    let fieldValue: string | boolean = value;

    // Type guard for checkbox
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }

    console.log("Field changed:", name, "→", fieldValue);

    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitting form data:", form);

    try {
      const res = await fetch("/.netlify/functions/AutoReply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log("Raw response:", res);

      // Check for non-200 errors
      if (!res.ok) {
        const errText = await res.text();
        console.error("Server returned an error:", errText);
        Swal.fire("Error", "Server returned an error", "error");
        return;
      }

      const data = await res.json();

      console.log("Response JSON:", data);

      Swal.fire("Success", "Your message was sent!", "success");
    } catch (err: any) {
      console.error("Fetch error:", err.message || err);
      Swal.fire("Error", "Failed to send message", "error");
    }
  };

    return (
        <form onSubmit={handleSubmit} className="bg-black text-white rounded-2xl mt-15 px-6 py-6 w-[90%] max-w-md lg:mr-70 md:ml-10 sm:justify-self-center order-2 sm:order-1 max-sm:order-1 lg:order-2">
            <h1 className="text-green text-header text-center font-bold font-primary">
                Contact Me!
            </h1>
            <p className="text-center mb-6 font-secondary text-gray-300 ">
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
            required/>

            {/* Email */}
            <label htmlFor="email" className="mt-4 block">Email:*</label>
            <input 
            id="email" 
            className={inputVariables} 
            type="email" 
            name="email" 
            placeholder="yourname@email.com" 
            onChange={handleChange}
            required/>

            {/* Phone */}
            <label htmlFor="phone" className="mt-4 block">Phone:*</label>
            <input 
            id="phone" 
            className={inputVariables} 
            type="text" 
            name="phone" 
            placeholder="+63 1234 567 8901" 
            onChange={handleChange}
            required/>

            {/* Consent */}
            <div className="flex items-start gap-2 mt-4">
                <input 
                type="checkbox" 
                id="checkbox" 
                className="scale-150 mt-1 ml-1 hover:border-green hover:border-2"
                onChange={handleChange} 
                required />
                <label htmlFor="checkbox" className="text-sm leading-tight font-secondary font-thin text-gray-300 ">
                    I consent to the collection and use of my information and
                    agree to receive communications from <span className="text-green">Paul Jhon Magbanua</span> via
                    email and SMS.
                </label>
            </div>

            {/* Button */}
            <button
                id="formSubmit"
                type="submit"
                className="mt-6 w-full bg-green border-2 border-white rounded-2xl py-2 font-semibold font-secondary">
                Let's Connect
            </button>
        </form>
    )
}


 


