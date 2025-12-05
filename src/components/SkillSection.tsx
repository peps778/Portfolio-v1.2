import CardComponent from './individualComponents/CardsComponent';
import { TitleSyle } from '../styles/GlobalStyles';
import Carousel from './individualComponents/ImageCarousel';

const CarouselImage = [
    '../images/asana.png',
    '../images/ghl.png',
    '../images/slack.png',
    '../images/vscode.png',
    '../images/zapier.png',

]

function SkillSection() { 
    return(

        <section id='skills' className='mb-20 pt-15 sm:pt-8 sm:mb-10'>
            <h1 className={TitleSyle}>My Skills</h1>

            <div id="CardsContainer" className="flex flex-row rounded-3xl text-center mb-20 lg:max-w-6xl justify-self-center">
                <CardComponent />
            </div>
            <p className='text-center text-smallParagraph mb-6 mt-20'><i>Hands-on experience with a variety of <br /> tools and platforms</i></p>
            <div className='border-2 border-black rounded-full justify-self-center lg:w-200 md:w-200 sm:w-100 bg-transparent z-1 h-fit px-10 padding-transparent'>
                <Carousel images={CarouselImage}/>
            </div>
        </section>
    
    )
}

export default SkillSection;




