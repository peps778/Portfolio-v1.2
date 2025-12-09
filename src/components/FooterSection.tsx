import React, { useState } from 'react';
import CenterIcons from './individualComponents/FooterImages';
import { footerVariables } from '../styles/GlobalStyles';
import Swal from 'sweetalert2';

export default function FooterSection() {

  const [input, setInput] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const emailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!input.email || !isValidEmail(input.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/email_only", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: input.email }),
      });

      if (!response.ok) throw new Error("Request failed");

      window.location.href = "/Thankyou";

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error sending email",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className='bg-primary text-white pt-15'>
      <article className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-w-6xl mx-auto p-4 md:p-0 lg:gap-40 sm:gap-20">

        <div className="flex-1 md:flex-1 sm:mx-10 sm:text-center lg:text-left">
          <p className="lg:text-smallParagraph sm:text-mobileParagraph sm:mb-2 font-secondary">
            Paul Jhon Magbanua
          </p>
          <h1 className="lg:text-header lg:mb-8 sm:text-mobileHeadline sm:mb-2 text-green font-primary">
            Building digital experiences that help brands grow.
          </h1>

          <form method="POST" onSubmit={emailSubmit} className="relative w-full max-w-lg">

            <input
              type="email"
              name="email"
              placeholder="yourname@email.com"
              value={input.email}
              onChange={(e) => setInput({ email: e.target.value })}
              className="bg-transparent border-2 border-white rounded-lg p-3 w-full pr-24 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-green sm:w-20 text-white px-4 py-1 text-sm font-extrabold flex items-center justify-center
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "→"
              )}
            </button>

          </form>
        </div>

        <div className="flex-1 md:flex-2 lg:ml-20 sm:text-center lg:text-left">
          <h1 className="lg:text-header mb-1 font-bold text-green font-primary">Contact Information:</h1>
          <p className={footerVariables}>work.paulmagbanua@gmail.com</p>
          <p className={footerVariables}>+63 9958222528</p>
          <p className={footerVariables}>Philippines</p>
        </div>

      </article>

      <CenterIcons />
      <FooterText />
    </footer>
  );
}

export function FooterText() {
  return (
    <div className='w-full bg-bottomFooter text-center text-[#C1C3C7] lg:py-6 lg:mt-20 sm:py-6 sm:mt-10 sm:px-10 font-secondary'>
      <p>© 2025 All Rights Reserved. <br /> Front-End Development • Digital Marketing • Creative Content Production</p>
    </div>
  );
}
