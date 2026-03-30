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
    tags: ["react", "typescript", "nextjs", "golang"],
  },
  polygonAi: {
    title: "Polygon AI",
    image: "/images/placeholder.webp",
    description:
      "An AI-powered solution for polygon analysis and visualization.",
    tags: ["react", "electron", "redux"],
  },
  chessAi: {
    title: "Chess AI",
    image: "/images/placeholder.webp",
    description: "This is a test project used for development purposes.",
    tags: ["typescript"],
  },
  midiMani: {
    title: "Midi Mani",
    image: "/images/placeholder.webp",
    description: "This is a test project used for development purposes.",
    tags: ["react", "typescript", "nextjs", "golang"],
  },
  nomenator: {
    title: "Nomenator",
    image: "/images/placeholder.webp",
    description: "This is a test project used for development purposes.",
    tags: ["react", "electron", "typescript", "golang"],
  },
  trellis: {
    title: "Trellis - Portfolio Site",
    image: "/images/placeholder.webp",
    description: "This is a test project used for development purposes.",
    tags: ["react", "nextjs", "typescript", "css"],
  },
}
