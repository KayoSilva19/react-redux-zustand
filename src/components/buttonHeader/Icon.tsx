import { ElementType } from 'react'

type IconProps = {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="w-4 h-4" />
}
