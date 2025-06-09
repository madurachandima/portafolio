import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together to create
            something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("mailto:madura.chandima@email.com")}
            >
              <Mail size={20} className="mr-3" />
              madura.chandima@email.com
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-700 text-gray-300 hover:bg-gray-900/50 hover:border-gray-600 p-4 rounded-xl transition-all duration-300 hover:scale-110"
              onClick={() =>
                window.open("https://linkedin.com/in/madura-chandima", "_blank")
              }
            >
              <Linkedin size={28} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-700 text-gray-300 hover:bg-gray-900/50 hover:border-gray-600 p-4 rounded-xl transition-all duration-300 hover:scale-110"
              onClick={() =>
                window.open("https://github.com/madura-chandima", "_blank")
              }
            >
              <Github size={28} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
