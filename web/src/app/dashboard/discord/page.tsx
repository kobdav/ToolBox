"use client";
import Cards from "@/components/Cards";
import { LuMessageCircle } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";

const subcategoryCards = [
  {
    title: "Nuker",
    description: "Lösche oder erstelle Discord-Kanäle.",
    icon: MdDeleteOutline,
  },
  {
    title: "Message Spammer",
    description: "Spamme Nachrichten in Discord-Chats.",
    icon: LuMessageCircle,
  },
];

const Nettools = () => {
  return (
    <div className="p-6">
      <h1 className="text-white text-3xl mb-6">Discord</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mx-auto">
        {subcategoryCards.map((card) => (
          <Cards
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </ul>
      <div className="flex justify-center mt-6">
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nettools;
