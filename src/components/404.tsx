
export default function() {
    const customVariables ='text-center'
    return(
        <section className="grid">
            <h1 className={`${customVariables} text-green font-primary`}>ERROR 404</h1>
            <h2 className={`${customVariables} font-secondary`}>Page not found.</h2>
            <p className={`${customVariables} font-tertiary`}>It looks like the page you’re trying to reach doesn’t exist or may have been moved. Please check the URL or return to the homepage to continue browsing.</p>

            <button className={`${customVariables} justify-self-center bg-green`} type="button">
                <a href="/">Back to Home</a>
            </button>

            <p className={`${customVariables} font-tertiary`}>If you believe this is an error, feel free to contact <span className="text-green font-black"><a href="/Contact">Paul Jhon Magbanua.</a></span></p>
        </section>
    )
}