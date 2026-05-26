"use client"

import { useEffect, useRef } from "react"

interface CardItem {
  image: string
  label: string
}

// Column 1 — scrolls UP (6 cards)
const column1Cards: CardItem[] = [
  { image: "/assets/herosection/Screenshot 2026-05-25 212742.png", label: "AI Dashboard" },
  { image: "/assets/herosection/roastex1.webp", label: "RoastMySnap AI" },
  { image: "/assets/herosection/Melvin.webp", label: "Melvin AI Assistant" },
  { image: "/assets/herosection/RAG_ARC.jpg", label: "RAG Architecture" },
  { image: "/assets/herosection/ex2.webp", label: "ZTRIKE Dashboard" },
  { image: "/assets/herosection/Lettering Artificial intelligence with tablet.jpg", label: "AI Intelligence" },
]

// Column 2 — scrolls DOWN (5 cards)
const column2Cards: CardItem[] = [
  { image: "/assets/herosection/gitartex1.webp", label: "GitArt — GitHub Canvas" },
  { image: "/assets/herosection/jarvis-screenshot-2.png", label: "Jarvis AI Interface" },
  { image: "/assets/herosection/Fensterputzroboter Pro 2_0.jpg", label: "Smart Automation" },
  { image: "/assets/herosection/Jp email.webp", label: "JP Email Automation" },
  { image: "/assets/herosection/roastex2.webp", label: "RoastMySnap Gallery" },
]

// Column 3 — scrolls UP slower (5 cards)
const column3Cards: CardItem[] = [
  { image: "/assets/herosection/ex1.webp", label: "ZTRIKE SEO Reports" },
  { image: "/assets/herosection/Melvin workflow.webp", label: "Melvin Workflow" },
  { image: "/assets/herosection/gitartex2.webp", label: "GitArt — Templates" },
  { image: "/assets/herosection/The Future is Green_ A Sustainable Approach to Event Planning.jpg", label: "Sustainable AI" },
  { image: "/assets/herosection/image_er.jpg", label: "AI Visualization" },
]


function ScrollColumn({
  cards,
  speed = 30,
  direction = "up",
  offset = 0,
}: {
  cards: CardItem[]
  speed?: number
  direction?: "up" | "down"
  offset?: number
}) {
  const columnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const column = columnRef.current
    if (!column) return

    const handleMouseEnter = () => {
      column.style.animationPlayState = "paused"
    }
    const handleMouseLeave = () => {
      column.style.animationPlayState = "running"
    }

    column.addEventListener("mouseenter", handleMouseEnter)
    column.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      column.removeEventListener("mouseenter", handleMouseEnter)
      column.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate cards 3x for seamless loop
  const allCards = [...cards, ...cards, ...cards]

  return (
    <div
      className="hero-scroll-column-mask"
      style={{ paddingTop: `${offset}px` }}
    >
      <div
        ref={columnRef}
        className={`hero-scroll-column ${direction === "down" ? "hero-scroll-down" : "hero-scroll-up"}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {allCards.map((card, i) => (
          <div
            key={`${card.label}-${i}`}
            className="hero-scroll-card"
          >
            <div className="hero-scroll-card-inner">
              <img
                src={card.image}
                alt={card.label}
                loading="lazy"
                draggable={false}
              />
              <div className="hero-scroll-card-overlay">
                <span className="hero-scroll-card-label">{card.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroCardCarousel() {
  return (
    <div className="hero-carousel-wrapper">
      <ScrollColumn cards={column1Cards} speed={50} direction="up" offset={0} />
      <ScrollColumn cards={column2Cards} speed={40} direction="down" offset={40} />
      <ScrollColumn cards={column3Cards} speed={45} direction="up" offset={20} />
    </div>
  )
}
