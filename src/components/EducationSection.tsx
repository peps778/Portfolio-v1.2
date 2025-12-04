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
            <img className='col-span-2 mx-auto mt-8' src={educationImage} alt="Education logo" />

            <div className='col-span-7 w-100'>
                <h1 className='text-header mt-15'>{name}</h1>
                <p>{degree}</p>
                {award && <p>{award}</p>}  {/* Conditional rendering */}
                <p>{period}</p>
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
        <section id="education" className='mb-100'>
            <h1 className={TitleSyle}>Education</h1>

            <div className="bg-primary text-white grid grid-cols-10 items-center justify-self-center px-20 pb-10 mx-10 align-items-center rounded-2xl">
                {educationData.map((edu, index) => (
                    <EducationEntry key={index} name={edu.name} degree={edu.degree} period={edu.period} award={edu.award} />
                ))}
            </div>
        </section>
    )
}