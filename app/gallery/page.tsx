"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import galleryData from "@/data/gallery-projects.json"
import { getImagePath } from "@/lib/image-utils"

const workCategories = galleryData.workCategories

const ChevronLeft = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="15,18 9,12 15,6"></polyline>
    </svg>
    )

    const ChevronRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9,18 15,12 9,6"></polyline>
    </svg>
    )

    export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState(workCategories[0])
    const [selectedSubcategory, setSelectedSubcategory] = useState(workCategories[0].subcategories[0])
    const [selectedProject, setSelectedProject] = useState(workCategories[0].subcategories[0].projects[0])
    const [imageType, setImageType] = useState<"before" | "progress" | "after">("before")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleCategorySelect = (category: (typeof workCategories)[0]) => {
        setSelectedCategory(category)
        setSelectedSubcategory(category.subcategories[0])
        setSelectedProject(category.subcategories[0].projects[0])
        setImageType("before")
        setCurrentImageIndex(0)
    }

    const handleSubcategorySelect = (subcategory: (typeof workCategories)[0]["subcategories"][0]) => {
        setSelectedSubcategory(subcategory)
        setSelectedProject(subcategory.projects[0])
        setImageType("before")
        setCurrentImageIndex(0)
    }

    const handleProjectSelect = (project: any) => {
        setSelectedProject(project)
        setImageType("before")
        setCurrentImageIndex(0)
    }

    const getCurrentImages = () => {
        switch (imageType) {
        case "before":
            return selectedProject.beforeImages
        case "progress":
            return selectedProject.progressImages
        case "after":
            return selectedProject.afterImages
        default:
            return selectedProject.beforeImages
        }
    }

    const nextImage = () => {
        const images = getCurrentImages()
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        const images = getCurrentImages()
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const handleImageTypeToggle = (type: "before" | "progress" | "after") => {
        setImageType(type)
        setCurrentImageIndex(0)
    }

    return (
        <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-16">
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                <p className="text-sm font-mono text-muted-foreground mb-4">Complete Work Gallery</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">Our Complete Portfolio</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Explore our comprehensive collection of projects across all service categories. Each transformation
                    showcases our commitment to quality and craftsmanship.
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
                {selectedCategory.subcategories.map((subcategory) => (
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
                        src={getImagePath(getCurrentImages()[currentImageIndex] || "/placeholder.svg")}
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
                            Progress ({selectedProject.progressImages.length})
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
                            src={getImagePath(project.afterImages[0] || "/placeholder.svg")}
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
        </main>

        <Footer />
        </div>
    )
}
