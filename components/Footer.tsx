export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-border py-2 px-4 text-center text-xs text-muted-foreground z-50">
      © {new Date().getFullYear()} QA Repo Connect. Built with Shipd.
    </div>
  )
}