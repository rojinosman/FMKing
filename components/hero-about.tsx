import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/image-utils"
import Link from "next/link"


export function HeroAbout() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${getImagePath('/full-construction/construction-hero-lowercase.jpg')}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
        <div className="mb-8">
          <p className="text-sm font-mono text-gray-200 mb-4">Professional Contracting Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            From Vision to Masterpiece
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto text-pretty leading-relaxed">
          We turn your ideas into reality through reliable construction and exceptional attention to detail
          </p>
          <p className="text-lg text-gray-300 mt-4 font-large">Fully Licensed & Insured • CSLB Licensed Contractor</p>
        </div>

        <div className="justify-center gap-8 mb-2 ">
            <h3 className="text-lg font-semibold mb-3">Our Expertise</h3>
            <p className="text-gray-200 leading-relaxed">
              We cover all your construction needs from building new structures to repairing existing ones.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="font-medium" asChild>
            <Link href="/#contact">
              Get Free Quote
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-medium bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            <Link href="/#work">
              View our work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
