import { useState } from 'react'

export default function NoticeBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-muted text-foreground py-2 px-4 text-center text-sm z-50 flex items-center justify-center">
      <span>Important notice: New features available in the dashboard</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-foreground hover:text-muted-foreground"
        aria-label="Dismiss notice"
      >
        ×
      </button>
    </div>
  )
}