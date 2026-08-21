type ProjectCardData = {
  title: string
  image: string
  /** Intrinsic pixel size of `image`. Cards mix several aspect ratios, so a
   *  shared hardcoded width/height reserves the wrong space and shifts the
   *  layout when the real file loads. */
  imageWidth: number
  imageHeight: number
  description: string
  tags: string[]
}

export const projectCardData: Record<string, ProjectCardData> = {
  testProject: {
    title: "Test Project",
    image: "/images/placeholder.webp",
    imageWidth: 1200,
    imageHeight: 1200,
    description: "This is a test project used for development purposes.",
    tags: ["react", "typescript", "nextjs", "golang"],
  },
  polygonAi: {
    title: "Polygon AI",
    image: "/images/projects/polygonAi_thumb.webp",
    imageWidth: 1920,
    imageHeight: 1153,
    description:
      "Frontend development and UI/UX design for Polygon AI, a powerful app for medical image analysis.",
    tags: ["typescript", "react", "electron", "redux", "kotlin"],
  },
  trellis: {
    title: "Trellis",
    image: "/images/projects/trellis_thumb.webp",
    imageWidth: 1637,
    imageHeight: 1000,
    description:
      "The site you're looking at! A modern portfolio site built with Next.js. Slick UI animations from Motion, email handling with Resend.",
    tags: ["react", "nextjs", "typescript", "css"],
  },
  reacteroids: {
    title: "Reacteroids",
    image: "/images/projects/reacteroids_thumb.webp",
    imageWidth: 1202,
    imageHeight: 902,
    description:
      "A React clone of the classic 1979 arcade game Asteroids. Made entirely dependency-free with React and TypeScript.",
    tags: ["react", "nextjs", "typescript", "canvas"],
  },
  nomenator: {
    title: "Nomenator",
    image: "/images/projects/nomenator_thumb.webp",
    imageWidth: 1391,
    imageHeight: 901,
    description:
      "A desktop file renamer app.  Built with React and Electron. File renaming scripts written in Go.",
    tags: ["react", "electron", "typescript", "golang"],
  },
  chessAi: {
    title: "Chess AI",
    image: "/images/placeholder.webp",
    imageWidth: 1200,
    imageHeight: 1200,
    description: "This is a test project used for development purposes.",
    tags: ["typescript"],
  },
  midiMani: {
    title: "Midi Mani",
    image: "/images/placeholder.webp",
    imageWidth: 1200,
    imageHeight: 1200,
    description: "This is a test project used for development purposes.",
    tags: ["react", "typescript", "nextjs", "golang"],
  },
}
