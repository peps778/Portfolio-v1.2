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

        <section id='Skills' className='mb-20 pt-15'>
            <h1 className={TitleSyle}>My Skills</h1>

            <div id="CardsContainer" className="flex flex-row rounded-3xl text-center mt-1 mb-20 lg:max-w-6xl justify-self-center">
                <CardComponent />
            </div>
            <p className='text-center mb-6'>Hands-on experience with a variety of tools and platforms</p>
            <div className='border-2 border-black rounded-xl justify-self-center w-200 bg-transparent z-10 h-fit px-2 padding-transparent'>
                <Carousel images={CarouselImage}/>
            </div>
        </section>
    
    )
}

export default SkillSection;




