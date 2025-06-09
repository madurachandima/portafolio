import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Image
                src="/profile_image.jpeg?height=500&width=500"
                alt="Madura Dias"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-2xl border border-gray-800"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-6">
                Passionate Mobile Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over 3 years of experience in software development, I
                specialize in creating innovative mobile applications that
                bridge the gap between cutting-edge technology and user-friendly
                design.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I have extensive experience with Native Android development using Kotlin and Java,
                as well as cross-platform frameworks like Flutter.
                and modern backend technologies like Firebase. I believe in
                writing clean, maintainable code and following best practices to
                deliver high-quality applications that users love.
              </p>
              {/* <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </p> */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="text-3xl font-bold text-blue-400">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
