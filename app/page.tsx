"use client"

import { useState, useEffect, useRef } from "react"
import {
  Zap,
  Brain,
  Shield,
  Globe,
  Network,
  Eye,
  ArrowRight,
  Mail,
  Phone,
  Check,
  BarChart,
  Cloud,
  TrendingUp,
  Rocket,
} from "lucide-react"
import { MainLayout } from "@/components/layout/main-layout"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { DemoDashboard } from "@/components/demo-dashboard"
import { BlogSection } from "@/components/sections/blog-section"

export default function HomePage() {
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

  const features = [
    {
      icon: Brain,
      title: "AI_CORE",
      subtitle: "AI Processing Unit",
      description:
        "Advanced AI networks with adaptive learning algorithms for real-time pattern recognition and predictive analytics.",
      color: "silver-light",
    },
    {
      icon: Zap,
      title: "LIGHTNING_ENGINE",
      subtitle: "Real-time Processing",
      description:
        "Sub-millisecond query responses with parallel processing across distributed AI nodes for instant insights.",
      color: "silver-dark",
    },
    {
      icon: Shield,
      title: "FORTRESS_PROTOCOL",
      subtitle: "Advanced Security",
      description:
        "Military-grade encryption with robust algorithms and zero-trust architecture for ultimate data protection.",
      color: "metallic",
    },
    {
      icon: Network,
      title: "MESH_CONNECTOR",
      subtitle: "Universal Integration",
      description: "Seamless connectivity to any data source with 500+ pre-built connectors and custom API endpoints.",
      color: "silver-light",
    },
    {
      icon: Eye,
      title: "VISION_MATRIX",
      subtitle: "Visual Analytics",
      description: "Immersive 3D visualizations with AR/VR support and real-time collaborative dashboards.",
      color: "silver-dark",
    },
    {
      icon: Globe,
      title: "GLOBAL_MESH",
      subtitle: "Planetary Scale",
      description: "Multi-dimensional scaling across advanced data centers with 99.999% uptime guarantee.",
      color: "metallic",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="qf-section relative overflow-hidden bg-gradient-to-br from-gray-950 to-black text-white"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Background pattern or animation */}
          <div className="absolute inset-0 bg-[url('/placeholder.png?height=100&width=100')] bg-repeat opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
        </div>
        <div className="qf-container qf-section-content text-center">
          <h1 className="text-fluid-6xl font-bold qf-gradient-text-silver-light mb-6 qf-glitch">QUANTFLOW</h1>
          <p
            className="text-fluid-lg text-gray-300 max-w-3xl mx-auto mb-10 qf-slide-metallic"
            style={{ animationDelay: "0.2s" }}
          >
            Unleash the power of AI with real-time insights, predictive modeling, and autonomous decision-making for
            unparalleled data processing.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 qf-slide-metallic"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="qf-btn-silver font-bold">
              GET STARTED
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Button variant="ghost" className="qf-btn-ghost font-bold">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={(el) => (sectionRefs.current[1] = el)} className="qf-section bg-gray-900 text-white">
        <div className="qf-container qf-section-content">
          <h2 className="text-fluid-5xl font-bold text-center mb-16 qf-gradient-text-silver-dark">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="qf-card-dark qf-hover-metallic qf-slide-metallic" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <Brain className="w-10 h-10 text-gray-400 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-100">AI-Enhanced Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Leverage advanced AI algorithms to process vast datasets with unprecedented speed and accuracy.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="qf-card-dark qf-hover-metallic qf-slide-metallic" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <BarChart className="w-10 h-10 text-gray-400 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-100">Real-time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Gain immediate, actionable insights from your data as it streams in, enabling rapid decision-making.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="qf-card-dark qf-hover-metallic qf-slide-metallic" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-gray-400 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-100">Predictive Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Anticipate future trends and outcomes with highly accurate predictive models powered by deep learning.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="qf-card-dark qf-hover-metallic qf-slide-metallic" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <Rocket className="w-10 h-10 text-gray-400 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-100">Autonomous Decision-Making</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Automate complex decisions based on real-time data analysis, minimizing human intervention.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="qf-card-dark qf-hover-metallic qf-slide-metallic" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <Cloud className="w-10 h-10 text-gray-400 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-100">Scalable Cloud Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Our cloud-native architecture ensures seamless scalability to handle any data volume.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="qf-card-dark qf-hover-metallic qf-slide-metallic" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <Shield className="w-10 h-10 text-gray-400 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-100">Robust Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Your data is protected with industry-leading encryption and security protocols.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" ref={(el) => (sectionRefs.current[2] = el)} className="qf-section bg-gray-950 text-white">
        <div className="qf-container qf-section-content flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-fluid-5xl font-bold mb-6 qf-gradient-text-silver-light">
              Experience Quantflow in Action
            </h2>
            <p className="text-fluid-lg text-gray-300 mb-8">
              See how our AI system provides real-time operational status, CPU load, network throughput, and anomaly
              detection.
            </p>
            <button className="qf-btn-silver font-bold">
              VIEW LIVE DEMO
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <DemoDashboard />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={(el) => (sectionRefs.current[3] = el)}
        className="qf-section bg-gray-900 text-white"
      >
        <div className="qf-container qf-section-content text-center">
          <h2 className="text-fluid-5xl font-bold mb-16 qf-gradient-text-silver-dark">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="qf-card-dark qf-hover-metallic">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder-user.png"
                    alt="User Avatar"
                    width={64}
                    height={64}
                    className="rounded-full mr-4 border-2 border-gray-400"
                  />
                  <div>
                    <p className="font-bold text-gray-100">Jane Doe</p>
                    <p className="text-sm text-gray-400">CEO, Tech Solutions</p>
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-left">
                  &quot;Quantflow has revolutionized our data processing. The real-time insights are invaluable, and the
                  predictive models have given us a significant competitive edge.&quot;
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="qf-card-dark qf-hover-metallic">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder-user.png"
                    alt="User Avatar"
                    width={64}
                    height={64}
                    className="rounded-full mr-4 border-2 border-gray-400"
                  />
                  <div>
                    <p className="font-bold text-gray-100">John Smith</p>
                    <p className="text-sm text-gray-400">CTO, Global Analytics</p>
                  </div>
                </div>
                <CardDescription className="text-gray-300 text-left">
                  &quot;The autonomous decision-making capabilities of Quantflow are a game-changer. It has streamlined
                  our operations and reduced manual errors significantly.&quot;
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="mt-16 text-gray-400">
            <h3 className="text-2xl font-bold mb-8">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <Image
                src="/placeholder-logo.png"
                alt="Company Logo 1"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/placeholder-logo.png"
                alt="Company Logo 2"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/placeholder-logo.png"
                alt="Company Logo 3"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/placeholder-logo.png"
                alt="Company Logo 4"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={(el) => (sectionRefs.current[4] = el)} className="qf-section bg-gray-950 text-white">
        <div className="qf-container qf-section-content text-center">
          <h2 className="text-fluid-5xl font-bold mb-16 qf-gradient-text-silver-light">Flexible Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="qf-card-dark qf-hover-metallic p-8 flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-100 mb-2">Basic</CardTitle>
                <CardDescription className="text-gray-400">Ideal for small teams and startups.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-gray-50 mb-6">
                    $49<span className="text-xl text-gray-400">/month</span>
                  </div>
                  <ul className="text-left text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Real-time data processing
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Basic predictive models
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      50 GB data storage
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Email support
                    </li>
                  </ul>
                </div>
                <button className="qf-btn-silver font-bold w-full">CHOOSE BASIC</button>
              </CardContent>
            </Card>

            <Card className="qf-card-dark qf-hover-metallic p-8 flex flex-col border-2 border-gray-400 shadow-lg shadow-gray-400/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-100 mb-2">Pro</CardTitle>
                <CardDescription className="text-gray-400">For growing businesses needing more power.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-gray-50 mb-6">
                    $99<span className="text-xl text-gray-400">/month</span>
                  </div>
                  <ul className="text-left text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      All Basic features
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Advanced predictive modeling
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      500 GB data storage
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Priority email & chat support
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Customizable dashboards
                    </li>
                  </ul>
                </div>
                <button className="qf-btn-dark-silver font-bold w-full">CHOOSE PRO</button>
              </CardContent>
            </Card>

            <Card className="qf-card-dark qf-hover-metallic p-8 flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-gray-100 mb-2">Enterprise</CardTitle>
                <CardDescription className="text-gray-400">Tailored for large-scale operations.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-5xl font-bold text-gray-50 mb-6">Custom</div>
                  <ul className="text-left text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      All Pro features
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Autonomous decision-making
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      Unlimited data storage
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      24/7 dedicated support
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-gray-400 mr-2" />
                      On-premise deployment options
                    </li>
                  </ul>
                </div>
                <button className="qf-btn-silver font-bold w-full">CONTACT SALES</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection id="blog" ref={(el) => (sectionRefs.current[5] = el)} />

      {/* Contact Section */}
      <section id="contact" ref={(el) => (sectionRefs.current[6] = el)} className="qf-section bg-gray-900 text-white">
        <div className="qf-container qf-section-content text-center">
          <h2 className="text-fluid-5xl font-bold mb-16 qf-gradient-text-silver-dark">Get in Touch</h2>
          <Card className="qf-card-dark max-w-2xl mx-auto p-8">
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    placeholder="Name"
                    className="qf-glass-light border-gray-600 text-gray-50 placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="qf-glass-light border-gray-600 text-gray-50 placeholder:text-gray-400"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="qf-glass-light border-gray-600 text-gray-50 placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="qf-glass-light border-gray-600 text-gray-50 placeholder:text-gray-400"
                />
                <button className="qf-btn-silver font-bold w-full">
                  SEND MESSAGE
                  <Mail className="ml-2 w-5 h-5" />
                </button>
              </form>
              <div className="mt-8 text-gray-400 space-y-4">
                <p className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 text-gray-500" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-500" />
                  info@quantflow.com
                </p>
                <p className="flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2 text-gray-500" />
                  123 AI Street, Future City, FC 98765
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  )
}
