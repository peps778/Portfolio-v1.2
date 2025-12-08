import type { loadApp } from "astro/app/node";
import DownloadButton from "../components/individualComponents/DownloadButton"
import { motion } from "framer-motion";
import { h1 } from "motion/react-client";


const heroImageSrc = '../images/PAUL_JHON_MAGBANUA.png'
const spanVariables = 'text-green';
const textAnimation = motion.create(h1);

function HeroSection() {

    return (
        
        <section id="home">
        <div id="textAndSubText" className="font-poppins text-center">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className=" lg:text-hero sm:px-2 sm:text-mobileHeadline font-primary font-bold lg:mt-15 sm:mt-7 mb-15 ">
                    Helping your brand succeed online <br /> with <span className={spanVariables}>Web Development</span> and <br /> <span className={spanVariables}>Creative Digital Solutions.</span>
            </motion.h1>

            <p className=" bg-primary border-3 font-secondary border-green lg:text-largeParagraph text-colorForText px-7 py-4 w-fit justify-self-center rounded-full">
                Showcasing work that delivers results.
            </p>
        </div>

        {/* Another container */}
        <div id="imageAndText" className=" grid grid-cols-1 gap-10 p-15 pb-20 sm:grid-cols-1 lg:grid-cols-2 w-fit justify-center mx-auto">
            <div id="imageSection">
                <img className=" sm:mx-auto"
                     src={heroImageSrc} 
                     alt="Paul Jhon Magbanua's Home Page Image" />
            </div>

            <div id="textSection" className="flex-col content-center text-center">
                <h1 className="font-bold text-header mb-1 sm:text-md font-primary">Paul Jhon Magbanua</h1>
                <p className="mb-4 lg:text-md sm:text-mobileParagraph font-secondary">Front-End Developer | Digital Marketing | <br /> Creative Content Specialist</p>
                <DownloadButton pdfUrl="/documents/MAGBANUA_PAUL_JHON_CV.pdf"/>
            </div>
        </div>
  
        </section>
    )
}

export default HeroSection;