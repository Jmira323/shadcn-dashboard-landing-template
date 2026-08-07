"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgotPasswordForm1({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle")
  const [serverError, setServerError] = React.useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setServerError(null)
    setStatus("sending")

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) {
      setServerError(error.message)
      setStatus("idle")
      return
    }

    setStatus("sent")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter your email address and we&apos;ll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {serverError && (
                  <p className="text-destructive text-sm" role="alert">
                    {serverError}
                  </p>
                )}
                {status === "sent" ? (
                  <p className="text-sm" role="status">
                    Check your inbox — if an account exists for that address,
                    a reset link is on its way.
                  </p>
                ) : (
                  <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={status === "sending"}
                  >
                    {status === "sending" && (
                      <Loader2 className="size-4 animate-spin" />
                    )}
                    Send reset link
                  </Button>
                )}
              </div>
              <div className="text-center text-sm">
                Remember your password?{" "}
                <a href="/sign-in" className="underline underline-offset-4">
                  Back to log in
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
