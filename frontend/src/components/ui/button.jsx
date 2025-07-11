import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variant === "outline"
          ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
        size === "sm" ? "h-9 px-3" : "h-10 px-4 py-2",
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"
export { Button } 