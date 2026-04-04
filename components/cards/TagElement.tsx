import next from "next"

interface TagElementProps {
  tagName: string
}

const tagColors: Record<string, string> = {
  nextjs: "#d2bce5",
  react: "#bcdfe5",
  typescript: "#bcc7e5",
  golang: "#bce5bc",
  electron: "#e5d2bc",
  redux: "#dee5bc",
  css3: "#e5bcbc",
  html5: "#e5c9bc",
  kotlin: "#c9e5bc",
}

export default function TagElement({ tagName }: TagElementProps) {
  return (
    <div>
      <span
        className={`project-card-tag project-card-tag-${tagName}`}
        style={{
          color: tagColors[tagName] || "#ccc",
          backgroundColor: "#384152",
          fontWeight: "bold",
        }}
      >
        {tagName}
      </span>
    </div>
  )
}
