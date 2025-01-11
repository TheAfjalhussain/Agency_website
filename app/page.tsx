"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Globe, Smartphone, CheckCircle2, Braces, Workflow, Users, Rocket, MessageSquare, Brain, Cpu, Database } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const elements = processRef.current.querySelectorAll('.process-item')
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.8) {
            el.classList.add('animate-in')
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-10" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
          <div className="absolute inset-0 bg-gradient-to-t from-background" />
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 py-32 md:py-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-8">
              Transforming Ideas into Intelligent Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with expert software development to create innovative solutions 
              that drive the future of digital transformation.
            </p>
            <div className="flex gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Code Editor Section */}
      <div className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 p-8 shadow-2xl overflow-hidden">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm sm:text-base text-green-400 font-mono overflow-x-auto">
              <code>{`// Intelligent Solution Implementation
class AIProject {
  constructor(requirements) {
    this.ai = new ArtificialIntelligence();
    this.data = new BigData(requirements);
    this.innovation = true;
  }

  async analyze() {
    const insights = await this.ai.processData(this.data);
    return this.generateSolution(insights);
  }

  generateSolution(insights) {
    return {
      innovative: true,
      scalable: true,
      intelligent: true,
      futureProof: true
    };
  }
}

// Let's build something extraordinary
const project = new AIProject(yourVision);
const future = await project.analyze();`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* What We Handle */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Innovative Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Leveraging cutting-edge technology to solve complex business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI & Machine Learning",
                description: "Custom AI solutions and intelligent automation systems.",
                icon: Brain,
              },
              {
                title: "Cloud Architecture",
                description: "Scalable and secure cloud infrastructure solutions.",
                icon: Cpu,
              },
              {
                title: "Big Data Analytics",
                description: "Advanced analytics and data visualization platforms.",
                icon: Database,
              },
              {
                title: "Custom Software",
                description: "Tailored applications for unique business needs.",
                icon: Code2,
              },
              {
                title: "API Development",
                description: "Robust and scalable API architectures.",
                icon: Braces,
              },
              {
                title: "Digital Transformation",
                description: "End-to-end digital solution implementation.",
                icon: Rocket,
              },
            ].map((service, index) => (
              <div 
                key={service.title} 
                className="relative p-8 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-24 bg-muted/50" ref={processRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into requirements and vision",
                delay: "0",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Comprehensive solution architecture",
                delay: "100",
              },
              {
                step: "03",
                title: "Development",
                description: "Agile implementation and iteration",
                delay: "200",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Testing, launch, and optimization",
                delay: "300",
              },
            ].map((phase) => (
              <div 
                key={phase.step} 
                className="process-item opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${phase.delay}ms` }}
              >
                <div className="relative">
                  <div className="text-7xl font-bold text-primary/10 mb-4">{phase.step}</div>
                  <h3 className="text-2xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl transform -skew-y-2" />
            <div className="relative mx-auto max-w-4xl bg-background rounded-2xl p-12 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                  alt="Client"
                  width={80}
                  height={80}
                  className="rounded-full mb-6 ring-4 ring-primary/10"
                />
                <blockquote className="text-2xl font-medium mb-6 italic">
                  "Their AI solutions have revolutionized our operations. The team's expertise and innovative 
                  approach delivered results that exceeded our expectations."
                </blockquote>
                <cite className="not-italic">
                  <div className="font-semibold text-lg">Michael Robertson</div>
                  <div className="text-primary">CTO, Future Technologies Inc</div>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16">Why Partner With Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Expertise",
                description: "Specialized in cutting-edge artificial intelligence solutions",
              },
              {
                title: "Innovation Focus",
                description: "Constantly pushing boundaries with new technologies",
              },
              {
                title: "Proven Track Record",
                description: "Successfully delivered complex projects across industries",
              },
              {
                title: "Scalable Solutions",
                description: "Built for growth and future adaptability",
              },
              {
                title: "Dedicated Support",
                description: "24/7 technical assistance and maintenance",
              },
              {
                title: "Security First",
                description: "Enterprise-grade security in every solution",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-4 group">
                <CheckCircle2 className="h-6 w-6 flex-none text-primary group-hover:text-primary/80 transition-colors" />
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Common Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services and process
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you implement AI in projects?</AccordionTrigger>
                <AccordionContent>
                  We integrate AI through machine learning models, natural language processing, and computer vision, 
                  tailored to your specific needs. Our solutions are built on proven frameworks and continuously 
                  optimized for performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What industries do you serve?</AccordionTrigger>
                <AccordionContent>
                  We work across various sectors including healthcare, finance, retail, and manufacturing. Our 
                  solutions are adaptable to any industry's specific requirements and challenges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you ensure data security?</AccordionTrigger>
                <AccordionContent>
                  We implement enterprise-grade security measures including encryption, secure APIs, and regular 
                  security audits. All solutions comply with relevant data protection regulations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is your development timeline?</AccordionTrigger>
                <AccordionContent>
                  Timelines vary based on project complexity. We follow an agile methodology with regular 
                  deliverables and updates. Typical projects range from 3-6 months for full implementation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Work Together CTA */}
      <div className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl transform skew-y-2" />
            <div className="relative mx-auto max-w-4xl text-center py-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join us in creating the next generation of intelligent solutions. Let's build something extraordinary together.
              </p>
              <div className="flex justify-center gap-6">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8">
                    Start a Project
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}