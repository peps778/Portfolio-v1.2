import DownloadButton from "../components/individualComponents/DownloadButton";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const heroImageSrc = "../images/PAUL_JHON_MAGBANUA.png";
const spanVariables = "text-green";

const text = "Showcasing work that delivers results.";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};


function HeroSection() {
  return (
    <section id="home">
      <div id="textAndSubText" className="font-poppins text-center">

        {/* HERO HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-hero sm:px-2 sm:text-mobileHeadline font-primary font-bold lg:mt-15 sm:mt-7 mb-15 max-sm:mt-10 max-sm:text-lg max-sm:mx-10 max-sm:mb-10 text-shadow-xs"
        >
          Helping your brand succeed online <br />
          with <span className={spanVariables}>Web Development</span> and <br />
          <span className={spanVariables}>Creative Digital Solutions.</span>
        </motion.h1>

        {/* TYPEWRITER TEXT */}
        <motion.p
          className="bg-primary border-3 font-secondary border-green lg:text-largeParagraph text-colorForText px-7 py-4 w-fit justify-self-center rounded-full max-sm:text-sm max-sm:px-2 max-sm:py-1 italic"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
  key={index}
  variants={letter}
  style={{ display: "inline-block" }}
>
  {char === " " ? "\u00A0" : char}
</motion.span>

          ))}
        </motion.p>
      </div>

      {/* IMAGE + INFO */}
      <div
        id="imageAndText"
        className="grid grid-cols-1 gap-10 p-15 pb-20 sm:grid-cols-1 lg:grid-cols-2 w-fit justify-center mx-auto max-sm:py-7 max-sm:gap-2 max-sm:pb-20"
      >
        <div id="imageSection">
          <img
            className="sm:mx-auto max-sm:mx-auto max-sm:w-40"
            src={heroImageSrc}
            alt="Paul Jhon Magbanua's Home Page Image"
          />
        </div>

        <div id="textSection" className="flex-col content-center text-center">
          <h1 className="font-bold text-header mb-1 sm:text-md font-primary max-sm:text-2xl">
            Paul Jhon Magbanua
          </h1>
          <p className="mb-4 lg:text-md sm:text-mobileParagraph font-secondary max-sm:text-sm">
            Front-End Developer | Digital Marketing | <br />
            Creative Content Specialist
          </p>
          <DownloadButton pdfUrl="/documents/MAGBANUA_PAUL_JHON_CV.pdf" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
