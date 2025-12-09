
export default function ThankyouPage() {
    return(
        <section className="text-center h-dvh">

            <h1 className="text-green font-bold lg:text-hero sm:text-4xl mt-25 mb-2 sm:mx-5 font-primary">Thank you for reaching out!</h1>
            <h2 className="font-bold  sm:text-2xl lg:text-header mb-5 sm:mx-10 font-secondary lg:mb-20">I am excited to work with you.</h2>
            <p className="text-largeParagraph mb-20 sm:mx-10 font-secondary sm:text-lg">Please expect to receive an initial email response within one business day, and no later than three business days.</p>
            <hr className=" my-20 border-primary w-[40%] mx-auto border" />
            <HomeButton />
            <h2 className="text-green font-bold text-header font-primary sm:text-4xl">Paul Jhon Magbanua</h2>
            <p className="mb-15 text-base sm:mx-10 sm:text-lg">Front-End Developer | Digital Marketing & Creative Content Specialist</p>
        </section>
    )
}

export function HomeButton() {
    return(
        <button className="border-2 border-green rounded-full px-15 pb-1 font-bold text-green mb-20 text-largeParagraph hover:scale-110">
            <a className="self-center" href="/">Home</a>
        </button>
    )
}