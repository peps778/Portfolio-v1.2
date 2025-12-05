import type _default from "@astrojs/react/client.js";
import { TitleSyle } from "../styles/GlobalStyles";

//Tailwind Variables that are on repeat
const videoStyle = 'justify-self-center w-3xl rounded-2xl'
const videoSource = '../videos/test_video.mp4'

export const aboutTitle = "About | Paul Jhon Magbanua"

function  AboutSection() {
    return(
        
            <section id="about" className="bg-black text-center pt-10 pb-35 sm:pb-20    ">
                <h1 className={TitleSyle}>About</h1>
                <p className="text-white font-secondary lg:text-largeParagraph sm:text-mobileParagraph sm:mx-7 mb-20 sm:mt-10 ">I’m Paul Jhon Magbanua, a Front-End Developer skilled in coding, CMS, <br /> automation, and CRM management (GoHighLevel). I deliver efficient, creative, <br />and results-driven digital solutions.</p>

                <p className="text-smallParagraph sm:text-mobileParagraph mb-10 text-green"><i>Watch the video to learn more!</i></p>
                <video src={videoSource} controls className={videoStyle}></video>
                <button className="text-white bg-green px-10 py-2 text-largeParagraph rounded-full border-2 border-white font-bold mt-10 hover:scale-110 hover:bg-primary hover:text-green hover:border-green sm:text-mobileParagraph font-secondary"><a href="/Contact">Book A Call!</a></button>
            </section>
    )
}

export default AboutSection