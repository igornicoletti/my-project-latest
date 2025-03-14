import { Link } from "react-router-dom"
import { Button } from "@/components"
import { WarningCircle } from "@phosphor-icons/react"

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <WarningCircle size={64} weight="fill" className="text-destructive" />
      <h1 className="mt-4 text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg">Oops! Page not found!</p>
      <Button asChild className="mt-6">
        <Link to="/">Go back to Home</Link>
      </Button>
    </div>
  )
}