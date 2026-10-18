import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import Head from "next/head";
import Script from "next/script";
import NextLink from "next/link";
import { useCalendlyPopup } from "@/hooks/useCalendlyPopup";
import {
  Target, Users, Award, Lightbulb, Globe, Shield, Code,
  ArrowRight, Star, MapPin, Brain, Heart, Zap,
  CheckCircle, Building, Calendar
} from "lucide-react";
import Testimonials from "@/components/Testimonials";

const CALENDLY_URL = "https://calendly.com/changvijay54";

const About = () => {
  const { handleCalendlyLoaded, triggerCalendlyPopup } = useCalendlyPopup(CALENDLY_URL);

  const teamExperts = [
    {
      name: "Senior Developers",
      count: "50+",
      description: "Full-stack developers specializing in modern frameworks",
      expertise: ["React", "Node.js", "Python", "Cloud Architecture"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "UX/UI Designers",
      count: "15+",
      description: "Creative professionals focused on user-centered design",
      expertise: ["Figma", "Adobe Suite", "Prototyping", "User Research"],
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Project Managers",
      count: "12+",
      description: "Certified PMP and Agile practitioners",
      expertise: ["Agile", "Scrum", "Risk Management", "Client Relations"],
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "DevOps Engineers",
      count: "8+",
      description: "Infrastructure and deployment specialists",
      expertise: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  // const milestones = [
  //   {
  //     year: "2014",
  //     event: "Company Founded",
  //     description: "Started with 5 passionate team members and a vision",
  //     icon: Rocket,
  //     achievements: "First office in Mumbai"
  //   },
  //   {
  //     year: "2017",
  //     event: "100+ Projects",
  //     description: "Reached milestone of 100 successful deliveries",
  //     icon: Trophy,
  //     achievements: "₹50M+ in revenue"
  //   },
  //   {
  //     year: "2020",
  //     event: "Global Expansion",
  //     description: "Opened offices in 3 countries during pandemic",
  //     icon: Globe,
  //     achievements: "500+ team members"
  //   },
  //   {
  //     year: "2024",
  //     event: "Industry Leaders",
  //     description: "Recognized as top IT service provider in Asia",
  //     icon: Award,
  //     achievements: "1000+ projects completed"
  //   }
  // ];

  const stats = [
    { number: "99.99%", label: "Uptime Guarantee", icon: Calendar, description: "Decade of innovation" },
    { number: "100%", label: "Commitment", icon: CheckCircle, description: "Successful launches" },
    { number: "100%", label: "Reliability", icon: Heart, description: "Trusted partnerships" },
    { number: "2X", label: "Faster Delivery", icon: MapPin, description: "Lightning Fast Delivery" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations and sets industry standards.",
      details: "Committed to setting new benchmarks in quality and innovation",
      color: "from-yellow-400 to-orange-500",
      metrics: "99.8% quality score"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as true partners, ensuring success through seamless teamwork and communication.",
      details: "Agile methodology practitioners",
      color: "from-blue-400 to-purple-500",
      metrics: "24/7 support available"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve the most complex business challenges.",
      details: "Dedicated R&D team",
      color: "from-green-400 to-blue-500",
      metrics: "50+ patents filed"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct business with absolute honesty, transparency, and the highest ethical standards in the industry.",
      details: "100% client satisfaction focus",
      color: "from-red-400 to-pink-500",
      metrics: "Zero data breaches"
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      tech: ["React", "Vue.js", "Angular", "TypeScript"],
      icon: Code,
      description: "Modern web interfaces"
    },
    {
      category: "Backend",
      tech: ["Node.js", "Python", "Java", ".NET"],
      icon: Building,
      description: "Robust server solutions"
    },
    {
      category: "Mobile",
      tech: ["React Native", "Flutter", "iOS", "Android"],
      icon: Users,
      description: "Cross-platform apps"
    },
    {
      category: "Cloud",
      tech: ["AWS", "Azure", "Google Cloud", "Docker"],
      icon: Globe,
      description: "Scalable infrastructure"
    },
  ];

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://changtechs.com/About#webpage",
    url: "https://changtechs.com/About",
    name: "About Chang Groups | Custom Software Development Company",
    description:
      "Learn about Chang Groups IT Solutions — a decade of expertise in custom software development, CRM, ERP, and digital transformation for 500+ clients worldwide.",
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://changtechs.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://changtechs.com/About" },
      ],
    },
    about: {
      "@type": "Organization",
      name: "Chang Groups IT Solutions",
      foundingDate: "2014",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "85+" },
      description:
        "Leading custom software development company with expertise in CRM, ERP, web applications, AI integration, and mobile development.",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>About Chang Groups | Custom Software Development Company</title>
        <meta
          name="description"
          content="Learn about Chang Groups IT Solutions — a decade of expertise building custom CRM, ERP, web applications & AI integrations for 500+ businesses worldwide. Meet our expert team."
        />
        <link rel="canonical" href="https://changtechs.com/About" />
        <meta property="og:url" content="https://changtechs.com/About" />
        <meta property="og:title" content="About Chang Groups | Custom Software Development Company" />
        <meta
          property="og:description"
          content="A decade of expertise in custom software development — CRM, ERP, web apps, and AI integrations for 500+ clients worldwide. Learn our story."
        />
        <meta name="twitter:title" content="About Chang Groups | Custom Software Development Company" />
        <meta
          name="twitter:description"
          content="A decade of expertise in custom CRM, ERP & web app development for 500+ clients. Learn our story."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleCalendlyLoaded}
      />
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <ScrollReveal animation="fade" delay={200}>
                <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 mr-2" />
                  Trusted by 500+ Global Companies
                </Badge>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={400}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                  About
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                    Chang Groups
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={600}>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Your trusted partner in digital transformation with over a decade of excellence.
                  We don&apos;t just build software – we craft digital experiences that revolutionize businesses.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} animation="scale" delay={600 + index * 100}>
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-white/90 font-medium mb-1">{stat.label}</div>
                      <div className="text-white/70 text-sm">{stat.description}</div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="text-center mb-20">
                <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                  Our Foundation
                </Badge>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Our Story & Purpose
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  For over a decade, Chang Groups has been at the forefront of digital innovation,
                  helping businesses transform and thrive in the digital age. Our journey began with
                  a simple belief: technology should empower, not complicate.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Enhanced Mission */}
              <ScrollReveal animation="slide-left" delay={400}>
                <Card className="border-border hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      To empower businesses with cutting-edge technology solutions that streamline operations,
                      enhance productivity, and drive sustainable growth in an ever-evolving digital landscape.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Deliver innovative solutions that solve real business challenges",
                        "Build long-term partnerships based on trust and results",
                        "Drive digital transformation that creates measurable value"
                      ].map((point, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Enhanced Vision */}
              <ScrollReveal animation="slide-right" delay={600}>
                <Card className="border-border hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      To be the world&apos;s most trusted technology partner, recognized for our innovation,
                      excellence, and transformative impact on businesses across industries.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Pioneer the future of digital innovation",
                        "Expand our global footprint while maintaining quality",
                        "Shape the next generation of technology leaders"
                      ].map((point, index) => (
                        <div key={index} className="flex items-center">
                          <Zap className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Enhanced Milestones
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                  Our Evolution
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-8">Our Journey Through Time</h3>
              </div>
            </ScrollReveal>
            
            <div className="relative">
              <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                {milestones.map((milestone, index) => (
                  <ScrollReveal key={index} animation="slide-up" delay={400 + index * 200}>
                    <div className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                      <div className="hidden lg:block absolute top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform -translate-y-1/2 shadow-lg"
                        style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}>
                      </div>

                      <Card className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                        <CardContent className="p-8">
                          <div className={`flex items-center mb-6 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${'from-blue-500 to-purple-500'} flex items-center justify-center ${index % 2 === 0 ? 'lg:ml-4' : 'lg:mr-4'} group-hover:scale-110 transition-transform shadow-lg`}>
                              <milestone.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                              <div className="text-2xl font-bold text-primary mb-1">{milestone.year}</div>
                              <h4 className="text-xl font-semibold text-foreground">{milestone.event}</h4>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{milestone.description}</p>
                          <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-semibold text-primary">{milestone.achievements}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                Our People
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Backed by 100+ world-class technology experts with proven track records across diverse industries and cutting-edge technologies
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamExperts.map((expert, index) => (
              <ScrollReveal key={index} animation="scale" delay={400 + index * 150}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 hover:-translate-y-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${expert.color}`}></div>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${expert.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <expert.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {expert.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {expert.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1 text-xs hover:bg-primary hover:text-white transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Enhanced Stats Grid */}
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="mt-24 p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
              <h3 className="text-3xl font-bold text-white text-center mb-12">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group hover:bg-white/30 transition-colors">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/90 font-medium mb-1">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                Our Foundation
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The fundamental principles that guide every decision, every project, and every relationship we build
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={400 + index * 200}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${value.color}`}></div>
                  <CardContent className="p-10">
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                          {value.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-semibold text-primary">{value.metrics}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {value.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-foreground">{value.details}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technology Expertise */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                Tech Mastery
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our Technology Arsenal
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mastering cutting-edge technologies that power tomorrow&apos;s businesses. We stay ahead of the curve to deliver future-ready solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techStack.map((stack, index) => (
              <ScrollReveal key={index} animation="scale" delay={400 + index * 150}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 hover:-translate-y-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-center overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <stack.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {stack.category}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">{stack.description}</p>
                    <div className="space-y-3">
                      {stack.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="mx-1 hover:bg-primary hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="slide-up" delay={200}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Excellence?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={400}>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Join 500+ companies who trust Chang Groups to deliver exceptional digital solutions.
              Let&apos;s build something extraordinary together.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/Contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 text-lg font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </NextLink>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-900 hover:text-blue-900 hover:bg-blue-50 px-10 py-4 text-lg font-semibold"
                onClick={triggerCalendlyPopup}
              >
                Schedule a Meeting
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;