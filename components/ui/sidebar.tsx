"use client"

import { buttonVariants } from "@/components/ui/button"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight, LayoutDashboard, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar({ className, isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/users",
      icon: Users,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <aside
      className={cn(
        "relative flex h-screen flex-col border-r bg-sidebar-background transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[240px]",
        className,
      )}
    >
      <Button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full"
        variant="outline"
        size="icon"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>
      <div className="flex h-[52px] items-center justify-center border-b px-4 py-2">
        <span className="text-lg font-bold text-sidebar-foreground">{isCollapsed ? "App" : "Application"}</span>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid items-start gap-2 px-4">
          <TooltipProvider delayDuration={0}>
            {navItems.map((item) => (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({
                        variant: pathname === item.href ? "default" : "ghost",
                        size: isCollapsed ? "icon" : "default",
                      }),
                      pathname === item.href
                        ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      "justify-start",
                    )}
                  >
                    <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                    {!isCollapsed && item.title}
                  </Link>
                </TooltipTrigger>
                {isCollapsed && <TooltipContent side="right">{item.title}</TooltipContent>}
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </ScrollArea>
    </aside>
  )
}
