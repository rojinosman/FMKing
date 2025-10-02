"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Formspree - create account at formspree.io and replace with your form ID
      // For now, using a demo endpoint
      const response = await fetch('https://formspree.io/f/xanykorv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: formData.project,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Contact Form: ${formData.project || 'General Inquiry'}`,
        }),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "",
          message: "",
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at rojindawood@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-4">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
            Ready to Start Your
            <br />
            Next Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contact us today for a free consultation and quote. We look forward to working with you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <Input
                      id="project"
                      name="project"
                      placeholder="Kitchen, Bathroom, Addition, etc."
                      value={formData.project}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}