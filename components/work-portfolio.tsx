"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import workCategoriesRaw from "../data/gallery-projects.json"
import type { GalleryData, GalleryProject, GalleryCategory, GallerySubcategory } from "@/types/gallery"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import galleryData from "@/data/gallery-projects.json"


// gallery JSON has a root object with `workCategories` array
const workCategories = (workCategoriesRaw as unknown as { workCategories?: GalleryData }).workCategories ?? []

// For the compact portfolio component we use the first work category's subcategories as project groups
const projectCategories = workCategories[0]?.subcategories ?? []

export function WorkPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(
    workCategories[0] as GalleryCategory
  )
  const [selectedSubcategory, setSelectedSubcategory] = useState<GallerySubcategory>(
    (workCategories[0]?.subcategories?.[0] as GallerySubcategory) ?? ({} as GallerySubcategory)
  )
  const [selectedProject, setSelectedProject] = useState<GalleryProject>(
    (workCategories[0]?.subcategories?.[0]?.projects?.[0] as GalleryProject) ?? ({} as GalleryProject)
  )
  const [showMode, setShowMode] = useState<"before" | "inprogress" | "after">("before")
  const [imageType, setImageType] = useState<"before" | "progress" | "after">("before")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get current images based on show mode
  const getCurrentImages = () => {
    if (!selectedProject) return []
    switch (imageType) {
      case "before":
        return selectedProject.beforeImages || []
      case "progress":
        return selectedProject.progressImages || []
      case "after":
        return selectedProject.afterImages || []
      default:
        return selectedProject.beforeImages || []
    }
  }

  // Auto-advance carousel
  useEffect(() => {
    const images = getCurrentImages()
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [selectedProject, imageType])

  // Reset image index when project or mode changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedProject, imageType])

  const handleCategorySelect = (category: GalleryCategory) => {
    setSelectedCategory(category)
    const firstSub = category.subcategories?.[0] as GallerySubcategory | undefined
    const firstProject = firstSub?.projects?.[0] as GalleryProject | undefined
    if (firstSub) setSelectedSubcategory(firstSub)
    if (firstProject) setSelectedProject(firstProject)
    setShowMode("before")
    setImageType("before")
  }

  const handleSubcategorySelect = (subcategory: GallerySubcategory) => {
    setSelectedSubcategory(subcategory)
    const firstProject = subcategory?.projects?.[0] as GalleryProject | undefined
    if (firstProject) setSelectedProject(firstProject)
    setShowMode("before")
    setImageType("before")
  }

  const handleImageTypeToggle = (type: "before" | "progress" | "after") => {
    setImageType(type)
    setShowMode(type === "progress" ? "inprogress" : (type as any))
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const images = getCurrentImages()
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    const images = getCurrentImages()
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const handleProjectSelect = (project: GalleryProject) => {
    setSelectedProject(project)
    setImageType("before")
    setCurrentImageIndex(0)
  }

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground mb-4">Our Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
            Transformations That Speak
            <br />
            for Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See the dramatic before and after results of our construction projects. blah blah blah
          </p>
        </div>
          {/* Main Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {workCategories.map((category) => (
                <Button
                key={category.id}
                variant={selectedCategory.id === category.id ? "default" : "outline"}
                onClick={() => handleCategorySelect(category)}
                className="mb-2"
                size="lg"
                >
                {category.name}
                </Button>
            ))}
            </div>

            {/* Subcategory Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
            {selectedCategory.subcategories.map((subcategory: GallerySubcategory) => (
                <Button
                key={subcategory.id}
                variant={selectedSubcategory.id === subcategory.id ? "secondary" : "ghost"}
                onClick={() => handleSubcategorySelect(subcategory)}
                className="mb-2"
                size="sm"
                >
                {subcategory.name}
                </Button>
            ))}
            </div>

            {/* Main Before/Progress/After Display */}
            <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden mb-8">
                <CardContent className="p-0">
                <div className="relative">
                    <img
                    src={getCurrentImages()[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - ${imageType} ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground capitalize">
                        {imageType}{" "}
                        {getCurrentImages().length > 1 && `(${currentImageIndex + 1}/${getCurrentImages().length})`}
                    </Badge>
                    </div>

                    {getCurrentImages().length > 1 && (
                    <>
                        <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
                        onClick={prevImage}
                        >
                        <ChevronLeft />
                        </Button>
                        <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
                        onClick={nextImage}
                        >
                        <ChevronRight />
                        </Button>
                    </>
                    )}
                </div>
                <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
                        <p className="text-muted-foreground">{selectedProject.description}</p>
                    </div>
                    </div>
                    <div className="flex gap-2">
                    <Button
                        variant={imageType === "before" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleImageTypeToggle("before")}
                    >
                        Before ({selectedProject.beforeImages.length})
                    </Button>
                    <Button
                        variant={imageType === "progress" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleImageTypeToggle("progress")}
                    >
                        Progress ({selectedProject.progressImages?.length ?? 0})
                    </Button>
                    <Button
                        variant={imageType === "after" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleImageTypeToggle("after")}
                    >
                        After ({selectedProject.afterImages.length})
                    </Button>
                    </div>

                    {getCurrentImages().length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                        {getCurrentImages().map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                        ))}
                    </div>
                    )}
                </div>
                </CardContent>
            </Card>

            {/* Project Thumbnails */}
            <div>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-0.5">
                {selectedSubcategory.projects.map((project) => (
                    <div
                    key={project.id}
                    className={`cursor-pointer transition-all hover:shadow-md overflow-hidden rounded-sm border ${
                        selectedProject.id === project.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleProjectSelect(project)}
                    >
                    <img
                        src={project.afterImages[0] || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full aspect-square object-cover"
                    />
                    </div>
                ))}
                </div>
            </div>
            </div>
        
      </div>
    </section>
  )
}
