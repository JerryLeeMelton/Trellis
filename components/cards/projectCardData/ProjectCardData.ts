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
    title: "Trellis",
    image: "/images/placeholder.webp",
    description:
      "The site you're looking at! A modern portfolio site built with Next.js. Slick UI animations from Motion, email handling with Resend.",
    tags: ["react", "nextjs", "typescript", "css"],
  },
  reacteroids: {
    title: "Reacteroids",
    image: "/images/placeholder.webp",
    description:
      "A React clone of the classic 1979 arcade game Asteroids. Made entirely dependency-free with React and TypeScript.",
    tags: ["react", "nextjs", "typescript", "canvas"],
  },
  nomenator: {
    title: "Nomenator",
    image: "/images/placeholder.webp",
    description:
      "A desktop file renamer app.  Built with React and Electron. File renaming scripts written in Go.",
    tags: ["react", "electron", "typescript", "golang"],
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
}
