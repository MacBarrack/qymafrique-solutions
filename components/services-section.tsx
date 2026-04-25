import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code, Megaphone, ShoppingCart, Video, Lightbulb, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Palette,
    title: "Branding & Creative",
    description:
      "Every interaction someone has with your business shapes how they feel about you. At Qymafrique Designs, we help you control that feeling. From the first impression to lasting memory.",
    examples: [
      { name: "Africa Sojourners", url: "https://asohapp.vercel.app" },
      { name: "Nitibu Healthcare", url: "https://nitibuhealthcare.com" },
    ],
  },
  {
    icon: Code,
    title: "Web & App Development",
    description:
      "Your website might be the first place potential customers meet your business. Qymafrique Designs makes sure these digital touchpoints feel intuitive, load fast, and help people accomplish goals.",
    examples: [
      { name: "Weva Technologies", url: "https://www.wevatechnologies.software" },
      { name: "World Concepts", url: "https://www.worldconcepts.co.ke" },
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "The internet is noisy. Really noisy. But somewhere in that noise are the exact people who need what you offer. We help you find them and start conversations that matter through authentic understanding.",
    examples: [
      { name: "Otieno Justus & Co", url: "https://justusapp.vercel.app" },
      { name: "Nitibu Healthcare", url: "https://nitibuhealthcare.com" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Selling online should feel natural for both you and your customers. Qymafrique Designs builds e-commerce experiences that make buying easy, payment secure, and delivery reliable worldwide.",
    examples: [],
  },
  {
    icon: Video,
    title: "Motion & Media",
    description:
      "Static images are great, but sometimes you need motion to tell your story properly. Whether it's explaining a complex process or showcasing a product in action, we create moving content that captures attention.",
    examples: [],
  },
  {
    icon: Lightbulb,
    title: "Strategy & Innovation",
    description:
      "Great creative work starts with great strategy. At Qymafrique Designs, we don't just make things look pretty — we make sure they work toward your specific goals and understanding your market.",
    examples: [
      { name: "World Concepts", url: "https://www.worldconcepts.co.ke" },
      { name: "Weva Technologies", url: "https://www.wevatechnologies.software" },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full border border-sky-300 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-900">
              Strategy • Technology • Design
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            What We Build
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Beautiful, functional digital solutions tailored to your goals. Web apps, mobile solutions, e-commerce platforms, and more—all built with quality and innovation at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-sky-300 transition-all duration-300 hover:shadow-lg shadow-sm"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-sky-100 text-blue-900 group-hover:bg-sky-200 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {service.examples.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">See Our Work:</p>
                    <div className="flex flex-col gap-2">
                      {service.examples.map((example) => (
                        <Link
                          key={example.url}
                          href={example.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-900 hover:text-blue-900 transition-colors flex items-center gap-2 group/link"
                        >
                          <span>{example.name}</span>
                          <ExternalLink className="h-3 w-3 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link href="/quote" className="inline-block mt-6">
                  <button className="text-sm font-semibold text-blue-900 hover:text-blue-900 flex items-center gap-2 transition-colors">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from "lucide-react"
