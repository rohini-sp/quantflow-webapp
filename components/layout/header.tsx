"use client"

import { useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  scrollToSection: (index: number) => void
  currentSection: number
}

export function Header({ scrollToSection, currentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = ["FEATURES", "DEMO", "REVIEWS", "PRICING", "BLOG", "CONTACT"]

  return (
    <nav className="qf-nav">
      <div className="qf-nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <div className="relative">
            <div className="w-12 h-12 qf-gradient-silver-light rounded-2xl flex items-center justify-center shadow-lg qf-pulse-metallic">
              <Terminal className="w-7 h-7 text-gray-900" />
            </div>
            <div className="absolute -inset-1 qf-gradient-silver-light rounded-2xl opacity-30 blur-sm -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-mono qf-gradient-text-silver-light tracking-tight">QUANTFLOW</span>
            <span className="text-xs font-mono text-gray-400 opacity-80 tracking-widest">v2.0.AI</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index + 1)}
              className={`text-sm font-mono font-medium transition-all duration-300 focus-metallic relative group ${
                currentSection === index + 1 ? "text-gray-200 qf-metallic-text" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          <Button variant="ghost" size="sm" className="qf-btn-ghost text-sm font-mono">
            LOGIN
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus-metallic rounded-lg text-gray-400 hover:bg-gray-400/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`qf-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="space-y-6">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(index + 1)
                setIsMenuOpen(false)
              }}
              className="block w-full text-left py-3 text-gray-200 hover:text-gray-400 transition-colors focus-metallic rounded-lg font-mono font-medium"
            >
              {item}
            </button>
          ))}
          <div className="pt-6 space-y-4 border-t border-gray-400/20">
            <Button variant="ghost" size="sm" className="w-full qf-btn-ghost font-mono">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
