// Card.tsx
import React from "react";

// Card data with individual styles
const CardData: Card[] = [
  {
    id: 1,
    title: "Front-End Web Development & CMS",
    description:
      "I build responsive websites with clean, efficient code and integrate Content Management Systems (WordPress, etc.) to make content easy to manage and update. My work also focuses on layout, UI, and visual design to ensure a polished user experience.",
    className: " lg:mt-20 pb-15 pt-5",
  },
  {
    id: 2,
    title: "CRM Management",
    description:
      "I manage customer relationship systems, especially GoHighLevel (GHL), creating custom campaigns, SMS automations, A2P verification, and lead management workflows. I also handle troubleshooting, client research, and optimizing campaigns to ensure smooth operations and effective marketing outcomes.",
    className: "",
  },
  {
    id: 3,
    title: "Automation",
    description:
      "I streamline business processes using Zapier and GoHighLevel, implementing birthday reminders, billing notifications, appointment scheduling automations, and Asana task automations. These workflows save time, reduce errors, and improve efficiency across marketing and operational tasks.",
    className: " lg:mt-20",
  },
];

// Card type
interface Card {
  id: number;
  title: string;
  description: string;
  className: string;
}

// Props for individual card
interface CardProps {
  title: string;
  description: string;
  className?: string;
}

// Parent component rendering all cards
export default function CardList({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-6 justify-center ${className}`}>
      {CardData.map((item) => (
        <CardComponent
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
        />
      ))}
    </div>
  );
}

// Individual card component
function CardComponent({ title, description, className = "" }: CardProps) {
  return (
    <div className={`bg-primary h-fit hover:scale-105 hover:bg-primary hover:text-white border-green hover:border-4 border-3 w-full sm:w-80 md:w-1/3 lg:w-1/4 p-4 rounded-2xl shadow-md ${className}`}>
      <h1 className="text-largeParagraph font-primary font-bold mb-2 text-white">{title}</h1>
      <p className="mt-10 font-secondary text-smallParagraph text-white">{description}</p>
    </div>
  );
}
