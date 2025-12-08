
export default function() {
    const customVariables ='text-center'
    return(
        <section className="grid">
            <h1 className={`${customVariables} text-green font-primary lg:text-hero font-bold lg:mt-30 sm:text-4xl sm:mt-15 sm:mb-1`}>ERROR 404</h1>
            <h2 className={`${customVariables} font-secondary text-header font-bold lg:mb-20 sm:text-xl mb-5`}>Page not found.</h2>
            <p className={`${customVariables} font-tertiary lg:mb-20 lg:text-largeParagraph lg:mx-60 sm:text-sm sm:mx-10 sm:mb-10`}>It looks like the page you’re trying to reach doesn’t exist or may have been moved. Please check the URL or return to the homepage to continue browsing.</p>

            <button className={`${customVariables} sm:my-10 justify-self-center border-2 text-green hover:text-white hover:bg-green border-green font-primary font-semibold lg:text-smallParagraph rounded-full px-10 py-3`} type="button">
                <a href="/">Back to Home</a>
            </button>

            <p className={`${customVariables} font-tertiary mb-20 lg:text-smallParagraph lg:mt-10 sm:mt-10 sm:text-sm`}>If you believe this is an error, feel free to contact <br /> <span className="text-green"><a href="/Contact">Paul Jhon Magbanua.</a></span></p>
        </section>
    )
}