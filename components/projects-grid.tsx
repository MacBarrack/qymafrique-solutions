import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Africa Sojourners of Hope",
    category: "Non-Profit",
    description: "A vibrant community organization website fostering hope through education, mentorship, and health literacy programs.",
    image: "/africa-sojourners-hope.jpg",
    tags: ["Non-Profit", "Donations", "Programs"],
    year: "2024",
    liveUrl: "https://asohapp.vercel.app",
  },
  {
    id: 2,
    title: "Otieno Justus & Co Advocates",
    category: "Legal Services",
    description: "A professional legal services platform for a trusted law firm providing expert representation since 2022.",
    image: "/otieno-justus-advocates.jpg",
    tags: ["Legal", "Consultation", "Corporate Law"],
    year: "2024",
    liveUrl: "https://justusapp.vercel.app",
  },
  {
    id: 3,
    title: "Nitibu Healthcare",
    category: "Healthcare",
    description: "Advancing healthcare through innovation — delivering comprehensive medical solutions across East & Central Africa.",
    image: "/nitibu-healthcare.jpg",
    tags: ["Healthcare", "Medical Solutions", "Innovation"],
    year: "2024",
    liveUrl: "https://nitibuhealthcare.com",
  },
  {
    id: 4,
    title: "World Concepts Ventures",
    category: "Investment",
    description: "Driving regional growth through strategic investments — a venture capital firm focused on East & Central African markets.",
    image: "/world-concepts.jpg",
    tags: ["Venture Capital", "Investment", "Finance"],
    year: "2024",
    liveUrl: "https://www.worldconcepts.co.ke",
  },
  {
    id: 5,
    title: "Weva Technologies",
    category: "Technology",
    description: "Innovate. Transform. Succeed. — Empowering businesses with cutting-edge technology solutions that drive growth.",
    image: "/weva-technologies.jpg",
    tags: ["Software", "Innovation", "Business Solutions"],
    year: "2024",
    liveUrl: "https://www.wevatechnologies.software",
  },
]

export function ProjectsGrid() {
  return (
    <section id="work" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Selected Work</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-black leading-tight tracking-tight">
            Recent Projects
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg text-sm leading-relaxed">
            A showcase of our recent projects across diverse industries, each crafted with attention to detail and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}