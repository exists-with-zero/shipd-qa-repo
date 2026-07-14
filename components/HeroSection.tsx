import Banner from './Banner'

export default function HeroSection() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="relative">
        <Banner />
      </div>
      <div className="text-center space-y-4 pt-16">
        <h1 className="text-5xl font-bold text-foreground">
          Welcome to HeroSection
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          This component wraps the existing Banner in a centered layout with a hero heading below.
        </p>
      </div>
    </div>
  )
}