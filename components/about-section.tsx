const pillars = [
  {
    icon: "🚀",
    title: "Growth Focused",
    desc: "We don't just build — we build for results. Every solution is designed to help your business grow and scale.",
  },
  {
    icon: "💡",
    title: "Innovation First",
    desc: "We stay on top of the latest technologies and trends, bringing fresh ideas to every project.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    desc: "We become invested in your success, working closely with you from discovery to launch.",
  },
  {
    icon: "✨",
    title: "Quality Crafted",
    desc: "Every detail matters. We deliver polished, production-ready solutions you can be proud of.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Building Digital<br />Solutions<br />That Matter
            </h2>

            <div className="mt-7 space-y-4 text-gray-500 leading-relaxed text-sm sm:text-base">
              <p>
                Based in Nairobi, Kenya, Qymafrique Solutions builds beautiful, functional digital experiences for businesses across Africa and beyond. We believe great design and technology should work together seamlessly.
              </p>
              <p>
                We combine strategic thinking with technical expertise and creative design. Every project starts with understanding your goals and your audience — then we build solutions that deliver real results.
              </p>
              <p>
                Whether you're a startup with a big vision or an established business ready to innovate, we partner with you every step of the way.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {[
                { n: "50+", l: "Projects Delivered" },
                { n: "30+", l: "Happy Clients" },
                { n: "4+",  l: "Years Experience" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="text-2xl sm:text-3xl font-black text-black">{n}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Why Choose Us</p>
            <div className="space-y-3">
              {pillars.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center shrink-0 text-lg">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black">{title}</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-gray-950 rounded-2xl p-6 text-white">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Our Mission</p>
              <p className="text-sm leading-relaxed text-gray-300">
                To bridge the digital divide in Africa by delivering world-class technology solutions that empower businesses, communities, and individuals to thrive in the modern economy.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Currently accepting new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}