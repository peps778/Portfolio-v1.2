import { TitleSyle } from '../styles/GlobalStyles';


export default function ExperienceSection() {
    return (
        <section id='experience' className="bg-primary py-15 rounded-b-3xl text-center">
            <h1 className={TitleSyle}>Experience</h1>

            <WorkCard />
                <p className='text-white sm:mx-20 my-20 lg:text-largeParagraph lg:w-300 md:w-300 sm:w-100 justify-self-center mx-10 font-secondary'>At NYX Virtual Solutions, I provide comprehensive remote support to ensure smooth daily operations for clients and internal teams. My role involves managing administrative tasks, coordinating communication, and maintaining workflow efficiency in a fast-paced work-from-home setup. I also contribute to frontend development tasks, assisting with UI updates, website fixes, and implementing small feature enhancements to improve user experience.</p>
           
            
            <div className='bg-transparent border border-green rounded-full px-10 w-fit mb-20 text-white text-center text-smallParagraph justify-self-center'>
                <p>Turning chaos into clarity—one task <br /> and one pixel at a time.</p>
            </div>
        </section>
    )
}

export function WorkCard() {
    
    const cardImage = '../images/company-logo.png'


    return (
        
    <article className="text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center lg:w-fit justify-items-center lg:mx-auto lg:mt-30">
        <img src={cardImage} alt="Company logo of Nyx Virtual Solution" className="w-40 lg:ml-10 md:ml-auto" />
    
        <div className=' sm:mx-auto lg:right-95 md:right-20'>
            <h1 className="font-bold font-primary text-xl text-header">NYX Virtual Solutions</h1>
            <p className='font-secondary'>Frontend Web Developer | Operations Support</p>
            <p className='font-secondary'>July 2024 - August 2025</p>
        </div>
    </article>  

    
    )
}