import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary transition-all duration-500 hover:shadow-2xl h-full flex flex-col animate-fade-in hover:scale-105 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      <CardContent className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-xs text-muted-foreground mb-2.5 leading-relaxed line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {project.liveUrl && (
          <Button asChild variant="outline" size="sm" className="w-full bg-transparent mt-2.5 group-hover:bg-primary group-hover:text-white transition-all duration-300 h-8 text-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-3 w-3" />
              View
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
