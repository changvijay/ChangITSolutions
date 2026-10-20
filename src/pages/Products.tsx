import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2, ArrowRight, Users, BarChart3, CreditCard, BookOpen, Utensils, Star, Zap, Shield, Rocket, Globe, TrendingUp } from "lucide-react";
import TechStack from "@/components/TechStack";
import { ScrollReveal } from "@/components/ScrollReveal";
import Script from "next/script";
import NextLink from "next/link";
import { useCalendlyPopup } from "@/hooks/useCalendlyPopup";

const CALENDLY_URL = "https://calendly.com/changvijay54";

const Products = () => {
  const { handleCalendlyLoaded, triggerCalendlyPopup } = useCalendlyPopup(CALENDLY_URL);

  const products = [
    {
      id: 1,
      name: "LIC Wendesk Hub",
      icon: Users,
      description: "Dynamic platform connecting LIC agents with clients with full content control",
      features: [
        "Client Relationship Management",
        "Dynamic Content Management",
        "Real-time Communication",
        "Performance Analytics",
        "Document Management"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      delay: "0s"
    },
    {
      id: 2,
      name: "CRMPROMAX",
      icon: BarChart3,
      description: "Complete shop management solution for customer tracking and cash flow",
      features: [
        "Customer Management",
        "Product Inventory",
        "E-Bill Generation",
        "Cash Flow Analytics",
        "Sales Reporting"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      delay: "0.1s"
    },
    {
      id: 3,
      name: "SnapQ",
      icon: BookOpen,
      description: "Student performance tracking through weekly MCQs with instant parent communication",
      features: [
        "Weekly MCQ Assessments",
        "Performance Analytics",
        "Instant Parent Notifications",
        "Weakness Identification",
        "Teacher Insights Dashboard"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      delay: "0.2s"
    },
    {
      id: 4,
      name: "Room Booking Pro",
      icon: CreditCard,
      description: "Complete room booking management with online reservations and cash flow tracking",
      features: [
        "Online Room Booking",
        "Payment Processing",
        "Room Availability Management",
        "Revenue Analytics",
        "Booking History"
      ],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      delay: "0.3s"
    },
    {
      id: 5,
      name: "Menu ProMax",
      icon: Utensils,
      description: "Digital menu solution with online ordering, payments, and demand forecasting",
      features: [
        "Digital Menu Display",
        "Online Food Ordering",
        "Payment Integration",
        "Order History",
        "Demand Forecasting"
      ],
      gradient: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      delay: "0.4s"
    }
  ];

  return (
    <div className="min-h-screen">

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleCalendlyLoaded}
      />
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Industry-Leading Solutions</span>
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Today
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our suite of innovative products designed to revolutionize your operations,
              boost efficiency, and accelerate growth across every aspect of your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade" delay={200}>
            <div className="text-center mb-24 relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />

              <div className="relative inline-block mb-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow-lg border border-blue-200/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <Zap className="w-5 h-5 mr-3 relative z-10 animate-pulse" />
                  <span className="font-semibold relative z-10">Premium Product Portfolio</span>
                  <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-ping relative z-10" />
                </div>
                {/* Badge Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl scale-150 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative mb-8">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
                  Our{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient">Product Suite</span>
                    {/* Underline Animation */}
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 origin-left transition-transform duration-700 delay-500 group-hover:scale-x-100" />
                  </span>
                </h2>

                {/* Floating Numbers */}
                <div className="absolute -top-8 -left-8 text-8xl font-bold text-blue-500/5 select-none animate-float">01</div>
                <div className="absolute -top-4 -right-12 text-6xl font-bold text-purple-500/5 select-none animate-float" style={{ animationDelay: '1s' }}>05</div>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
                  <span className="font-semibold text-foreground">Comprehensive solutions</span> engineered with precision to{" "}
                  <span className="text-gradient font-semibold">transform your business operations</span>{" "}
                  and drive unprecedented growth across all industries
                </p>

                {/* Statistics Row */}
                <div className="flex justify-center items-center space-x-8 mt-8">
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Products</div>
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Features</div>
                  </div>
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl font-bold text-pink-600 mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <ScrollReveal
                  key={product.id}
                  animation="scale"
                  delay={index * 200}
                >
                  <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2 border border-gray-200/50">
                    {/* Folder Tab */}
                    <div className="relative">
                      {/* Folder Tab Design */}
                      <div className={`relative bg-gradient-to-r ${product.gradient} rounded-t-2xl h-12 flex items-center px-6`}>
                        <div className="absolute -bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-black/10 to-transparent"></div>

                        {/* Tab Content */}
                        <div className="flex items-center space-x-3 relative z-10">
                          <div className="w-6 h-6 bg-white/30 rounded-md flex items-center justify-center">
                            <div className="w-3 h-3 bg-white/70 rounded-sm"></div>
                          </div>
                          <span className="text-white font-bold text-sm tracking-wider">{product.name.toUpperCase()}</span>
                        </div>
                      </div>

                      {/* Folder Body */}
                      <div className="bg-white border-t-4 border-gray-100 p-6">
                        {/* File Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 bg-gradient-to-br ${product.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {product.name}
                              </h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-500 font-medium">ACTIVE PROJECT</span>
                              </div>
                            </div>
                          </div>

                          {/* File Actions */}
                          <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-600 rounded-full ml-0.5"></div>
                              <div className="w-1 h-1 bg-gray-600 rounded-full ml-0.5"></div>
                            </button>
                          </div>
                        </div>

                        {/* File Description */}
                        <div className="mb-6">
                          <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-blue-200">
                            📄 {product.description}
                          </p>
                        </div>

                        {/* File Structure */}
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <div className="w-5 h-5 bg-yellow-100 rounded flex items-center justify-center mr-2">
                              <div className="text-xs">📁</div>
                            </div>
                            <span className="font-semibold text-gray-700 text-sm">Features Directory</span>
                          </div>

                          <ul className="space-y-2 ml-7">
                            {product.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="group/file flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
                                style={{ animationDelay: `${idx * 100}ms` }}
                              >
                                <div className="flex items-center space-x-2 min-w-0 flex-1">
                                  {/* File Icon */}
                                  <div className="w-4 h-4 bg-blue-100 rounded flex items-center justify-center group-hover/file:bg-blue-200 transition-colors duration-200">
                                    <div className="text-xs">📋</div>
                                  </div>

                                  {/* File Name */}
                                  <span className="text-sm text-gray-600 group-hover/file:text-blue-700 font-medium transition-colors duration-200 truncate">
                                    {feature.toLowerCase().replace(/\s+/g, '_')}.config
                                  </span>

                                  {/* File Status */}
                                  <div className="flex items-center space-x-1">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover/file:opacity-100 transition-opacity duration-200"></div>
                                    <span className="text-xs text-gray-400 opacity-0 group-hover/file:opacity-100 transition-opacity duration-200">
                                      Ready
                                    </span>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* File Actions Bar */}
                        <div className="bg-gray-50 rounded-lg p-4 border">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="text-xs text-gray-500 font-mono">
                              {product.features.length} files • Last modified: 2 hours ago
                            </div>
                          </div>

                          <button className="group/btn relative w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold text-sm rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg">
                            {/* Terminal Style Button */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`} />

                            <span className="relative z-10 flex items-center justify-center font-mono">
                              <span className="mr-2">$ ./deploy_solution.sh</span>
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>

                            {/* Terminal Cursor */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-green-400 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-300"></div>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Folder Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none rounded-2xl"></div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Interactive Product Comparison */}
          <ScrollReveal animation="slide-up" delay={600}>
            <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.2),transparent_70%)]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold mb-4">
                    Why Choose Our <span className="text-gradient">Product Suite?</span>
                  </h3>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Every product is built with enterprise-grade technology and designed for maximum impact
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "🚀",
                      title: "Lightning Fast",
                      description: "Sub-second response times with 99.9% uptime guarantee",
                      metric: "10x Faster"
                    },
                    {
                      icon: "🔒",
                      title: "Bank-Grade Security",
                      description: "End-to-end encryption with SOC 2 compliance",
                      metric: "256-bit SSL"
                    },
                    {
                      icon: "📈",
                      title: "Scalable Growth",
                      description: "From startup to enterprise, grows with your business",
                      metric: "Unlimited Scale"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/70 mb-4 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
                        <span className="text-sm font-bold text-blue-300">{item.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl font-bold text-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                    <span className="relative z-10 flex items-center">
                      View All Products
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 mb-8">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                <span className="font-medium">Why Choose Our Solutions</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8">
                Built for <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every product in our suite is crafted with precision, backed by cutting-edge technology,
                and designed to deliver measurable business impact from day one.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: Zap,
                title: "Lightning Fast Performance",
                description: "Optimized architecture delivers 10x faster response times with 99.9% uptime guarantee",
                features: ["Sub-second load times", "Auto-scaling infrastructure", "CDN optimization", "Real-time sync"],
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with end-to-end encryption and compliance certifications",
                features: ["256-bit encryption", "SOC 2 certified", "GDPR compliant", "Multi-factor auth"],
                gradient: "from-green-400 to-teal-500"
              },
              {
                icon: TrendingUp,
                title: "Scalable Growth",
                description: "Built to grow with your business from startup to enterprise level operations",
                features: ["Unlimited users", "API integrations", "Custom workflows", "Advanced analytics"],
                gradient: "from-purple-400 to-pink-500"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 200 + 400}>
                  <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Stats Section */}
          <ScrollReveal animation="fade" delay={800}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="group">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">300%</div>
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">Average ROI</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50%</div>
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">Time Saved</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">Reliability</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">Support</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced Methodology Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                <Rocket className="w-5 h-5 mr-2 text-blue-400" />
                <span className="font-medium">Our Process</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
                Agile <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                We leverage cutting-edge Agile methodologies with AI-enhanced workflows, ensuring
                rapid delivery, exceptional quality, and seamless adaptation to your evolving needs.
              </p>
            </div>
          </ScrollReveal>

          {/* Enhanced Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Deep-dive analysis, market research, and strategic planning",
                icon: Globe,
                color: "from-blue-400 to-cyan-400"
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "User-centric design with scalable system architecture",
                icon: Zap,
                color: "from-purple-400 to-pink-400"
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Agile sprints with continuous integration and testing",
                icon: Shield,
                color: "from-green-400 to-teal-400"
              },
              {
                step: "04",
                title: "Deploy & Scale",
                desc: "Seamless deployment with ongoing optimization",
                icon: TrendingUp,
                color: "from-orange-400 to-red-400"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 150 + 400}>
                  <div className="group relative text-center">
                    {/* Connection Line */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0" />
                    )}

                    {/* Step Card */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 group-hover:scale-105">
                      {/* Step Number */}
                      <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-xl group-hover:rotate-12 transition-transform duration-300`}>
                        {item.step}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <IconComponent className="w-12 h-12 text-white/80 mx-auto group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {item.desc}
                      </p>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Key Benefits */}
          <ScrollReveal animation="fade" delay={800}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">Why Choose Our Agile Approach?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Faster Delivery</h4>
                  <p className="text-white/70">50% faster time-to-market with our streamlined processes</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Higher Quality</h4>
                  <p className="text-white/70">99.9% bug-free delivery through rigorous testing</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Better ROI</h4>
                  <p className="text-white/70">Average 300% ROI within the first year</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack with Animation */}
      <ScrollReveal animation="fade">
        <TechStack />
      </ScrollReveal>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_70%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="scale" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                <Rocket className="w-5 h-5 mr-2 text-pink-400" />
                <span className="font-medium">Ready to Launch?</span>
              </div>

              <h2 className="text-6xl sm:text-7xl font-bold text-white mb-8 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Business Today
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 50+ successful businesses that have revolutionized their operations
                with our cutting-edge solutions. Your transformation starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Button
                  size="lg"
                  onClick={triggerCalendlyPopup}
                  className="relative bg-white text-primary hover:bg-white/90 shadow-glow hover:scale-110 transition-all duration-300 group px-10 py-5 text-lg font-bold overflow-hidden"
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <NextLink href="/Services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 px-10 py-5 text-lg font-semibold group"
                  >
                    <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    View Our Portfolio
                  </Button>
                </NextLink>
              </div>

              {/* Trust Indicators
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">Projects Delivered</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">Expert Support</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">5★</div>
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">Average Rating</div>
                </div>
              </div>
               */}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Products;
