import Badge from './Badge'

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-2 px-4 text-center text-sm z-50">
      <div className="flex items-center justify-center gap-2">
        <span>Scheduled maintenance: Sunday 2AM-4AM EST</span>
        <Badge variant="info" className="bg-primary-foreground/20 text-primary-foreground">
          Planned
        </Badge>
      </div>
    </div>
  )
}