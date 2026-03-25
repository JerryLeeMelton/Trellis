interface TagProps {
  name: string
}

export default function Tag({ name }: TagProps) {
  return <div>{name}</div>
}
