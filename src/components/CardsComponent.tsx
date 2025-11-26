const CardData:Card[] = [
    {   id:1,
        title:" Front-End Web Development & CMS",
        description:"I build responsive websites with clean, efficient code and integrate Content Management Systems (WordPress, etc.) to make content easy to manage and update. My work also focuses on layout, UI, and visual design to ensure a polished user experience.", 
        style: "bg-black",
    },

    {   id: 2,
        title: "CRM Management",
        description: "I manage customer relationship systems, especially GoHighLevel (GHL), creating custom campaigns, SMS automations, A2P verification, and lead management workflows. I also handle troubleshooting, client research, and optimizing campaigns to ensure smooth operations and effective marketing outcomes.",
        style: "bg-black",
    },

    {   id: 3,
        title:"Automation",
        description:" streamline business processes using Zapier and GoHighLevel, implementing birthday reminders, billing notifications, appointment scheduling automations, and Asana task automations. These workflows save time, reduce errors, and improve efficiency across marketing and operational tasks.",
        style: "bg-black",
        }
]
interface Card {
    id: number;
    title: string;
    description: string;
    style: string;
}


interface CardProps {
    title: string;
    description: string;
}

export default function Card() {
    return(
        <div>
            {CardData.map((item) => (<CardComponent key={item.id} title={item.title}  description={item.description}/>))}
        </div>
    )
}



function CardComponent({title, description,}: CardProps) {
    return(
        <div className={'text-white'}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

