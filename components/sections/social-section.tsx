"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    description: "Check out my open source projects and contributions",
    href: "#",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    description: "Connect with me professionally and see my career journey",
    href: "https://www.linkedin.com/in/tanamaroby/",
    color: "hover:text-blue-600",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    description: "Follow me for tech insights and industry thoughts",
    href: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Behind the scenes and personal moments",
    href: "#",
    color: "hover:text-pink-600",
  },
];

export function SocialSection() {
  return (
    <section id="social" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow me on social media to stay updated with my latest projects,
            insights, and professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer w-full h-full flex flex-col justify-between">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4"
                  >
                    <social.icon
                      className={`h-12 w-12 mx-auto text-muted-foreground transition-colors duration-300 ${social.color}`}
                    />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">{social.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {social.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
