"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Zap, Target } from "lucide-react"

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
]

const highlights = [
  {
    icon: Code,
    title: "Full Stack Expertise",
    description: "Proficient in modern web technologies and cloud infrastructure",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Leading engineering teams and driving technical strategy",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Building scalable solutions that drive business growth",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering high-quality products on time",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate technology leader with a proven track record of building and scaling engineering teams while
            delivering innovative solutions that drive business success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              With years of experience in software engineering and technology leadership, I've had the privilege of
              working on diverse projects ranging from startups to enterprise solutions. My passion lies in creating
              efficient, scalable systems and fostering collaborative environments where teams can thrive.
            </p>
            <p className="text-muted-foreground">
              As the CTO of Trietech Private Limited, I lead our technical vision and strategy, ensuring we stay at the
              forefront of technological innovation while delivering exceptional value to our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-4">
                <CardContent className="p-0">
                  <highlight.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
