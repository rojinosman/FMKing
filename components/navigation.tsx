"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { getImagePath } from "@/lib/image-utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Image src={getImagePath("/logo.png")} alt="Company Logo" width={50} height={50} className="object-contain"/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="/#work" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Work
            </a>
            <a href="/gallery" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Gallery
            </a>
            <a href="/#contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                href="/#about"
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/#work"
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Work
              </a>
              <a
                href="/gallery"
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}