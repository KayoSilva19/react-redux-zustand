import { ComponentProps, ReactNode } from 'react'

type RootProps = ComponentProps<'button'> & {
  children: ReactNode
}

export function Root({ children, ...props }: RootProps) {
  return (
    <button
      className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600"
      {...props}
    >
      {children}
    </button>
  )
}
