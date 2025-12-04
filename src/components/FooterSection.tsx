
export default function FooterSection() {
    return (
        <footer className="bg-primary text-white py-15">
            <article className="flex gap-30 justify-self-center bg-red-300">
                <div className="flex-1">
                    <p>Paul Jhon Magbanua</p>
                    <h1>Building digital experiences that help brands grow.</h1>
                    <form action="submit" className="flex">
                        <input type="email" className="bg-transparent border-2 border-white rounded-2xl" />
                         <button className="rounded-full bg-green px-5 ml-25 absolute">Submit</button>
                    </form>
                </div>


                <div className="flex-2">
                    <h1>Contact Information:</h1>
                    <p>work.paulmagbanua@gmail.com</p>
                    <p>+63 9958222528</p>
                    <p>Philippines</p>
                </div>
            </article>


        </footer>
        
    )
}