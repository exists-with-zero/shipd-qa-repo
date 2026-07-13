import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'info' | 'success'
  className?: string
}

export default function Badge({ children, variant = 'info', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
        variant === 'info' && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        variant === 'success' && 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        className
      )}
    >
      {children}
    </span>
  )
}