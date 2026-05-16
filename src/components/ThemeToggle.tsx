import { Moon, Sun, Droplets, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Determine which icon to show based on active theme
  const resolvedTheme = theme === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          {/* Light icon */}
          <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
          {/* Blue icon */}
          <Droplets className={`h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "blue" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
          {/* Dark icon */}
          <Moon className={`h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
          <Sun className="h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue")} className="gap-2">
          <Droplets className="h-4 w-4" />
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
          <Moon className="h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
          <Monitor className="h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}