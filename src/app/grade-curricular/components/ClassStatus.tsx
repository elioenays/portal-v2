import { Badge } from '@/components/ui/badge'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: '',
  variants: {
    status: {
      1: 'bg-green-500',
      2: 'bg-red-500',
      3: 'bg-yellow-500',
      4: '',
    },
  },
  defaultVariants: { status: 4 },
})

export type ClassStatusProps = React.ComponentProps<'div'> &
  VariantProps<typeof container> & {
    name?: string
    code: number
  }

export function ClassStatus({
  code,
  name,
  className,
  status,
}: ClassStatusProps) {
  return (
    <div className="text-xs">
      <Badge className={container({ className, status })}>{code}</Badge> {name}
    </div>
  )
}
