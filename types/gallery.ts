export interface GalleryProject {
  id: number
  title: string
  description?: string
  beforeImages?: string[]
  progressImages?: string[]
  afterImages: string[]
}

export interface GallerySubcategory {
  id: string
  name: string
  projects: GalleryProject[]
}

export interface GalleryCategory {
  id: string
  name: string
  subcategories: GallerySubcategory[]
}

export type GalleryData = GalleryCategory[]
