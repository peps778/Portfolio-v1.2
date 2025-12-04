import { TitleSyle } from '../styles/GlobalStyles';


export default function ExperienceSection() {
    return (
        <section id='Experience' className="bg-primary py-15 rounded-b-3xl text-center">
            <h1 className={TitleSyle}>Experience</h1>

            <WorkCard />
            <div className="max-w-8xl mx-auto w-5xl text-largeParagraph mt-10 mb-30">
                <p className='text-white text-center'>At NYX Virtual Solutions, I provide comprehensive remote support to ensure smooth daily operations for clients and internal teams. My role involves managing administrative tasks, coordinating communication, and maintaining workflow efficiency in a fast-paced work-from-home setup. I also contribute to frontend development tasks, assisting with UI updates, website fixes, and implementing small feature enhancements to improve user experience.</p>
            </div>
            
            <div className='bg-transparent border border-green rounded-full px-10 w-fit mb-20 text-white text-center text-smallParagraph justify-self-center'>
                <p>Turning chaos into clarity—one task <br /> and one pixel at a time.</p>
            </div>
        </section>
    )
}

export function WorkCard() {
    
    const cardImage = '../images/company-logo.png'


    return (
        
    <article className="text-white grid grid-cols-2 items-center w-fit justify-self-center mr-40 mt-30">
        <img src={cardImage} alt="Company logo of Nyx Virtual Solution" className="w-40 ml-auto" />
    
        <div className='ml-5'>
            <h1 className="font-bold text-xl text-header">NYX Virtual Solutions</h1>
            <p>Frontend Web Developer | Operations Support</p>
            <p>July 2024 - August 2025</p>
        </div>
    </article>

    
    )
}