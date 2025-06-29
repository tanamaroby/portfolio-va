import type React from "react"
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  github?: string
  demo?: string
  category: "web" | "mobile" | "ai" | "enterprise"
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  href: string
}
