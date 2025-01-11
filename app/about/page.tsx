import { Button } from "@/components/ui/button"
import { Award, Brain, CheckCircle2, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="relative isolate pt-24">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Pioneering the Future of Technology
            </h1>
            <div className="mt-6 text-lg leading-8 text-muted-foreground">
              <p>
                At TechForge AI, we're not just developers – we're innovators at the intersection of artificial 
                intelligence and software development. Our mission is to transform businesses through cutting-edge 
                technology solutions that drive growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <Brain className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower organizations with intelligent solutions that transform their operations and create 
                lasting impact. We combine AI innovation with technical excellence to solve complex challenges 
                and drive digital transformation.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in AI-driven software solutions, setting new standards in innovation 
                and technological advancement. We aim to shape the future of digital transformation across industries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Provide */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16">Our Expertise</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Integration",
                description: "Seamless implementation of artificial intelligence in existing systems.",
              },
              {
                title: "Custom Development",
                description: "Tailored solutions that perfectly align with business objectives.",
              },
              {
                title: "Cloud Architecture",
                description: "Scalable and secure cloud infrastructure design.",
              },
              {
                title: "Data Analytics",
                description: "Advanced analytics and business intelligence solutions.",
              },
              {
                title: "Process Automation",
                description: "Intelligent automation of business processes.",
              },
              {
                title: "Technical Consulting",
                description: "Expert guidance on technology strategy and implementation.",
              },
            ].map((service) => (
              <div key={service.title} className="flex gap-4 group">
                <CheckCircle2 className="h-6 w-6 flex-none text-primary group-hover:text-primary/80 transition-colors" />
                <div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries with cutting-edge solutions",
              },
              {
                title: "Excellence",
                description: "Delivering exceptional quality in every project",
              },
              {
                title: "Integrity",
                description: "Building trust through transparency",
              },
              {
                title: "Collaboration",
                description: "Working together to achieve greatness",
              },
            ].map((value) => (
              <div key={value.title} className="bg-background rounded-2xl p-8 shadow-lg group hover:shadow-xl transition-shadow">
                <Award className="h-12 w-12 text-primary mb-6 group-hover:text-primary/80 transition-colors" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16">Our Leadership Team</h2>
          </div>
          <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Alex Thompson',
                role: 'CEO & AI Architect',
                bio: 'Former Google AI researcher with 12+ years experience',
                imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop',
              },
              {
                name: 'Sarah Chen',
                role: 'CTO',
                bio: 'ML expert specializing in large-scale systems',
                imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2940&auto=format&fit=crop',
              },
              {
                name: 'David Kumar',
                role: 'Head of Innovation',
                bio: 'Pioneer in AI-driven software architecture',
                imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
              },
              {
                name: 'Emma Wilson',
                role: 'AI Research Director',
                bio: 'PhD in Machine Learning from MIT',
                imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop',
              },
            ].map((person) => (
              <li key={person.name} className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={person.imageUrl}
                    alt={person.name}
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                    <p className="text-primary/80 mb-2">{person.role}</p>
                    <p className="text-sm text-white/80">{person.bio}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl transform skew-y-2" />
            <div className="relative mx-auto max-w-2xl text-center py-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join Our Innovation Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's collaborate to create intelligent solutions that define the future of technology.
              </p>
              <div className="flex justify-center gap-x-6">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8">
                    Start a Project
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}