"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Brain, Zap, Users, Target, Trophy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: "title",
    title: "Zaza Schwoop",
    subtitle: '"Swipe into your smartest self."',
    description: "The world's first mood-adaptive, AI-powered study app",
    type: "title",
  },
  {
    id: "problem",
    title: "🎯 The Problem",
    type: "content",
    points: [
      "Students struggle to focus, stay motivated, and retain information",
      "Existing study apps are static, joyless, and ignore emotional state",
      "Flashcards are effective — but creating them is tedious and time-consuming",
      "Teachers have no insight into how students study outside class",
    ],
  },
  {
    id: "solution",
    title: "💡 The Solution: Zaza Schwoop",
    subtitle: "An AI-powered, vibe-coded study companion that:",
    type: "content",
    points: [
      "Adapts to how students feel (calm, tired, stressed, etc.)",
      "Instantly generates flashcards from notes or images",
      "Makes learning fun with quiz battles and social streaks",
      "Helps teachers and parents track engagement",
      'Powers viral growth via shareable "Schwoop Replays" and battle invites',
    ],
  },
  {
    id: "features",
    title: "🧠 Core Features",
    type: "features",
    features: [
      {
        icon: <Brain className="w-6 h-6" />,
        title: "Mood-Based Study Modes",
        description: "Chill, Cram, Focus modes",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "GPT-4 Flashcard Generator",
        description: "Paste notes → deck in 10 seconds",
      },
      {
        icon: <Trophy className="w-6 h-6" />,
        title: "Quiz Battles",
        description: "Solo + friend duels with XP + rewards",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Study Squads",
        description: "Group study with leaderboards",
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Deck Marketplace",
        description: "Community decks + creator monetization",
      },
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Zaza Ecosystem",
        description: "Cross-promotes Zaza Teach, Coach, etc.",
      },
    ],
  },
  {
    id: "why-now",
    title: "💥 Why Now?",
    type: "content",
    points: [
      "Gen Z and Alpha demand emotionally intelligent learning tools",
      "AI is finally good enough to generate flashcards that actually work",
      "TikTok-native UX (battles, replays, streaks) drives exponential virality",
      "EdTech fatigue is high — students want fun, frictionless learning",
    ],
  },
  {
    id: "traction",
    title: "🔥 Traction Targets",
    type: "timeline",
    timeline: [
      {
        period: "Q1 2026",
        milestone: "Private beta with 500 Zaza Teach-linked students",
      },
      {
        period: "Q2 2026",
        milestone: "Public launch + TikTok influencer campaign",
      },
      {
        period: "Q3 2026",
        milestone: "Viral growth loop + global classroom penetration",
      },
    ],
  },
  {
    id: "business-model",
    title: "💸 Business Model",
    type: "pricing",
    tiers: [
      {
        name: "Free",
        price: "€0",
        features: ["5 decks/month", "Solo practice"],
      },
      {
        name: "Schwoop Pro",
        price: "€4.99",
        features: ["Unlimited decks", "Battles", "Analytics"],
        popular: true,
      },
      {
        name: "Schwoop Squad",
        price: "€9.99",
        features: ["Up to 6 friends", "Shared decks", "Chat"],
      },
      {
        name: "Deck Marketplace",
        price: "€0.99–€2.99",
        features: ["Paid creator decks", "70% revenue share"],
      },
      {
        name: "School Licenses",
        price: "Custom",
        features: ["Bulk dashboards", "Teacher use"],
      },
    ],
  },
  {
    id: "metrics",
    title: "📊 Key Metrics",
    type: "metrics",
    metrics: [
      { label: "D7 Retention Target", value: "40%" },
      { label: "Viral Coefficient", value: "1.2+" },
      { label: "Free → Paid Conversion", value: "15%" },
      { label: "ARPU", value: "€25/year avg." },
      { label: "Monthly Revenue Goal (Q4 2026)", value: "€100K+" },
    ],
  },
  {
    id: "why-zaza-wins",
    title: "🧬 Why Zaza Wins",
    type: "content",
    points: [
      "First-mover advantage in vibe-coded study tools",
      "Built for emotional relevance, not just utility",
      "Part of the Zaza ecosystem — students, teachers, and parents",
      "Combines AI fluency with viral UX mechanics",
      "Designed by a PhD-led team with real educator DNA",
    ],
  },
]

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-10 flex justify-between items-center">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
        <div className="text-sm opacity-70">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="container mx-auto px-6 py-16 min-h-screen flex items-center justify-center">
        {slide.type === "title" && (
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Brain className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-3xl mb-6 text-blue-200">{slide.subtitle}</p>
              <p className="text-xl text-gray-300">{slide.description}</p>
            </div>
          </div>
        )}

        {slide.type === "content" && (
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center">{slide.title}</h2>
            {slide.subtitle && <p className="text-2xl mb-8 text-center text-blue-200">{slide.subtitle}</p>}
            <div className="space-y-6">
              {slide.points?.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="text-xl leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === "features" && (
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slide.features?.map((feature, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {slide.type === "timeline" && (
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center">{slide.title}</h2>
            <div className="space-y-8">
              {slide.timeline?.map((item, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <Badge className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 text-lg">
                      {item.period}
                    </Badge>
                  </div>
                  <p className="text-xl">{item.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === "pricing" && (
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {slide.tiers?.map((tier, index) => (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 backdrop-blur-sm relative ${tier.popular ? "ring-2 ring-pink-500" : ""}`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-violet-500">
                      Popular
                    </Badge>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">{tier.name}</h3>
                    <div className="text-3xl font-bold mb-4 text-pink-400">{tier.price}</div>
                    <div className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <p key={featureIndex} className="text-sm text-gray-300">
                          {feature}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {slide.type === "metrics" && (
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.metrics?.map((metric, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <p className="text-lg text-gray-300">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="lg"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </Button>
        <Button
          onClick={nextSlide}
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Keyboard Navigation */}
      <div className="fixed bottom-6 right-6 text-sm opacity-50">Use ← → keys to navigate</div>

      {/* Keyboard Event Handler */}
      <div
        className="fixed inset-0 pointer-events-none"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") nextSlide()
          if (e.key === "ArrowLeft") prevSlide()
        }}
        tabIndex={0}
      />
    </div>
  )
}
