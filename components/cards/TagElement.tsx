interface TagElementProps {
  tagName: string
}

export default function TagElement({ tagName }: TagElementProps) {
  return (
    <div>
      <span className={`project-card-tag project-card-tag-${tagName}`}>
        {tagName}
      </span>
    </div>
  )
}
