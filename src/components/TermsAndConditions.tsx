export default function TermsAndConditions() {
  const content = [
    { title: "I. Acceptance of Terms", text: "By accessing or using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of the website." },
    { title: "II. Use of the Website", text: "You agree to use this website only for lawful purposes and in a manner that does not violate any applicable laws, regulations, or the rights of others. You are prohibited from attempting to gain unauthorized access to the website, disrupting its functionality, or using it to distribute harmful content." },
    { title: "III. Intellectual Property", text: "All content on this website, including text, images, graphics, logos, code, and design elements, is owned by Paul Jhon Magbanua unless stated otherwise. You may not copy, reproduce, distribute, or modify any content without written permission." },
    { title: "IV. User Submissions", text: "If you submit any information through forms on this website, you confirm that the information is accurate and voluntarily provided. Any content you submit may be used in accordance with the Privacy Policy." },
    { title: "V. Marketing Communications", text: "By submitting your email or phone number, you agree that Paul Jhon Magbanua may contact you for portfolio-related updates. You may opt out at any time using the instructions provided in the email." },
    { title: "VI. Third-Party Links", text: "This website may contain links to external websites operated by third parties. I am not responsible for the content, security, or practices of any third-party websites." },
    { title: "VII. Limitation of Liability", text: "To the fullest extent permitted by law, I am not liable for any damages, loss of data, interruptions, or issues beyond my control. Use this website at your own risk." },
    { title: "VIII. No Guarantees or Warranties", text: "This website is provided “as is” and “as available.” I do not guarantee constant availability, error-free content, or complete accuracy." },
    { title: "IX. Data Protection", text: "Personal information submitted through this website is handled according to the Privacy Policy. Users are encouraged to review that document for detailed information." },
    { title: "X. Changes to These Terms", text: "I may update or modify these Terms and Conditions at any time. Changes take effect immediately upon posting." },
    { title: "XI. Governing Law", text: "These Terms are governed by the laws of the Philippines." },
  ];

  return (
    <div className="bg-primary border-4 border-green mx-auto max-w-5xl w-full my-10 lg:my-20 px-5 sm:px-10 lg:px-20 py-10 text-justify text-white rounded-2xl">
      
      {/* Header */}
      <h1 className="text-center text-green font-primary font-bold text-3xl sm:text-header mt-5">
        Terms and Conditions
      </h1>

      <p className="text-center text-sm sm:text-base font-secondary italic mb-10 text-[#7A7A7A]">
        Effective Date: 12 December 2025 <br /> Last Updated: 12 December 2025
      </p>

      {/* Content */}
      {content.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-center font-bold text-[#7A7A7A] text-lg sm:text-xl">
            {item.title}
          </h2>
          <p className="text-base sm:text-lg mt-2 text-[#7A7A7A]">
            {item.text}
          </p>
        </div>
      ))}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10 mb-5">
        
        <a
          href="/"
          className="border-2 border-green text-green hover:bg-green hover:text-white font-primary font-semibold text-sm sm:text-base rounded-full px-10 py-3 text-center"
        >
          Back to Home
        </a>

        <a
          href="/privacy-policy"
          className="border-2 border-green text-green hover:bg-green hover:text-white font-primary font-semibold text-sm sm:text-base rounded-full px-10 py-3 text-center"
        >
          Privacy Policy
        </a>

      </div>
    </div>
  );
}
