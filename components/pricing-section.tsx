import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Static Website",
    description: "A professional static website perfect for showcasing your business.",
    price: "KES 25,000",
    priceNote: "starting at",
    features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO", "Fast loading", "1 month support"],
  },
  {
    name: "Business Website",
    description: "A dynamic website with content management for growing businesses.",
    price: "KES 40,000",
    priceNote: "starting at",
    features: [
      "Up to 10 pages",
      "Custom design",
      "CMS integration",
      "Advanced SEO",
      "Analytics setup",
      "3 months support",
    ],
    featured: true,
  },
  {
    name: "Web Application",
    description: "Full-featured web applications with custom functionality.",
    price: "KES 150,000",
    priceNote: "starting at",
    features: [
      "Custom features",
      "User authentication",
      "Database integration",
      "API development",
      "Admin dashboard",
      "6 months support",
    ],
  },
  {
    name: "E-Commerce",
    description: "Complete online store with payment integration and inventory management.",
    price: "KES 120,000",
    priceNote: "starting at",
    features: [
      "Product catalog",
      "Shopping cart",
      "M-Pesa integration",
      "Order management",
      "Customer accounts",
      "Inventory system",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Investment in Your Success
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clear, competitive pricing for quality digital solutions. All prices are estimates and may vary based on
            project complexity and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.featured
                  ? "border-primary shadow-lg scale-105"
                  : "border-border/50 hover:border-border transition-all duration-300"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
                  <div className="text-3xl font-bold text-foreground mt-1">{plan.price}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.featured ? "default" : "outline"} asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Need Something Custom?</h3>
                <p className="text-muted-foreground">
                  We also offer print & packaging design, custom integrations, and ongoing maintenance packages. Contact
                  us for a personalized quote tailored to your specific needs.
                </p>
              </div>
              <Button asChild>
                <Link href="tel:+254717687202">Call Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            * All prices are estimates in Kenyan Shillings and may vary based on project scope, complexity, and specific
            requirements. Final pricing will be provided after consultation.
          </p>
        </div>
      </div>
    </section>
  )
}
