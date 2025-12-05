import { TitleSyle } from '../styles/GlobalStyles';
const educationImage = '../images/education-icon.png'; 

type EducationEntryType = {
    name: string;
    degree: string;
    period: string;
    award?: string;
}

export function EducationEntry({ name, degree, period, award }: EducationEntryType) {
    return (
        <>
            <img className='col-span-1 sm:col-span-2 lg:ml-auto lg:mt-8 sm:ml-10' src={educationImage} alt="Education logo" />

            <div className='col-span-9 sm:col-span-8 lg:w-fit  sm:ml-10 sm:mt-10 sm:mx-10'>
                <h1 className='lg:text-header lg:mt-10 sm:text-2xl'>{name}</h1>
                <p className='lg:text-largeParagraph sm:text-mobileParagraph'>{degree}</p>
                {award && <p className='lg:text-largeParagraph sm:text-mobileParagraph'>{award}</p>}  {/* Conditional rendering */}
                <p className='lg:text-largeParagraph sm:text-mobileParagraph'>{period}</p>
            </div>

        </>
    )
}

export default function EducationSection() {
    const educationData: EducationEntryType[] = [
        {
            name: "Bago City College", 
            degree: "Bachelor of Science in Information Technology",
            period: "2025 - Under Graduate",
        }, 
        {
            name: "i-Tech Computer Education Senior Highschool Bago City Inc.", 
            degree: "Graduate of Computer Programming NC III",
            award: "Awarded as the Programmer of the year.",
            period: "2022-2024"
        }, 
        {
            name: "Ramon Torres Louisiana National Highschool ", 
            degree: "Graduate of Junior Highschool",
            period: "2018-2022",
        }, 
    ]

    return (
        <section id="education" className='lg:mb-50 lg:mt-20 sm:mb-15 sm:mt-10'>
            <h1 className={TitleSyle}>Education</h1>

            <div className="bg-primary text-white grid grid-cols-10 gap-3 items-center align-start justify-self-center lg:px-20 lg:pb-10 lg:mx-10 align-items-center rounded-2xl sm:mx-10 border-3 border-green">
                {educationData.map((edu, index) => (
                    <EducationEntry key={index} name={edu.name} degree={edu.degree} period={edu.period} award={edu.award} />
                ))}
            </div>
        </section>
    )
}