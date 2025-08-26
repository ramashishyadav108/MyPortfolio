import AceHire from "../assets/MyProject/AceHire.png";
import VibeCoding from "../assets/MyProject/VibeCoding.png";
import Renewable from "../assets/MyProject/Renewable.png";

const projects = [
  {
  id: 1,
  title: "AceHire – AI-powered Career Platform",
  description:
    "Built AI-powered career platform with 85% job match accuracy using NLP, OpenAI, and job scrapers from 5+ sites. Implemented resume/cover letter generators, ATS score calculator, Job Role Predictor, AI interview prep, and personalized dashboards for 200+ users. Boosted career preparation efficiency and user success rates by 30% via ML-driven tests and goal tracking.",
  image: `${AceHire}`,
  vercelLink: "https://ace-hire.vercel.app/",
  githubLink: "https://github.com/ramashishyadav108/AceHire",
  technologies: [
    "Next.js",
    "JavaScript",
    "PostgreSQL",
    "Python",
    "ML",
    "NLP",
    "OpenAI API",
    "Mira API",
  ],
  category: "Full Stack / AI",
  gradient: "from-purple-500 via-pink-500 to-red-500",
  featured: true,
},
{
  id: 2,
  title: "Vibe-Coding – Full-stack Coding Platform",
  description:
    "Developed a full-stack coding platform with real-time code editing, file explorer, and project management. Integrated OpenAI API for AI-powered code assistance, boosting developer productivity and debugging. Engineered secure authentication with Clerk and persistent storage via Prisma ORM on PostgreSQL.",
  image: `${VibeCoding}`,
  vercelLink: "https://vibe-coding-sand-kappa.vercel.app/",
  githubLink: "https://github.com/ramashishyadav108/Vibe-coding",
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Tailwind CSS",
    "OpenAI API",
    "Clerk Auth",
    "Prisma ORM",
  ],
  category: "Full Stack",
  gradient: "from-teal-500 via-green-500 to-emerald-500",
  featured: false,
},
{
  id: 3,
  title: "Control and Operation of Renewable Energy",
  description:
    "Spearheaded hackathon-winning project optimizing solar/wind energy using ML models with 90% accuracy. Orchestrated scalable Flask backend deployed on AWS, reducing latency by 25%, supporting 50+ real-time queries. Delivered an interactive React/Streamlit dashboard adopted by 20+ operators for live energy analytics.",
  image: `${Renewable}`,
  vercelLink: "https://control-and-operation-of-renewable-energy.vercel.app/",
  githubLink: "https://github.com/ramashishyadav108/Control-and-Operation-of-Renewable-Energy",
  technologies: [
    "Flask",
    "PostgreSQL",
    "Streamlit",
    "AWS",
    "LSTM",
    "Scikit-learn",
    "React",
  ],
  category: "AI / ML / Backend",
  gradient: "from-blue-500 via-sky-500 to-indigo-500",
  featured: false,
}

];

export default projects;
