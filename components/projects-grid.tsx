import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Africa Sojourners of Hope",
    category: "Non-Profit",
    description:
      "A vibrant community organization website fostering hope through education, mentorship, and health literacy programs.",
    image: "/africa-sojourners-hope.jpg",
    tags: ["Non-Profit", "Donations", "Programs"],
    year: "2024",
    liveUrl: "https://asohapp.vercel.app",
  },
  {
    id: 2,
    title: "Otieno Justus & Co Advocates",
    category: "Legal Services",
    description:
      "A professional legal services platform for a trusted law firm providing expert representation since 2022.",
    image: "/otieno-justus-advocates.jpg",
    tags: ["Legal", "Consultation", "Corporate Law"],
    year: "2024",
    liveUrl: "https://justusapp.vercel.app",
  },
  {
    id: 3,
    title: "Nitibu Healthcare",
    category: "Healthcare",
    description:
      "Advancing healthcare through innovation - delivering comprehensive medical solutions across East & Central Africa.",
    image: "/nitibu-healthcare.jpg",
    tags: ["Healthcare", "Medical Solutions", "Innovation"],
    year: "2024",
    liveUrl: "https://nitibuhealthcare.com",
  },
  {
    id: 5,
    title: "World Concepts Ventures",
    category: "Investment",
    description:
      "Driving regional growth through strategic investments - a venture capital firm focused on East & Central African markets.",
    image: "/world-concepts.jpg",
    tags: ["Venture Capital", "Investment", "Finance"],
    year: "2024",
    liveUrl: "https://www.worldconcepts.co.ke",
  },
  {
    id: 6,
    title: "Weva Technologies",
    category: "Technology",
    description:
      "Innovate. Transform. Succeed. - Empowering businesses with cutting-edge technology solutions that drive growth and efficiency.",
    image: "/weva-technologies.jpg",
    tags: ["Software", "Innovation", "Business Solutions"],
    year: "2024",
    liveUrl: "https://www.wevatechnologies.software",
  },
]

export function ProjectsGrid() {
  return (
    <section id="work" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-primary/5 animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-40 right-20 w-24 h-24 text-accent/5 animate-float-delayed"
          viewBox="0 0 100 100"
        >
          <rect x="20" y="20" width="60" height="60" fill="currentColor" rx="8" />
        </svg>
        <svg className="absolute top-1/2 right-10 w-20 h-20 text-primary/5 animate-spin-slow" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A showcase of our recent projects across diverse industries, each crafted with attention to detail and user
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
