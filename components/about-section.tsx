export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full border border-sky-300 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-900">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Building Digital Solutions That Matter
          </h2>

          <div className="space-y-8 leading-relaxed">
            <p className="text-lg text-gray-600">
              Based in Nairobi, Kenya, Qymafrique Solutions builds beautiful, functional digital experiences for businesses across Africa and beyond. We believe great design and technology should work together seamlessly.
            </p>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-700">
                We combine strategic thinking with technical expertise and creative design. Every project starts with understanding your goals and your audience, then we build solutions that deliver real results.
              </p>
              <p className="mt-4 text-gray-700">
                Whether you&apos;re a startup with a big vision or an established business ready to innovate, we partner with you every step of the way.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-sky-300 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Growth Focused</h4>
                  <p className="text-gray-600">
                    We don&apos;t just build—we build for results. Every solution is designed to help your business grow and scale.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-sky-300 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h4>
                  <p className="text-gray-600">
                    We stay on top of latest technologies and trends to bring fresh ideas to your projects.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-sky-300 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">True Partnership</h4>
                  <p className="text-gray-600">
                    We become invested in your success, working closely with you from start to finish.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-sky-300 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Crafted</h4>
                  <p className="text-gray-600">
                    Every detail matters. We deliver polished, production-ready solutions you can be proud of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
