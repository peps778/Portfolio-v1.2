import { useFormStatus } from "react-dom"
import React, { useRef, useEffect } from 'react';
import Swal from "sweetalert2";


export default function ContactForm() {
    const inputVariables = "bg-353846 border border-white rounded-2xl px-4 py-2 w-full focus:border-green focus:border-2";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        Swal.fire({
            title: 'Form is under development!',
            text: "Get back soon 😊",
            icon: "info",
            confirmButtonText: "OK",
            confirmButtonColor: "#36DE55",
        })

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
            <input id="fullName" className={inputVariables} type="text" name="fullName" placeholder="Juan Dela Cruz" required/>

            {/* Email */}
            <label htmlFor="email" className="mt-4 block">Email:*</label>
            <input id="email" className={inputVariables} type="email" name="email" placeholder="yourname@email.com" required/>

            {/* Phone */}
            <label htmlFor="phone" className="mt-4 block">Phone:*</label>
            <input id="phone" className={inputVariables} type="text" name="phone" placeholder="+63 1234 567 8901" required/>

            {/* Consent */}
            <div className="flex items-start gap-2 mt-4">
                <input type="checkbox" id="checkbox" className="scale-150 mt-1 ml-1 hover:border-green hover:border-2" required />
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



