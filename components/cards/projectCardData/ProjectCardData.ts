type ProjectCardData = {
  title: string
  image: string
  description: string
  tags: string[]
}

export const projectCardData: Record<string, ProjectCardData> = {
  testProject: {
    title: "Test Project",
    image: "/images/placeholder.webp",
    description: "This is a test project used for development purposes.",
    tags: ["React", "TypeScript", "Next.js"],
  },
}
