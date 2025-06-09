import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MapPin, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer - Mobile",
      company: "Treinetic (PVT) Ltd",
      period: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Development of cross-platform mobile applications  and native android applications using Flutter, Kotlin, and Java",
        "Integrated third-party APIs and services for enhanced functionality",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Optimized application performance and resolved bugs",
        "Participated in code reviews and contributed to team knowledge sharing",
        "Distributed and maintained applications on Google Play Store and Apple App Store",
        "Implemented Inapp purchases and subscriptions for monetization",
        "Implemented payment gateways",
        "Worked with Firebase for real-time database, authentication, and cloud messaging",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Spera Labs (PVT) Ltd",
      period: "2021 - 2022",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Developed flutter applications with modern architecture patterns",
        "Integrated third-party APIs and services for enhanced functionality",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Optimized application performance and resolved bugs",
        "Participated in code reviews and contributed to team knowledge sharing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-purple-400"></div>
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform -translate-x-1/2 shadow-lg"></div>

              <Card className="bg-gray-950/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-blue-400 mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-xl text-gray-300 font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col lg:items-end mt-4 lg:mt-0 space-y-2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-3 py-1">
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </Badge>
                      {/* <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400 hover:border-gray-500"
                      >
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </Badge> */}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex items-start leading-relaxed"
                      >
                        <span className="text-blue-400 mr-3 mt-1 text-lg">
                          •
                        </span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
