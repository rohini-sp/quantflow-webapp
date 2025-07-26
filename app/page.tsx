"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  Zap,
  Brain,
  Shield,
  Rocket,
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  BarChart3,
  Database,
  Globe,
  CheckCircle,
  Sparkles,
  Target,
  Clock,
  Award,
} from "lucide-react"

export default function QuantflowLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const sections = ["hero", "features", "demo", "testimonials", "pricing", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const newSection = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(Math.min(newSection, sections.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    })
    setIsMenuOpen(false)
  }

  return (
    <div className="relative overflow-hidden-x">
      {/* Fixed Navigation */}
      <nav className="qf-nav">
        <div className="qf-nav-content">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 qf-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold font-space-grotesk qf-gradient-text">Quantflow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["Features", "Demo", "Testimonials", "Pricing", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index + 1)}
                className={`text-sm font-medium transition-colors focus-visible-ring ${
                  currentSection === index + 1 ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            <Button variant="ghost" size="sm" className="focus-visible-ring">
              Sign In
            </Button>
            <Button size="sm" className="btn-primary focus-visible-ring">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus-visible-ring rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`qf-mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="space-y-4">
            {["Features", "Demo", "Testimonials", "Pricing", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index + 1)}
                className="block w-full text-left py-2 text-white hover:text-indigo-300 transition-colors focus-visible-ring rounded-md"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button size="sm" className="w-full btn-primary">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Indicator */}
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all focus-visible-ring ${
              currentSection === index ? "bg-indigo-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="qf-section bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Background Elements */}
        <div className="qf-bg-element top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-200 rounded-full qf-float" />
        <div
          className="qf-bg-element bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-pink-200 rounded-full qf-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="qf-bg-element top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-200 rounded-full qf-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="qf-section-content">
          <div className="qf-container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left qf-slide-up order-2 lg:order-1">
                <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-2 qf-gradient-primary text-white border-0 inline-flex items-center">
                  <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span className="text-xs sm:text-sm">AI-Powered Analytics Platform</span>
                </Badge>

                <h1 className="text-responsive-4xl lg:text-responsive-5xl font-bold font-space-grotesk mb-4 sm:mb-6 leading-tight">
                  Data Intelligence
                  <span className="block qf-gradient-text">Redefined</span>
                </h1>

                <p className="text-responsive-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform raw data into actionable insights with our next-generation AI platform. Real-time analytics,
                  predictive modeling, and intelligent automation in one unified solution.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg focus-visible-ring"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-indigo-200 hover:border-indigo-300 bg-transparent focus-visible-ring"
                  >
                    <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Watch Demo
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                    No setup required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                    14-day free trial
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
                    Cancel anytime
                  </div>
                </div>
              </div>

              {/* Right Content - Interactive Dashboard Preview */}
              <div className="relative order-1 lg:order-2 max-w-lg mx-auto lg:max-w-none">
                <div className="qf-card qf-hover-lift shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-semibold">Live Analytics Dashboard</h3>
                    <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2 qf-pulse" />
                      Live Data
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">Revenue</p>
                          <p className="text-lg sm:text-2xl font-bold text-gray-900">$2.4M</p>
                        </div>
                        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                      </div>
                      <p className="text-xs sm:text-sm text-green-600 mt-1 sm:mt-2">+18.2% from last month</p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">Active Users</p>
                          <p className="text-lg sm:text-2xl font-bold text-gray-900">847K</p>
                        </div>
                        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                      </div>
                      <p className="text-xs sm:text-sm text-blue-600 mt-1 sm:mt-2">+12.5% growth rate</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3">AI Insights</h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center text-xs sm:text-sm">
                        <Target className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 mr-2 flex-shrink-0" />
                        <span>Conversion rate optimization detected</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm">
                        <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 mr-2 flex-shrink-0" />
                        <span>Anomaly in user behavior patterns</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span>Predicted 25% revenue increase</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Hidden on mobile to prevent overflow */}
                <div className="hidden sm:block absolute -top-2 -right-2 qf-glass rounded-full p-2 sm:p-3 shadow-lg qf-float">
                  <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div
                  className="hidden sm:block absolute -bottom-2 -left-2 qf-glass rounded-full p-2 sm:p-3 shadow-lg qf-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Database className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="qf-section bg-white">
        <div className="qf-section-content">
          <div className="qf-container">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-2 bg-indigo-100 text-indigo-800 text-xs sm:text-sm">
                CORE FEATURES
              </Badge>
              <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold font-space-grotesk mb-4 sm:mb-6">
                Everything You Need for
                <span className="block qf-gradient-text">Data Excellence</span>
              </h2>
              <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive analytics tools designed for modern businesses
              </p>
            </div>

            <div className="qf-grid qf-grid-3">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Insights",
                  description:
                    "Advanced machine learning algorithms automatically discover patterns and predict future trends in your data.",
                },
                {
                  icon: Zap,
                  title: "Real-Time Processing",
                  description:
                    "Process millions of data points in real-time with sub-second query responses and live dashboard updates.",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description:
                    "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced access controls.",
                },
                {
                  icon: Database,
                  title: "Universal Connectors",
                  description: "Connect to any data source with 200+ pre-built integrations and custom API endpoints.",
                },
                {
                  icon: BarChart3,
                  title: "Interactive Dashboards",
                  description:
                    "Create stunning visualizations with our drag-and-drop dashboard builder and customizable widgets.",
                },
                {
                  icon: Globe,
                  title: "Global Scale",
                  description: "Built for global enterprises with multi-region deployment and 99.99% uptime guarantee.",
                },
              ].map((feature, index) => (
                <Card key={index} className="qf-hover-lift border-0 shadow-lg qf-glass h-full">
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 qf-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="qf-section bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="qf-section-content">
          <div className="qf-container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-white/20 text-white border-0 inline-flex items-center">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span className="text-xs sm:text-sm">INTERACTIVE DEMO</span>
                </Badge>

                <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold font-space-grotesk mb-4 sm:mb-6">
                  See Quantflow in Action
                </h2>

                <p className="text-responsive-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
                  Experience the power of next-generation analytics with our interactive demo. Watch as complex data
                  transforms into clear, actionable insights in real-time.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Real-time data visualization",
                    "AI-powered anomaly detection",
                    "Predictive analytics modeling",
                    "Custom dashboard creation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 sm:mr-4 flex-shrink-0" />
                      <span className="text-base sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-white text-indigo-900 hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold focus-visible-ring"
                >
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Launch Interactive Demo
                </Button>
              </div>

              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl sm:rounded-3xl overflow-hidden qf-glass border border-white/20 qf-hover-lift">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors qf-pulse">
                      <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-1" />
                    </div>
                  </div>

                  {/* Demo Stats Overlay */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/40 rounded-md sm:rounded-lg p-2 sm:p-3">
                    <div className="text-xs sm:text-sm text-white/80">Processing Speed</div>
                    <div className="text-sm sm:text-lg font-bold text-white">2.3M records/sec</div>
                  </div>

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/40 rounded-md sm:rounded-lg p-2 sm:p-3">
                    <div className="text-xs sm:text-sm text-white/80">Accuracy</div>
                    <div className="text-sm sm:text-lg font-bold text-white">99.7%</div>
                  </div>

                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/40 rounded-md sm:rounded-lg p-2 sm:p-3">
                    <div className="text-xs sm:text-sm text-white/80">Response Time</div>
                    <div className="text-sm sm:text-lg font-bold text-white">&lt; 100ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="qf-section bg-gradient-to-br from-gray-50 to-white">
        <div className="qf-section-content">
          <div className="qf-container">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-2 bg-indigo-100 text-indigo-800 text-xs sm:text-sm">
                CUSTOMER SUCCESS
              </Badge>
              <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold font-space-grotesk mb-4 sm:mb-6">
                Trusted by Industry
                <span className="block qf-gradient-text">Leaders Worldwide</span>
              </h2>
              <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
                Join thousands of companies transforming their data strategy with Quantflow
              </p>
            </div>

            <div className="qf-grid qf-grid-3 mb-12 sm:mb-16">
              {[
                {
                  quote:
                    "Quantflow transformed our data operations completely. We've seen a 300% improvement in decision-making speed and accuracy.",
                  author: "Sarah Chen",
                  role: "Chief Data Officer, TechCorp",
                  gradient: "qf-gradient-primary",
                },
                {
                  quote:
                    "The AI insights feature is incredible. We discovered revenue opportunities worth $2M that we never knew existed.",
                  author: "Michael Rodriguez",
                  role: "CEO, DataFlow Dynamics",
                  gradient: "qf-gradient-secondary",
                },
                {
                  quote:
                    "Outstanding platform with world-class support. Our analytics team's productivity increased by 400% in just 3 months.",
                  author: "Emily Johnson",
                  role: "VP Analytics, InnovateLabs",
                  gradient: "qf-gradient-primary",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="qf-hover-lift border-0 shadow-lg qf-glass h-full">
                  <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                    <div className="flex items-center mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.gradient} rounded-full mr-3 sm:mr-4 flex-shrink-0`}
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                        <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 uppercase tracking-wide font-semibold">
                Trusted by 10,000+ companies worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-60">
                {["Microsoft", "Google", "Amazon", "Netflix", "Spotify"].map((company) => (
                  <div key={company} className="text-lg sm:text-2xl font-bold text-gray-400">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="qf-section bg-white">
        <div className="qf-section-content">
          <div className="qf-container">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 px-3 sm:px-4 py-2 bg-indigo-100 text-indigo-800 text-xs sm:text-sm">
                PRICING PLANS
              </Badge>
              <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold font-space-grotesk mb-4 sm:mb-6">
                Choose Your
                <span className="block qf-gradient-text">Perfect Plan</span>
              </h2>
              <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
                Flexible pricing that scales with your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {/* Starter Plan */}
              <Card className="qf-hover-lift border-2 border-gray-200 hover:border-indigo-300 transition-colors h-full w-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6">Perfect for small teams</p>
                  <div className="mb-4 sm:mb-6 lg:mb-8">
                    <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">$49</span>
                    <span className="text-sm sm:text-base text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 text-left flex-grow">
                    {["Up to 1M data points/month", "5 team members", "Basic AI insights", "Email support"].map(
                      (feature, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                  <Button className="w-full bg-transparent focus-visible-ring text-sm sm:text-base" variant="outline">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="qf-hover-lift border-2 border-indigo-500 relative shadow-xl lg:transform lg:scale-105 h-full w-full order-first md:order-none">
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="qf-gradient-primary text-white px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 border-0 text-xs sm:text-sm">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Most Popular
                  </Badge>
                </div>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col pt-6 sm:pt-8 lg:pt-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Professional</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6">For growing businesses</p>
                  <div className="mb-4 sm:mb-6 lg:mb-8">
                    <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">$149</span>
                    <span className="text-sm sm:text-base text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 text-left flex-grow">
                    {[
                      "Up to 10M data points/month",
                      "25 team members",
                      "Advanced AI & ML models",
                      "Priority support",
                      "Custom integrations",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-primary focus-visible-ring text-sm sm:text-base">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="qf-hover-lift border-2 border-gray-200 hover:border-indigo-300 transition-colors h-full w-full md:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6">For large organizations</p>
                  <div className="mb-4 sm:mb-6 lg:mb-8">
                    <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">Custom</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8 text-left flex-grow">
                    {[
                      "Unlimited data points",
                      "Unlimited team members",
                      "Custom AI models",
                      "Dedicated support",
                      "On-premise deployment",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-transparent focus-visible-ring text-sm sm:text-base" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="qf-section qf-gradient-primary text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="qf-section-content">
          <div className="qf-container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-white/20 text-white border-0 inline-flex items-center">
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-xs sm:text-sm">GET STARTED TODAY</span>
              </Badge>

              <h2 className="text-responsive-3xl lg:text-responsive-5xl font-bold font-space-grotesk mb-4 sm:mb-6">
                Ready to Transform Your Data Strategy?
              </h2>

              <p className="text-responsive-lg text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
                Join thousands of companies already using Quantflow to unlock the full potential of their data. Start
                your free trial today and see results in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 max-w-md mx-auto">
                <Input
                  placeholder="Enter your work email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus-visible-ring flex-grow"
                />
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90 px-6 sm:px-8 whitespace-nowrap focus-visible-ring"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-white/80">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Setup in 5 minutes
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  14-day free trial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
