import Banner from './components/Banner'

export default function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Banner />
      <div className="max-w-2xl w-full text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">QA Repo Connect</h1>
        <p className="text-lg text-muted-foreground">
          Connect your quality assurance repository to streamline testing workflows and improve collaboration across your team.
        </p>
      </div>
    </div>
  )
}