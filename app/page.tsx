"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Home,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export default function RealEstateLanding() {
  const [language, setLanguage] = useState("en");

  const translateSite = () => {
    setLanguage((prev) => (prev === "en" ? "pt-br" : "en"));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
		<header className="border-b bg-white/100 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <Image
                src="/logo.png"
                alt="Real Estate Agent"
                width={100}
                height={50}
              />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#properties"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Properties
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-10 lg:py-16 ml-35 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  #1 Agent in Downtown Area
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Dream Home
                  <span className="text-emerald-600"> Awaits</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 10 years of experience and $50M+ in sales, I help families find their perfect home and
                  investors maximize their returns.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
					<Link href="#properties">
						<Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
							View Properties
							<ChevronRight className="h-4 w-4 ml-2" />
						</Button>
					</Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  Free Consultation
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Homes Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$50M+</div>
                  <div className="text-sm text-gray-600">In Sales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/real-estate-agent-office.png"
                alt="Pedro Vieira - Real Estate Agent"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Complete Real Estate Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first-time buyers to seasoned investors, I provide comprehensive real estate solutions tailored to
              your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Home Buying",
                description: "Find your perfect home with expert guidance through every step of the buying process.",
              },
              {
                icon: TrendingUp,
                title: "Home Selling",
                description: "Maximize your home's value with strategic marketing and proven selling techniques.",
              },
              {
                icon: Users,
                title: "Investment Properties",
                description: "Build wealth through real estate with carefully selected investment opportunities.",
              },
              {
                icon: Award,
                title: "Market Analysis",
                description: "Get detailed market insights and property valuations to make informed decisions.",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-xl text-gray-600">Discover exceptional homes in prime locations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/modern-luxury-home.png",
                price: "$850,000",
                address: "123 Oak Street, Downtown",
                beds: 4,
                baths: 3,
                sqft: "2,400",
              },
              {
                image: "/contemporary-family-home.png",
                price: "$650,000",
                address: "456 Maple Avenue, Suburbs",
                beds: 3,
                baths: 2,
                sqft: "1,800",
              },
              {
                image: "/elegant-townhouse.png",
                price: "$750,000",
                address: "789 Pine Road, Midtown",
                beds: 3,
                baths: 2.5,
                sqft: "2,100",
              },
            ].map((property, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={`Property at ${property.address}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-600">New Listing</Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-emerald-600">{property.price}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {property.address}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
		<section id="about" className="py-20 bg-gray-50">
		  <div className="container mx-auto px-4 lg:px-6 mr-4">
			 <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Pedro Vieira?</h2>
                <p className="text-xl text-gray-600">
                  With a decade of experience in the real estate market, I bring unmatched expertise, dedication, and
                  results to every transaction.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Local Market Expert",
                    description: "Deep knowledge of neighborhood trends, pricing, and opportunities.",
                  },
                  {
                    title: "Proven Track Record",
                    description: "500+ successful transactions with 98% client satisfaction rate.",
                  },
                  {
                    title: "Full-Service Support",
                    description: "From initial consultation to closing day, I'm with you every step.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/professional-real-estate-agent.png"
                alt="Sarah Mitchell with awards"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">
              Let's discuss your real estate goals and create a plan to achieve them.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">pedrovieira@realestate.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      123 Main Street, Suite 100
                      <br />
                      Downtown, ST 12345
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-emerald-600" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-emerald-600" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-emerald-600" />
                </Link>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell me about your real estate needs..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Home className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">Pedro Vieira</span>
              </div>
              <p className="text-gray-400">
                Your trusted real estate partner for buying, selling, and investing in properties.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Home Buying
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Home Selling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Investment Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Market Analysis
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Downtown
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Suburbs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Midtown
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Waterfront
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>pedrovieira@realestate.com</li>
                <li>123 Main Street, Suite 100</li>
                <li>Downtown, ST 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pedro Vieira Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
