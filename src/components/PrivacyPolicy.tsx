import FooterSection from "./FooterSection";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "I. Introduction",
      text: "This Privacy Policy explains how Paul Jhon Magbanua collects, uses, stores, and protects personal information submitted through this website. By accessing or using this website, you agree to the collection and use of information in accordance with this Privacy Policy."
    },
    {
      title: "II. Information I Collect",
      text: "I may collect the following personal information when you voluntarily submit it through forms on this website: Full Name, Email Address, Phone Number. I may also collect non-personal data such as browser information, device type, and pages visited for basic analytics."
    },
    {
      title: "III. Purpose of Data Collection",
      text: "Your information is collected and used solely for portfolio-related marketing purposes, including responding to inquiries, sending updates, and improving website performance. I do not use your information for any purpose unrelated to the operation of this website or my personal marketing communications."
    },
    {
      title: "IV. Data Storage and Security",
      text: "All collected information is stored in a secure database maintained exclusively by Paul Jhon Magbanua. Reasonable measures are implemented to protect your information from unauthorized access, alteration, or destruction. However, no method of electronic storage or transmission is completely secure."
    },
    {
      title: "V. Data Use and Sharing",
      text: "Your personal information will not be sold, rented, or shared with third parties for marketing purposes. Your email may be used to send legitimate communications related to my portfolio or services. I am not responsible for unsolicited emails that do not originate from this website or from me directly. Contact me immediately if you believe your data has been accessed without authorization."
    },
    {
      title: "VI. Your Rights",
      text: "You have the right to opt out of marketing emails, request access to your personal information, and request correction or deletion of your data. To exercise any of these rights, contact me using the email provided on this website."
    },
    {
      title: "VII. External Links",
      text: "This website may contain links to external websites. I am not responsible for the privacy practices, content, or security of any third-party sites."
    },
    {
      title: "VIII. Children's Privacy",
      text: "This website is not intended for individuals under 13. I do not knowingly collect personal information from children."
    },
    {
      title: "IX. Compliance",
      text: "This website follows general principles of data privacy regulations, including the Data Privacy Act of 2012 (Philippines)."
    }
  ];

  return (
    <>
   
    <div className="bg-primary border-4 border-green mx-auto max-w-5xl w-full my-10 lg:my-20 px-5 sm:px-10 lg:px-20 py-10 text-justify text-white rounded-2xl">

      {/* Header */}
      <h1 className="text-center text-green font-primary font-bold text-3xl sm:text-header mt-5">
        Privacy Policy
      </h1>

      <p className="text-center text-sm sm:text-base font-secondary italic mb-10 text-[#7A7A7A]">
        Effective Date: 12 December 2025 <br /> Last Updated: 12 December 2025
      </p>

      {/* Content */}
      {sections.map((item, index) => (
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
          href="/terms-and-conditions"
          className="border-2 border-green text-green hover:bg-green hover:text-white font-primary font-semibold text-sm sm:text-base rounded-full px-10 py-3 text-center"
        >
          Terms & Conditions
        </a>
      </div>
    </div>
    <FooterSection/>
     </>
  );
}
