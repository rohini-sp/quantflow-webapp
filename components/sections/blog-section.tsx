import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of AI in Data Processing",
      date: "July 20, 2024",
      excerpt: "Explore how AI is revolutionizing data processing, from real-time analytics to predictive insights.",
      image: "/placeholder.png?height=400&width=600&query=abstract+ai+data+processing",
    },
    {
      title: "Quantflow's New AI Architecture Explained",
      date: "July 15, 2024",
      excerpt: "A deep dive into the innovative architecture powering Quantflow's next-generation AI capabilities.",
      image: "/placeholder.png?height=400&width=600&query=ai+architecture+diagram",
    },
    {
      title: "Maximizing Efficiency with Autonomous Decision-Making",
      date: "July 10, 2024",
      excerpt:
        "Learn how autonomous decision-making can streamline operations and boost productivity in your business.",
      image: "/placeholder.png?height=400&width=600&query=robot+making+decisions",
    },
  ]

  return (
    <section id="blog" className="qf-section bg-gray-950 text-white">
      <div className="qf-container qf-section-content text-center">
        <h2 className="text-fluid-5xl font-bold mb-16 qf-gradient-text-silver-light">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="qf-card-dark qf-hover-metallic flex flex-col">
              <Image
                src={post.image || "/placeholder.png"}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-t-2xl object-cover w-full h-48"
              />
              <CardHeader className="flex-grow">
                <CardTitle className="text-xl font-bold text-gray-100 mb-2 text-left">{post.title}</CardTitle>
                <CardDescription className="text-gray-400 text-sm flex items-center text-left">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-left mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="qf-btn-ghost text-sm font-bold w-full">
                  READ MORE
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="qf-btn-silver font-bold">
          VIEW ALL POSTS
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
