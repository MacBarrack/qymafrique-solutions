import Link from "next/link"
import { ArrowRight, Palette, Code, Megaphone, ShoppingCart, Video, Lightbulb } from "lucide-react"

const services = [
  {
    num: "01",
    icon: Code,
    title: "Web & App Development",
    description:
      "Your website is where customers first meet your business. We build fast, intuitive platforms that help people accomplish their goals and keep them coming back.",
    examples: [
      { name: "Weva Technologies", url: "https://www.wevatechnologies.software" },
      { name: "World Concepts", url: "https://www.worldconcepts.co.ke" },
    ],
  },
  {
    num: "02",
    icon: Palette,
    title: "Branding & Creative",
    description:
      "Every interaction shapes how people feel about your business. We help you control that feeling — from first impression to lasting memory.",
    examples: [
      { name: "Africa Sojourners", url: "https://asohapp.vercel.app" },
      { name: "Nitibu Healthcare", url: "https://nitibuhealthcare.com" },
    ],
  },
  {
    num: "03",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Selling online should feel natural. We build e-commerce experiences that make buying easy, payment secure, and inventory effortless.",
    examples: [],
  },
  {
    num: "04",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "The internet is noisy — but your customers are in there. We find them and start conversations that matter through authentic, data-driven strategies.",
    examples: [
      { name: "Otieno Justus & Co", url: "https://justusapp.vercel.app" },
      { name: "Nitibu Healthcare", url: "https://nitibuhealthcare.com" },
    ],
  },
  {
    num: "05",
    icon: Video,
    title: "Motion & Media",
    description:
      "Sometimes motion tells your story better than static images ever could. We create moving content that captures attention and communicates clearly.",
    examples: [],
  },
  {
    num: "06",
    icon: Lightbulb,
    title: "Strategy & Innovation",
    description:
      "Great work starts with great strategy. We don't just make things look good — we make sure they work toward your specific goals.",
    examples: [
      { name: "World Concepts", url: "https://www.worldconcepts.co.ke" },
      { name: "Weva Technologies", url: "https://www.wevatechnologies.software" },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              What We<br />Build
            </h2>
          </div>
          <p className="md:max-w-xs text-gray-500 leading-relaxed text-sm">
            Strategy, technology, and design — unified into digital solutions that drive real business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
          {services.map(({ num, icon: Icon, title, description, examples }) => (
            <div
              key={num}
              className="group bg-white p-8 hover:bg-gray-950 transition-colors duration-300 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-gray-300 group-hover:text-gray-600 transition-colors">{num}</span>
                <div className="w-10 h-10 rounded-2xl bg-gray-50 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors mb-3">{title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors">{description}</p>
              </div>

              {examples.length > 0 && (
                <div className="pt-4 border-t border-gray-100 group-hover:border-white/10 transition-colors">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-300 group-hover:text-gray-500 mb-2 transition-colors">
                    See our work
                  </p>
                  {examples.map(({ name, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-400 group-hover:text-gray-400 transition-colors mt-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {name}
                    </a>
                  ))}
                </div>
              )}

              <Link href="/quote">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-400 transition-colors">
                  Get a quote <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}