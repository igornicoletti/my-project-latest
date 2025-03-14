import { Link } from "react-router-dom"
import { Button } from "@/components"
import { WarningCircle } from "@phosphor-icons/react"

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <WarningCircle size={64} weight="fill" className="text-red-500" />
      <h1 className="mt-4 text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg">Oops! Página não encontrada.</p>
      <Button asChild className="mt-6">
        <Link to="/">Voltar para Home</Link>
      </Button>
    </div>
  )
}