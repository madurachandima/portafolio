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
        "A Flutter app for managing VPN connections with real-time analytics and a user-friendly interface. Implemented for both Android and iOS, the app includes a speed test feature and AdMob integration.",
      // image: "/vpn_lit.png?height=200&width=300",
      image: "/portafolio/vpn_lit.png",
      technologies: ["Flutter", "REST API", "Admob"],
      github: null,
      demo: null,
      isPersonal: false,
      developedAt: "Treinetic (Pvt) Ltd",
      participation: [
        "Developed the entire app using Flutter.",
        "Integrated REST APIs for VPN management and analytics.",
        "Implemented AdMob for monetization.",
        "Deployed the app on both Android and iOS platforms.",
      ],
      ios: "https://apps.apple.com/us/app/vpn-lit-best-vpn-proxy/id1627243300",
      android:
        "https://play.google.com/store/apps/details?id=com.vpnlit.app.ext&pcampaignid=web_share",
    },
    {
      title: "Connect2VPN App",
      description:
        "A Flutter app for managing VPN connections with real-time analytics and a user-friendly interface. Implemented for both Android and iOS.",
      image: "/portafolio/connect2vpn.png?height=200&width=300",
      technologies: ["Flutter", "SOUP API"],
      github: null,
      demo: null,
      isPersonal: false,
      developedAt: "Treinetic (Pvt) Ltd",
      participation: [
        "Designed and developed the complete mobile application using Flutter.",
        "Integrating REST APIs for VPN management and analytics.",
        "Implemented AdMob for monetization.",
        "Deployed the app on both Android and iOS platforms. rr",
      ],
      ios: "https://apps.apple.com/in/app/connect2vpn/id1565775173",
      android:
        "https://play.google.com/store/apps/details?id=com.connect2vpn.app&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    },
   
    {
      title: "Champ Turf App",
      description:
        "Champ Turf is a Flutter-based mobile application designed to streamline the booking process for indoor cricket grounds while offering a variety of additional services. Users can create and manage personal profiles, view booking history, and customize their preferences. The app enables users to explore available time slots and specific zones within the facility, making it easy to reserve spaces for games. Secure online payment integration ensures a smooth and instant booking experience. In addition to ground reservations, the app also offers access to a range of training classes—not limited to cricket—catering to users interested in various sports and fitness programs. To enhance user experience, bookings can include optional add-ons such as refreshments and other services. With a modern user interface and responsive design, Champ Turf provides a comprehensive, user-friendly solution for managing indoor sports activities.",
      image: "/portafolio/champ_turf.png?height=200&width=300",
      technologies: ["Flutter", "REST API", "Firebase Crashlytics","Google Analytics", "Payment Gateway"],
      github: null,
      demo: null,
      isPersonal: false,
      developedAt: "Treinetic (Pvt) Ltd",
      participation: [
        "Designed and developed the complete mobile application using Flutter.",
        "Integrated RESTful APIs, Google Analytics, Firebase Crashlytics, push notifications, and a secure payment gateway.",
        "Conducted extensive bug fixing and performance optimization to ensure smooth operation across devices.",
        "Deployed the app on both Android and iOS platforms.",
      ],
      ios: "https://apps.apple.com/us/app/champ-turf/id6739034375",
      android:
        "https://play.google.com/store/apps/details?id=com.treinetic.championsturf.app",
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

                {!project.isPersonal && (
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    Developed at {project.developedAt}:
                  </CardDescription>
                )}

                {!project.isPersonal && project.participation && (
                  <ul className="space-y-3">
                    {project.participation.map((value, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-start leading-relaxed"
                      >
                        <span className="text-blue-400 mr-3 mt-1 text-lg">
                          •
                        </span>
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
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
