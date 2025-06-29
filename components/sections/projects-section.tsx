"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Enterprise SaaS Platform",
    description:
      "A comprehensive SaaS platform serving 10,000+ businesses with real-time analytics, automated workflows, and multi-tenant architecture.",
    image: "/saas.png?height=350&width=500",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    features: [
      "Real-time Analytics",
      "Multi-tenant Architecture",
      "API Gateway",
      "Microservices",
    ],
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Machine learning-driven dashboard providing predictive insights and automated reporting for business intelligence.",
    image: "/ai.png?height=350&width=500",
    technologies: ["TypeScript", "Python", "TensorFlow", "React", "FastAPI"],
    features: [
      "Predictive Analytics",
      "Real-time Data Processing",
      "Custom Visualizations",
      "ML Models",
    ],
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    title: "Mobile-First E-commerce Platform",
    description:
      "High-performance e-commerce platform with mobile-first design, supporting millions of transactions.",
    image: "/mobile.png?height=350&width=500",
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Vercel"],
    features: [
      "Payment Integration",
      "Inventory Management",
      "Order Tracking",
      "Admin Dashboard",
    ],
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    title: "Real-time Collaboration Tool",
    description:
      "WebRTC-based collaboration platform enabling real-time document editing, video calls, and team communication.",
    image: "/realtime.png?height=350&width=500",
    technologies: ["Vue.js", "Socket.io", "WebRTC", "Express.js", "MySQL"],
    features: [
      "Real-time Editing",
      "Video Conferencing",
      "File Sharing",
      "Team Management",
    ],
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of some of the impactful projects I've built and led,
            demonstrating technical expertise and business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Link href={project.github} className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href={project.demo} className="w-full">
                      <Button size="sm" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
