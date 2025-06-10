import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Home({ scrollToSection }) {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                <Image
                  src="/profile_image.jpeg?height=150&width=150"
                  alt="Madura Dias"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-100">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Madura Dias
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
            Software Engineer specializing in Mobile App Development
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital space! I craft beautiful, functional mobile
            applications that solve real-world problems and deliver exceptional
            user experiences. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-gray-700 text-gray-300 hover:bg-gray-900/50 hover:border-gray-600 hover:text-gray-300  px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
