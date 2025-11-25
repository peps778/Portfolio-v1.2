const heroImageSrc = '../images/PAUL_JHON_MAGBANUA.png'

const spanVariables = 'text-green';


function HeroSection() {
    return (
        <>
        <div id="textAndSubText" className="font-poppins text-center">
            <h1 className="text-7xl font-bold mt-20 mb-15">
                Helping your brand succeed online <br /> with <span className={spanVariables}>Web Development</span> and <br /> <span className={spanVariables}>Creative Digital Solutions.</span>
            </h1>

            <p className="bg-black text-2xl text-colorForText px-7 py-4 w-fit justify-self-center rounded-2xl">
                Showcasing work that delivers results.
            </p>
        </div>

        {/* Another Grid */}
        <div id="imageAndText" className=" w-fit gap-10 p-15 flex justify-center justify-self-center">
            <div id="imageSection">
                <img src={heroImageSrc} alt="Paul Jhon Magbanua's Home Page Image" />
            </div>

            <div id="textSection" className="flex-col content-center text-center">
                <h1 className="font-bold text-3xl mb-3">Paul Jhon Magbanua</h1>
                <p className="mb-3">Front-End Developer | Digital Marketing & <br /> Creative Content Specialist</p>
                <button id='downloadCV' className="bg-whiteBackground border-2 border-black rounded-4xl py-2 px-7">
                    Download My CV!
                </button>
            </div>
        </div>
        </>
    )
}

export default HeroSection;