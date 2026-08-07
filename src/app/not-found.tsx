import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <Logo size={48} className="mb-6 rounded-xl" />
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground mt-2">
          We couldn&apos;t find that page.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Back to Nova Analytics</Link>
        </Button>
      </div>
    </div>
  )
}
