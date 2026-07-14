import { Badge } from '@/components/ui/badge'

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-2 px-4 text-center text-sm z-50 flex items-center justify-center gap-2">
      <span>Scheduled maintenance: Sunday 2AM-4AM EST</span>
      <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
        Info
      </Badge>
    </div>
  )
}