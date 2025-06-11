import { Code, Smartphone, Database, Container, GitBranch } from "lucide-react";
import {
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiGithub,
  SiAndroid,
  SiIos,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "from-blue-600 to-blue-800",
      isSvg: false,
    },
    {
      name: "Kotlin",
      icon: SiKotlin,
      color: "from-blue-600 to-blue-800",
      isSvg: false,
    },
    {
      name: "Android",
      icon: SiAndroid,
      color: "from-green-600 to-green-800",
      isSvg: false,
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "from-orange-600 to-orange-800",
      isSvg: false,
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "from-gray-600 to-gray-800",
      isSvg: false,
    },
    {
      name: "Ios",
      icon: SiIos,
      color: "from-cyan-600 to-cyan-800",
      isSvg: false,
    },
    {
      name: "Java",
      icon: "/portafolio/java.svg",
      color: "from-cyan-600 to-cyan-800",
      isSvg: true,
    },
  ];
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gray-950/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl from-blue-500 to-purple-500"></div>
              <div
                className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.isSvg ? (
                  <img src={skill.icon} alt="Icon" className="w-8 h-8" />
                ) : (
                  <skill.icon size={28} className="text-white" />
                )}
              </div>
              <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
