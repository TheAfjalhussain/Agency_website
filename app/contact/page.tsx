"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="relative isolate pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="first-name" name="first-name" required />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="last-name" name="last-name" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input id="phone" name="phone" type="tel" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" rows={6} required />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div className="ml-0 lg:ml-12 space-y-12">
              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contact@digitalforge.dev" className="text-muted-foreground hover:text-primary">
                      contact@digitalforge.dev
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">
                      123 Tech Street, Digital Valley,<br />
                      Innovation City, 12345
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
                <div className="flex gap-6">
                  {[
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Github, href: "#", label: "GitHub" },
                  ].map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{social.label}</span>
                      <social.icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}