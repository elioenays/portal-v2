import { Badge } from '@/components/ui/badge'
import { VariantProps, tv } from 'tailwind-variants'

const container = tv({
  base: '',
  variants: {
    status: {
      concluida: 'bg-green-500',
      pendente: 'bg-red-500',
      naoConcluida: 'bg-yellow-500',
      default: '',
    },
  },
  defaultVariants: { status: 'default' },
})

type ClassStatusProps = React.ComponentProps<'div'> &
  VariantProps<typeof container> & {
    name: string
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
