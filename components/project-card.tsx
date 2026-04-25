import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  year: string
  liveUrl?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col bg-white">
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{project.category}</span>
          <span className="text-[10px] text-gray-400">{project.year}</span>
        </div>

        <div>
          <h3 className="text-sm font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors"
          >
            View Project
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}