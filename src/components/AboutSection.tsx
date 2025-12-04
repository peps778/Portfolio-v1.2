import type _default from "@astrojs/react/client.js";
import { TitleSyle } from "../styles/GlobalStyles";


//Tailwind Variables that are on repeat
const videoStyle = 'justify-self-center w-3xl rounded-2xl'
const videoSource = '../videos/test_video.mp4'

function  AboutSection() {
    return(
        <>
            <div id="About" className="bg-black text-center pt-10 pb-35">
                <h1 className={TitleSyle}>About</h1>
                <p className="text-white text-largeParagraph mb-20">I’m Paul Jhon Magbanua, a Front-End Developer skilled in coding, CMS, <br /> automation, and CRM management (GoHighLevel). I deliver efficient, creative, <br />and results-driven digital solutions.</p>

                <p className="text-white text-smallParagraph mb-10"><i>Watch the video to learn more!</i></p>
                <video src={videoSource} controls className={videoStyle}></video>
                <button className="text-white bg-green px-10 py-2 text-largeParagraph rounded-full border-2 border-white font-bold mt-10 hover:scale-110 hover:bg-primary hover:text-green hover:border-green">Book A Call!</button>
            </div>
        </>
    )
}

export default AboutSection