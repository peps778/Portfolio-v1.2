const heroImageSrc = '../images/PAUL_JHON_MAGBANUA.png'

const spanVariables = 'text-green';


function HeroSection() {
    return (
        <section id="home">
        <div id="textAndSubText" className="font-poppins text-center">
            <h1 className="lg:text-hero sm:px-2 sm:text-mobileHeadline font-bold lg:mt-15 sm:mt-7 mb-15 ">
                Helping your brand succeed online <br /> with <span className={spanVariables}>Web Development</span> and <br /> <span className={spanVariables}>Creative Digital Solutions.</span>
            </h1>

            <p className="bg-primary border-3 border-green lg:text-largeParagraph text-colorForText px-7 py-4 w-fit justify-self-center rounded-full">
                Showcasing work that delivers results.
            </p>
        </div>

        {/* Another container */}
        <div id="imageAndText" className=" w-fit gap-10 p-15 flex justify-center justify-self-center pb-20 sm:flex-col">
            <div id="imageSection">
                <img className="hover:scale-110 sm:mx-auto" src={heroImageSrc} alt="Paul Jhon Magbanua's Home Page Image" />
            </div>

            <div id="textSection" className="flex-col content-center text-center">
                <h1 className="font-bold text-header mb-1 sm:text-md">Paul Jhon Magbanua</h1>
                <p className="mb-4 lg:text-smallParagraph sm:text-mobileParagraph">Front-End Developer | Digital Marketing | <br /> Creative Content Specialist</p>
                <button id='downloadCV' className="bg-whiteBackground border-2 border-black rounded-4xl py-2 px-7 hover:border-green">
                    Download My CV!
                </button>
            </div>
        </div>
  
        </section>
    )
}

export default HeroSection;