"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const sectionRefs = useRef<Array<HTMLElement | null>>([])

  const sections = ["hero", "features", "demo", "testimonials", "pricing", "blog", "contact"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id)
            if (index !== -1) {
              setCurrentSection(index)
            }
          }
        })
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    )

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [sections])

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white font-inter">
      <Header scrollToSection={scrollToSection} currentSection={currentSection} />
      <main>
        {React.Children.map(children, (child, index) => {
          if (
            React.isValidElement(child) &&
            typeof child.type === "object" &&
            "displayName" in child.type &&
            sections[index]
          ) {
            return React.cloneElement(child as React.ReactElement<any>, {
              id: sections[index],
              ref: (el: HTMLElement) => (sectionRefs.current[index] = el),
            })
          }
          return child
        })}
      </main>
      <Footer />
    </div>
  )
}
