import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import NextLink from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useCalendlyPopup } from "@/hooks/useCalendlyPopup";
import { 
  Database, ShoppingCart, LayoutDashboard, Users, Code, Smartphone,
  Cloud, Lock, Workflow, BarChart3, MessageSquare, Palette,
  ArrowRight, CheckCircle, Clock, Target, Zap, Shield,
  Globe, Server, Cpu, Brain, Rocket, BarChart
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Custom CRM Development",
    description: "Tailored customer relationship management systems that optimize your sales pipeline, automate workflows, and provide actionable insights into customer behavior.",
    features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Automated Follow-ups"],
    technologies: ["Salesforce", "HubSpot", "Custom API", "AI Integration"],
    timeline: "4-8 weeks",
    benefits: ["Increase sales by 35%", "Reduce manual work by 60%", "Improve customer retention"],
    caseStudy: "Helped SaaS company increase conversion by 42%"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Analytics",
    description: "Interactive dashboards and predictive analytics that transform raw data into actionable business insights.",
    features: ["Custom Dashboards", "Data Visualization", "Predictive Analytics", "KPI Tracking"],
    technologies: ["Power BI", "Tableau", "Looker", "Python"],
    timeline: "6-14 weeks",
    benefits: ["Real-time insights", "Predictive modeling", "Data-driven decisions"],
    caseStudy: "Improved decision speed by 70%"
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "AI-powered chatbots for customer support, lead generation, and automated interactions across multiple channels.",
    features: ["AI Integration", "Multi-channel", "Natural Language", "24/7 Availability"],
    technologies: ["OpenAI", "Dialogflow", "Rasa", "Custom NLP"],
    timeline: "4-8 weeks",
    benefits: ["80% query resolution", "24/7 support", "Lead qualification"],
    caseStudy: "Reduced support tickets by 65%"
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to help you make informed decisions about your digital transformation journey.",
    features: ["Strategy Planning", "Technology Selection", "Architecture Review", "Best Practices"],
    technologies: ["TOGAF", "ITIL", "Agile", "DevOps"],
    timeline: "Ongoing",
    benefits: ["Expert guidance", "Cost optimization", "Future-proofing"],
    caseStudy: "Saved $1.2M in technology spend"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed through user research, prototyping, and extensive usability testing.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    technologies: ["Figma", "Adobe XD", "InVision", "User Testing"],
    timeline: "3-8 weeks",
    benefits: ["40% better conversion", "Enhanced usability", "Brand consistency"],
    caseStudy: "Increased user engagement by 55%"
  },
];

const stats = [
  { value: "200+", label: "Projects Completed", icon: Rocket },
  { value: "99%", label: "Client Satisfaction", icon: CheckCircle },
  { value: "50M+", label: "Users Served", icon: Users },
  { value: "3x", label: "Average ROI", icon: BarChart }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your business needs, goals, and technical requirements",
    icon: Target
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Create detailed architecture, wireframes, and project roadmap",
    icon: Palette
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous integration and quality assurance",
    icon: Code
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Seamless launch and ongoing maintenance with 24/7 support",
    icon: Server
  }
];

const CALENDLY_URL = "https://calendly.com/changvijay54";

const Services = () => {
  const { handleCalendlyLoaded, triggerCalendlyPopup } = useCalendlyPopup(CALENDLY_URL);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleCalendlyLoaded}
      />
      {/* Enhanced Header */}
      <section className="relative py-28 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade" delay={200}>
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies Worldwide
            </Badge>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={400}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={600}>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              Comprehensive IT solutions designed to transform your business and drive growth. 
              From concept to deployment, we deliver cutting-edge technology solutions that deliver measurable results.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/Contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </NextLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                Our Methodology
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How We Deliver Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven process that ensures your project's success from start to finish
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 150 + 400}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border -z-10"></div>
                    )}
                  </div>
                  <step.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="slide-up" delay={200}>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-semibold">
                What We Offer
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end technology services tailored to your business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 100 + 400}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 hover:-translate-y-4 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.timeline}
                      </Badge>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-foreground mb-3">Expected Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Case Study */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        <Shield className="w-3 h-3 inline mr-1" />
                        {service.caseStudy}
                      </p>
                    </div>                    
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="slide-up" delay={200}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={400}>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let's discuss how our services can drive your digital transformation and deliver measurable results.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={triggerCalendlyPopup}
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;