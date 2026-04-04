import { svgIcons } from "./icons/SVGIconList"

interface SVGIconProps {
  name: string
  size: number
  color?: string
}

export default function SVGIcon({ name, size, color }: SVGIconProps) {
  const icon = svgIcons[name]
  if (!icon) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      className="svg-icon"
      style={{ color }}
      aria-hidden="true"
      focusable="false"
    >
      {icon.content}
    </svg>
  )
}
