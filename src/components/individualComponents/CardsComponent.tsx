// Card.tsx
import React from "react";

// Card data with individual styles
const CardData: Card[] = [
  {
    id: 1,
    title: "Front-End Web Development & CMS",
    description:
      "I build responsive websites with clean, efficient code and integrate Content Management Systems (WordPress, etc.) to make content easy to manage and update. My work also focuses on layout, UI, and visual design to ensure a polished user experience.",
    className: "text-white mt-20",
  },
  {
    id: 2,
    title: "CRM Management",
    description:
      "I manage customer relationship systems, especially GoHighLevel (GHL), creating custom campaigns, SMS automations, A2P verification, and lead management workflows. I also handle troubleshooting, client research, and optimizing campaigns to ensure smooth operations and effective marketing outcomes.",
    className: "bg-black text-white",
  },
  {
    id: 3,
    title: "Automation",
    description:
      "I streamline business processes using Zapier and GoHighLevel, implementing birthday reminders, billing notifications, appointment scheduling automations, and Asana task automations. These workflows save time, reduce errors, and improve efficiency across marketing and operational tasks.",
    className: "text-white mt-20",
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
    <div className={`bg-black h-fit border-green border-5 px-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-2xl shadow-md ${className}`}>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="mt-10">{description}</p>
    </div>
  );
}
