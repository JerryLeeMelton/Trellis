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
      "Frontend development and UI/UX design for Polygon AI, a powerful app for medical image analysis.",
    tags: ["typescript", "react", "electron", "redux", "kotlin"],
  },
  trellis: {
    title: "Trellis - Portfolio Site",
    image: "/images/placeholder.webp",
    description:
      "The site you're looking at! A modern portfolio site built with Next.js.",
    tags: ["react", "nextjs", "typescript", "css"],
  },
  reacteroids: {
    title: "Reacteroids",
    image: "/images/placeholder.webp",
    description: "A React clone of the classic 1979 arcade game Asteroids.",
    tags: ["react", "nextjs", "typescript", "canvas"],
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
}
