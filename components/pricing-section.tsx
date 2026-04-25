import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Static Website",
    price: "KES 25,000",
    description: "Perfect for showcasing your business with a clean, professional online presence.",
    features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO", "Fast loading", "1 month support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business Website",
    price: "KES 40,000",
    description: "Dynamic website with content management for growing businesses.",
    features: ["Up to 10 pages", "Custom design", "CMS integration", "Advanced SEO", "Analytics setup", "3 months support"],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "E-Commerce",
    price: "KES 120,000",
    description: "Complete online store with payment integration and inventory management.",
    features: ["Product catalog", "Shopping cart", "M-Pesa integration", "Order management", "Customer accounts", "Inventory system"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Web Application",
    price: "KES 150,000",
    description: "Full-featured web apps with custom functionality and databases.",
    features: ["Custom features", "User authentication", "Database integration", "API development", "Admin dashboard", "6 months support"],
    cta: "Get Started",
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Pricing</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-black leading-tight tracking-tight">
              Transparent<br />Pricing
            </h2>
          </div>
          <p className="md:max-w-xs text-gray-500 text-sm leading-relaxed">
            Clear, competitive pricing for quality digital solutions. All prices are estimates — final pricing is confirmed after consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-6 flex flex-col gap-5 transition-all duration-200 ${
                p.featured
                  ? "bg-black text-white ring-2 ring-blue-600 ring-offset-2"
                  : "bg-gray-50 border border-gray-200 hover:border-gray-300"
              }`}
            >
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${p.featured ? "text-blue-400" : "text-gray-400"}`}>
                  {p.featured ? "★ Most Popular" : p.name}
                </p>
                {p.featured && <p className="text-sm font-bold text-white mb-1">{p.name}</p>}
                <p className={`text-2xl font-black ${p.featured ? "text-white" : "text-black"}`}>{p.price}</p>
                <p className={`text-[10px] mt-0.5 ${p.featured ? "text-gray-400" : "text-gray-400"}`}>starting at</p>
              </div>

              <p className={`text-xs leading-relaxed ${p.featured ? "text-gray-400" : "text-gray-500"}`}>
                {p.description}
              </p>

              <ul className="space-y-2 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${p.featured ? "text-blue-400" : "text-blue-600"}`} />
                    <span className={`text-xs ${p.featured ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/quote">
                <span className={`flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold transition-colors ${
                  p.featured
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-white border border-gray-200 hover:border-gray-400 text-black"
                }`}>
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-black text-black">Need Something Custom?</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-lg leading-relaxed">
              We also offer print & packaging design, custom integrations, and ongoing maintenance packages. Contact us for a personalized quote.
            </p>
          </div>
          <a href="tel:+254717687202">
            <span className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 bg-black hover:bg-gray-900 text-white text-xs font-bold rounded-2xl transition-colors">
              Call Us Now
            </span>
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          All prices in Kenyan Shillings. Final pricing confirmed after project scope consultation.
        </p>
      </div>
    </section>
  )
}