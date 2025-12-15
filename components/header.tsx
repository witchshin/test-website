"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-serif font-light tracking-wider text-foreground">ÉTOILE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              소개
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              컬렉션
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              스토리
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              문의
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
                소개
              </a>
              <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
                컬렉션
              </a>
              <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
                스토리
              </a>
              <a href="#" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
                문의
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
