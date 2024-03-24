type TextProps = {
  text: string
}

export function Text({ text }: TextProps) {
  return <span>{text}</span>
}
