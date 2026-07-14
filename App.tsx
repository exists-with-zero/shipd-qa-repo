import Banner from './components/Banner'
import { Badge } from '@/components/ui/badge'

export default function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Banner />
      <div className="max-w-2xl w-full text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl font-bold text-foreground">QA Repo Connect</h1>
          <Badge variant="default" className="bg-green-600 text-white hover:bg-green-700">
            Success
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Connect your quality assurance repository to streamline testing workflows and improve collaboration across your team.
        </p>
      </div>
    </div>
  )
}