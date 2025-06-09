import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Github, ExternalLink } from "lucide-react";
import { SiAppstore } from "react-icons/si";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "VpnLit Mobile App",
      description:
        "A Flutter app for managing VPN connections with real-time analytics and a user-friendly interface. Implemented for both Android and iOS, and includes a speed test feature.A Flutter app for managing VPN connections with real-time analytics and a user-friendly interface. Implemented for both Android and iOS, and includes a speed test feature and AdMob integration.",
      // image: "/vpn_lit.png?height=200&width=300",
      image: "/vpn_lit.png",
      technologies: ["Flutter", "REST API", "Admob"],
      github: null,
      demo: null,
      ios: "https://apps.apple.com/us/app/vpn-lit-best-vpn-proxy/id1627243300",
      android:
        "https://play.google.com/store/apps/details?id=com.vpnlit.app.ext&pcampaignid=web_share",
    },
    {
      title: "Connect2VPN",
      description:
        "Cross-platform productivity app with offline sync, push notifications, and team collaboration features.",
      image: "/connect2vpn.png?height=200&width=300",
      technologies: ["React Native", "SQLite", "Node.js", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      ios: null,
      android: null,
    },
    {
      title: "CryptoPortfolio Tracker",
      description:
        "Real-time cryptocurrency portfolio tracking app with price alerts and comprehensive market analysis.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Android", "Kotlin", "REST API", "Room DB"],
      github: "https://github.com",
      demo: null,
      ios: null,
      android: null,
    },
    {
      title: "FoodieConnect",
      description:
        "Social platform for food enthusiasts to share recipes and restaurant reviews with location-based discovery.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Firebase", "Google Maps", "Cloud Functions"],
      github: "https://github.com",
      demo: "https://demo.com",
      ios: null,
      android: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-gray-950/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="bg-gray-900/50 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.ios || project.android ? (
                  <div className="flex gap-4">
                    {project.android && (
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                        onClick={() => window.open(project.android, "_blank")}
                      >
                        <img
                          src="./play_store.svg"
                          alt="Icon"
                          className="w-7 h-7"
                        />
                        Play Store
                      </Button>
                    )}
                    {project.ios && (
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                        onClick={() => window.open(project.ios, "_blank")}
                      >
                        <img
                          src="./app_store.svg"
                          alt="Icon"
                          className="w-7 h-7"
                        />
                        App Store
                      </Button>
                    )}
                  </div>
                ) : (
                  <div />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
