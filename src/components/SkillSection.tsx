import CardComponent from '../components/CardsComponent';
import { TitleSyle } from '../styles/GlobalStyles';


function SkillSection() { 
    return(
        <>
        <section>
            <h1 className={TitleSyle}>My Skills</h1>
            <div id="CardsContainer" className="bg-whiteBackground flex flex-col gap-10 p-10 rounded-3xl max-w-6xl justify-self-center">
                <CardComponent />
            </div>
        </section>
        </>
    )
}

export default SkillSection;




