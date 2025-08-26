import Ahouba from "../assets/Achievements/AhoubaCP.jpg";
import InterIIITA from "../assets/Achievements/InterIIITA.jpg";
import { Trophy, Code } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Ahouba Hackathon",
    issuer: "Ahouba Platform",
    date: "2025",
    category: "Hackathon",
    orientation: "landscape",
    image: Ahouba,
    description:
      "3rd Winner of Ahouba Hackathon for developing innovative solutions and showcasing creativity in problem-solving.",
    skills: ["React.js", "Node.js", "Problem Solving", "Teamwork", "Innovation"],
    color: "from-orange-500 via-red-500 to-pink-500",
    icon: Trophy,
    achievement: "3rd Place",
  },
  {
    id: 2,
    title: "Inter IIITA Sports Contest",
    issuer: "IIIT Allahabad",
    date: "2024",
    category: "Sports",
    orientation: "portrait",
    image: InterIIITA,
    description:
      "Secured 3rd place in the 4×100m relay, demonstrating teamwork, speed, and coordination.",
    skills: ["Teamwork", "Speed", "Endurance", "Coordination"],
    color: "from-emerald-500 via-teal-500 to-blue-500",
    icon: Code,
    achievement: "3rd Place",
  },
];

export default achievements;
