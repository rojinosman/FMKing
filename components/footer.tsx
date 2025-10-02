"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono text-lg font-medium mb-4">FM King INC</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional construction services with over ___ years of experience. Building excellence, one project at a
              time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#work"
                  className="hover:text-primary-foreground transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log("[v0] Kitchen link clicked")
                    const workSection = document.getElementById("work")
                    if (workSection) {
                      console.log("[v0] Work section found, scrolling")
                      workSection.scrollIntoView({ behavior: "smooth" })
                      // Trigger kitchen tab selection after scroll
                      setTimeout(() => {
                        console.log("[v0] Looking for kitchen button")
                        const kitchenButton = document.querySelector('[data-category="kitchen"]') as HTMLButtonElement
                        console.log("[v0] Kitchen button found:", kitchenButton)
                        if (kitchenButton) {
                          console.log("[v0] Clicking kitchen button")
                          kitchenButton.click()
                        }
                      }, 500)
                    } else {
                      console.log("[v0] Work section not found")
                    }
                  }}
                >
                  Kitchen Renovations
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-primary-foreground transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log("[v0] Bathroom link clicked")
                    const workSection = document.getElementById("work")
                    if (workSection) {
                      console.log("[v0] Work section found, scrolling")
                      workSection.scrollIntoView({ behavior: "smooth" })
                      // Trigger bathroom tab selection after scroll
                      setTimeout(() => {
                        console.log("[v0] Looking for bathroom button")
                        const bathroomButton = document.querySelector('[data-category="bathroom"]') as HTMLButtonElement
                        console.log("[v0] Bathroom button found:", bathroomButton)
                        if (bathroomButton) {
                          console.log("[v0] Clicking bathroom button")
                          bathroomButton.click()
                        }
                      }, 500)
                    } else {
                      console.log("[v0] Work section not found")
                    }
                  }}
                >
                  Bathroom Remodeling
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-primary-foreground transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log("[v0] Addition link clicked")
                    const workSection = document.getElementById("work")
                    if (workSection) {
                      console.log("[v0] Work section found, scrolling")
                      workSection.scrollIntoView({ behavior: "smooth" })
                      // Trigger addition tab selection after scroll
                      setTimeout(() => {
                        console.log("[v0] Looking for addition button")
                        const additionButton = document.querySelector('[data-category="addition"]') as HTMLButtonElement
                        console.log("[v0] Addition button found:", additionButton)
                        if (additionButton) {
                          console.log("[v0] Clicking addition button")
                          additionButton.click()
                        }
                      }, 500)
                    } else {
                      console.log("[v0] Work section not found")
                    }
                  }}
                >
                  Home Additions
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-primary-foreground transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    console.log("[v0] Basement link clicked")
                    const workSection = document.getElementById("work")
                    if (workSection) {
                      console.log("[v0] Work section found, scrolling")
                      workSection.scrollIntoView({ behavior: "smooth" })
                      // Trigger basement tab selection after scroll
                      setTimeout(() => {
                        console.log("[v0] Looking for basement button")
                        const basementButton = document.querySelector('[data-category="basement"]') as HTMLButtonElement
                        console.log("[v0] Basement button found:", basementButton)
                        if (basementButton) {
                          console.log("[v0] Clicking basement button")
                          basementButton.click()
                        }
                      }, 500)
                    } else {
                      console.log("[v0] Work section not found")
                    }
                  }}
                >
                  Basement Finishing
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-primary-foreground transition-colors">
                  Commercial Construction
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(619) 635-4000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>shabafadi1@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p>address tbd</p>
                  <p>address tbd cont</p>
                </div>
              </div>
              <div className="pt-2 border-t border-primary-foreground/20">
                <p>Licensed & Insured</p>
                <p>License #BC123456</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2025 FM King INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
