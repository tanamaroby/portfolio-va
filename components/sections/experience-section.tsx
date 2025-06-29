"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Chief Technology Officer",
    company: "Trietech Private Limited",
    period: "2022 - Present",
    description:
      "Leading the technical vision and strategy for the company. Managing engineering teams, architecting scalable solutions, and driving innovation across all technology initiatives.",
    achievements: [
      "Built and scaled engineering team from 5 to 20+ developers",
      "Implemented microservices architecture reducing system downtime by 99.9%",
      "Led digital transformation initiatives resulting in 40% efficiency improvement",
      "Established DevOps practices and CI/CD pipelines",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Previous Company",
    period: "2019 - 2022",
    description:
      "Developed and maintained complex web applications, mentored junior developers, and contributed to architectural decisions.",
    achievements: [
      "Developed high-performance web applications serving 100k+ users",
      "Mentored 5+ junior developers and established coding standards",
      "Optimized database queries resulting in 50% performance improvement",
      "Led migration from monolith to microservices architecture",
    ],
    technologies: ["TypeScript", "React", "Python", "Django", "Redis", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "Startup Company",
    period: "2017 - 2019",
    description:
      "Built full-stack applications from scratch, worked closely with product team, and contributed to product strategy.",
    achievements: [
      "Developed MVP that secured $2M in Series A funding",
      "Built real-time features using WebSocket technology",
      "Implemented automated testing reducing bugs by 60%",
      "Collaborated with design team to create intuitive user experiences",
    ],
    technologies: ["JavaScript", "Vue.js", "Express.js", "MySQL", "Socket.io"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey showcasing the roles and achievements that have shaped my career in technology
            leadership.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
