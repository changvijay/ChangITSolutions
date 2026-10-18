import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Star, Users, Award, CheckCircle, Globe } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { useEffect, useState, useRef, FormEvent } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GlassCard } from '@/components/GlassCard';
import { Target } from 'lucide-react';
import { Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ShoppingBag,
  GraduationCap,
  Heart,
  Truck,
  DollarSign,
  Building2,
  Database,
  Cloud,
  Brain,
  Smartphone,
  ArrowUpRight,
  Code,
  Palette,
  BarChart3
} from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopup?: () => void;
    };
  }
}

const services = [
  {
    icon: Users,
    title: 'CRM Applications',
    description: 'Streamline customer relationships with intelligent automation and analytics.',
    features: ['Lead Management', 'Sales Analytics', 'Customer Support'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    title: 'Custom Landing Pages',
    description: 'Beautiful, conversion-optimized websites that capture and convert.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'ERP Systems',
    description: 'Integrate all business processes with our comprehensive ERP solutions.',
    features: ['Inventory Management', 'Financial Tracking', 'Reporting'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Scalable cloud infrastructure that grows with your business needs.',
    features: ['Auto Scaling', 'High Availability', 'Security'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'AI & API Integration',
    description: 'Harness the power of AI with seamless API integrations.',
    features: ['Machine Learning', 'Predictive Analytics', 'Automation'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for all devices.',
    features: ['iOS & Android', 'React Native', 'Progressive Web Apps'],
    gradient: 'from-pink-500 to-rose-500'
  }
];

const industries = [
  {
    icon: ShoppingBag,
    name: 'Retail & E-commerce',
    description: 'Digital transformation for modern retail experiences',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Learning management and educational technology solutions',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'HIPAA-compliant systems for healthcare providers',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Truck,
    name: 'Logistics',
    description: 'Supply chain optimization and tracking solutions',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: DollarSign,
    name: 'Finance',
    description: 'Secure financial technology and trading platforms',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Property management and CRM solutions',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  }
];

const stats = [
  { icon: Target, value: '99.9%', label: 'Uptime Guarantee' },
  { icon: Users, value: '100%', label: 'Commitment' },
  { icon: Award, value: '100%', label: 'Reliability' },
  { icon: Zap, value: '2x', label: 'Faster Delivery' }
];

const technologies = [
  { name: 'React', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { name: 'Node.js', color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { name: 'TypeScript', color: 'text-blue-600', bgColor: 'bg-blue-600/10' },
  { name: 'ASP.NET', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { name: 'MySQL', color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
  { name: 'PostgreSQL', color: 'text-blue-700', bgColor: 'bg-blue-700/10' },
  { name: 'Docker', color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
  { name: 'AWS', color: 'text-orange-400', bgColor: 'bg-orange-400/10' },
  { name: 'Azure', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { name: 'Python', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
  { name: 'TensorFlow', color: 'text-orange-600', bgColor: 'bg-orange-600/10' },
  { name: 'MongoDB', color: 'text-green-600', bgColor: 'bg-green-600/10' }
];


const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const heroRef = useRef(null);
  const calendlyIntervalRef = useRef<number | null>(null);
  const calendlyUrl = "https://calendly.com/changvijay54";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (calendlyIntervalRef.current !== null) {
        window.clearInterval(calendlyIntervalRef.current);
        calendlyIntervalRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      setIsCalendlyReady(true);
    }
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const openCalendlyPopup = () => {
    if (typeof window === "undefined" || !window.Calendly?.initPopupWidget) {
      return false;
    }

    window.Calendly.initPopupWidget({ url: calendlyUrl });
    return true;
  };

  const handleScheduleConsultation = () => {
    if (typeof window === "undefined") {
      return;
    }

    if (openCalendlyPopup()) {
      setIsCalendlyReady(true);
      return;
    }

    if (!isCalendlyReady) {
      console.info("Calendly widget is loading; the popup will appear once it's ready.");
    }

    if (calendlyIntervalRef.current !== null) {
      window.clearInterval(calendlyIntervalRef.current);
      calendlyIntervalRef.current = null;
    }

    let attempts = 0;
    const maxAttempts = 10;
    calendlyIntervalRef.current = window.setInterval(() => {
      attempts += 1;
      if (openCalendlyPopup()) {
        setIsCalendlyReady(true);
        if (calendlyIntervalRef.current !== null) {
          window.clearInterval(calendlyIntervalRef.current);
          calendlyIntervalRef.current = null;
        }
      } else if (attempts >= maxAttempts) {
        if (calendlyIntervalRef.current !== null) {
          window.clearInterval(calendlyIntervalRef.current);
          calendlyIntervalRef.current = null;
        }
        console.warn("Calendly widget is still loading. Please try again in a moment.");
      }
    }, 150);
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus('idle');
    setFormError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: (formData.get('firstName') as string)?.trim() ?? '',
      lastName: (formData.get('lastName') as string)?.trim() ?? '',
      email: (formData.get('email') as string)?.trim() ?? '',
      company: (formData.get('company') as string)?.trim() ?? '',
      message: (formData.get('message') as string)?.trim() ?? ''
    };

    if (!payload.firstName || !payload.lastName || !payload.email || !payload.message) {
      setFormError('Please fill in all required fields.');
      setFormStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message ?? 'Failed to send message. Please try again later.');
      }

      setFormError(null);
      setFormStatus('success');
      form.reset();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://changtechs.com/#webpage",
    url: "https://changtechs.com",
    name: "Chang Groups IT Solutions | Custom Software Development Company",
    description:
      "Expert custom software development — CRM systems, ERP platforms, web apps, AI integrations & mobile apps. Free consultation. Trusted by 500+ businesses worldwide.",
    inLanguage: "en-US",
    isPartOf: { "@id": "https://changtechs.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://changtechs.com" }],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://changtechs.com/#website",
    url: "https://changtechs.com",
    name: "Chang Groups IT Solutions",
    description: "Custom software development company — CRM, ERP, web apps, AI & mobile solutions.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://changtechs.com/?s={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Chang Groups IT Solutions | Custom Software Development Company</title>
        <meta
          name="description"
          content="Expert custom software development — CRM systems, ERP platforms, web apps, AI integrations & mobile apps that drive business growth. 500+ companies served. Free consultation."
        />
        <link rel="canonical" href="https://changtechs.com" />
        <meta property="og:url" content="https://changtechs.com" />
        <meta property="og:title" content="Chang Groups IT Solutions | Custom Software Development Company" />
        <meta
          property="og:description"
          content="Expert custom software development — CRM, ERP, web apps, AI integrations & mobile apps. Transform your business. Free consultation."
        />
        <meta name="twitter:title" content="Chang Groups IT Solutions | Custom Software Development Company" />
        <meta
          name="twitter:description"
          content="Expert custom software development — CRM, ERP, web apps, AI integrations & mobile apps. Free consultation."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setIsCalendlyReady(true)}
      />
      {/* Enhanced Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
      >
        {/* Enhanced Animated background with parallax */}
        <div className="absolute inset-0 overflow-hidden" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          {/* Floating particles with varied sizes */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/20 rounded-full animate-float blur-sm"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Enhanced gradient orbs with more variation */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-70" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '3s' }} />

          {/* Interactive mouse follower with glow effect */}
          <div
            className="absolute w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
              transform: `scale(${isHovered ? 2 : 1})`,
              opacity: isHovered ? 0.8 : 0.5
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-glow group hover:bg-white/15 transition-all cursor-pointer hover:scale-105">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
                <Star className="w-4 h-4 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <span className="text-sm font-medium text-white">Trusted by businesses world</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                5.0 ★
              </Badge>
            </div>

            {/* Enhanced Headline */}
            <h1 className="text-3xl sm:text-6xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Transform Your Business with{" "}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-pulse">
                  Innovative
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/50 via-white/80 to-transparent rounded-full animate-pulse" />
              </span>
              {" "}IT Solutions
            </h1>

            {/* Enhanced Subheading */}
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Custom CRM, ERP systems, and cutting-edge web applications designed to{" "}
              <span className="text-white font-semibold relative">
                streamline operations
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/50 animate-pulse" />
              </span> and{" "}
              <span className="text-white font-semibold relative">
                accelerate growth
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </span>
            </p>

            {/* Enhanced CTA Buttons with improved interactions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/Contact">
                <Button
                  size="lg"
                  className="relative bg-white text-primary hover:bg-white/90 shadow-glow hover:scale-110 transition-all duration-300 group px-8 py-4 text-lg font-semibold overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Button>
              </Link>
              <Link href="/Services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold group relative overflow-hidden"
                >
                  <Globe className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with hover effects 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { number: "100+", label: "Projects Delivered", icon: Rocket, color: "text-blue-300", gradient: "from-blue-400 to-cyan-400" },
                { number: "99.8%", label: "Client Satisfaction", icon: Users, color: "text-green-300", gradient: "from-green-400 to-emerald-400" },
                { number: "10+", label: "Years Experience", icon: Award, color: "text-yellow-300", gradient: "from-yellow-400 to-orange-400" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group hover:scale-110 transition-all duration-300 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-3">
                      <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-125 transition-transform duration-300`} />
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>*/}

            {/* Enhanced Trust Indicators 
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12 opacity-70 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { text: "ISO 27001 Certified", icon: Shield },
                { text: "24/7 Support", icon: MessageCircle },
                { text: "99.9% Uptime", icon: Zap }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/60 text-sm group hover:text-white/90 transition-colors cursor-pointer">
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
              Why Choose Chang Groups
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              Excellence Through{" "}
              <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              We deliver transformative solutions that drive real business results through cutting-edge technology and unparalleled expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {[
              {
                icon: Zap,
                title: "Lightning Fast Delivery",
                description: "95% of our projects delivered on schedule with exceptional quality standards and rigorous testing",
                metric: "95%",
                metricLabel: "On-time delivery",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
                features: ["Agile methodology", "Daily updates", "Fast iterations"]
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security measures, compliance standards, and robust infrastructure to protect your critical data",
                metric: "99.9%",
                metricLabel: "Security uptime",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50 dark:bg-green-900/20",
                features: ["ISO certified", "Data encryption", "24/7 monitoring"]
              },
              {
                icon: TrendingUp,
                title: "Proven ROI",
                description: "Average 3x return on investment within the first year through optimized processes and automation",
                metric: "3x",
                metricLabel: "Average ROI",
                color: "from-blue-500 to-purple-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20",
                features: ["Cost savings", "Revenue growth", "Process efficiency"]
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white shadow-4xl group relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-10 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 bg-gradient-to-br ${item.color}`} />

                <CardContent className="p-8 relative z-10">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xs font-bold text-primary">#{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {item.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.metric}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {item.metricLabel}
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </CardContent>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </Card>
            ))}
          </div>

          {/* Enhanced trust elements 
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { label: "Happy Clients", value: "500+", icon: Users, color: "text-blue-500" },
                { label: "Countries Served", value: "25+", icon: Globe, color: "text-green-500" },
                { label: "Team Members", value: "50+", icon: Users, color: "text-purple-500" },
                { label: "Success Rate", value: "98%", icon: TrendingUp, color: "text-orange-500" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer hover:scale-110 transition-all duration-300">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-secondary border-secondary/20 bg-secondary/5"
            >
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              From Concept to <span className="text-gradient">Deployment</span>
            </h2>
            <p
              className="text-base sm:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Our proven methodology ensures successful project delivery through structured phases and continuous collaboration.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="max-w-5xl mx-auto relative">
            {/* Central Line */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-20" />

            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.",
                icon: "🔍",
                duration: "1–2 weeks",
                deliverables: [
                  "Requirements Document",
                  "Project Timeline",
                  "Technical Specifications",
                ],
              },
              {
                step: "02",
                title: "Design & Architecture",
                description:
                  "Our team creates intuitive designs and robust system architecture tailored to your specific needs.",
                icon: "🎨",
                duration: "2–3 weeks",
                deliverables: ["UI/UX Designs", "System Architecture", "Database Design"],
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Agile development with continuous testing ensures high-quality, scalable, and secure solutions.",
                icon: "⚡",
                duration: "4–12 weeks",
                deliverables: [
                  "MVP Development",
                  "Quality Assurance",
                  "Performance Testing",
                ],
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "Seamless deployment with ongoing support and maintenance to ensure optimal performance.",
                icon: "🚀",
                duration: "1 week +",
                deliverables: [
                  "Production Deployment",
                  "Documentation",
                  "24/7 Support",
                ],
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center sm:items-start mb-12 sm:mb-16 animate-fade-up ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div
                  className={`w-full sm:w-5/12 ${index % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:pl-12 sm:text-left"
                    }`}
                >
                  <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-[1.02] bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                        <Badge
                          variant="outline"
                          className="text-primary border-primary/20 bg-primary/5"
                        >
                          {process.duration}
                        </Badge>
                        <span className="text-2xl sm:text-3xl animate-bounce">
                          {process.icon}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {process.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-foreground mb-2">
                          Key Deliverables:
                        </div>
                        {process.deliverables.map((deliverable, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Circle */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-primary rounded-full items-center justify-center shadow-glow z-10 hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>

                {/* Step Indicator for Mobile */}
                <div className="sm:hidden flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full text-white font-semibold mt-6 mb-2">
                  {process.step}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className="text-center mt-12 sm:mt-16 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link href="/Process">
              <Button
                variant="outline"
                size="lg"
                className="group hover:scale-105 transition-all duration-300"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Enhanced Services Section with better animations */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5">
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Comprehensive <span className="text-gradient">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                End-to-end IT services designed to accelerate your digital transformation journey
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                animation="scale"
                delay={index * 100}
              >
                <GlassCard className="group cursor-pointer h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 font-light">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className={`flex items-center font-medium group-hover:translate-x-1 transition-transform bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      Learn More
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-right">
              <div>
                <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5">
                  About Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Innovating the Future of <span className="text-gradient">Technology</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
                  We are a forward-thinking IT solutions company specializing in digital transformation.
                  Our mission is to empower businesses with cutting-edge technology that drives growth,
                  efficiency, and innovation.
                </p>
                <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                  From custom CRM systems to AI-powered analytics, we craft solutions that not only
                  meet today&apos;s needs but anticipate tomorrow&apos;s challenges. Our team of experts combines
                  technical excellence with creative problem-solving to deliver exceptional results.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { text: "Innovation First", icon: Sparkles },
                    { text: "Client Focused", icon: Users },
                    { text: "Results Driven", icon: TrendingUp }
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.text}
                    </span>
                  ))}
                </div>

                <Link href="/About">
                  <Button className="group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <ScrollReveal key={stat.label} animation="scale" delay={index * 100}>
                    <GlassCard className="text-center hover:scale-105 transition-all duration-300 group cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Tech Stack Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-secondary/30 to-background">
        <div className="container mx-auto">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="outline" className="mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-2 text-primary border-primary/20 bg-primary/5 text-sm md:text-base">
                Technology Stack
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-4">
                Powered by <span className="text-gradient">Cutting-Edge Tech</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
                We leverage the latest technologies to build robust, scalable, and future-proof solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <ScrollReveal
                key={tech.name}
                animation="scale"
                delay={index * 50}
              >
                <GlassCard className="text-center group cursor-pointer hover:scale-105 md:hover:scale-110 active:scale-95 transition-all duration-300 relative overflow-hidden p-3 md:p-4 min-h-[80px] md:min-h-[100px] flex items-center justify-center">
                  <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 w-full">
                    <div className={`text-lg md:text-xl lg:text-2xl font-bold mb-2 ${tech.color} group-hover:scale-105 transition-transform`}>
                      {tech.name}
                    </div>
                    <div className={`w-full h-0.5 md:h-1 bg-gradient-to-r from-transparent via-current to-transparent ${tech.color} opacity-30 group-hover:opacity-60 transition-opacity`} />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="slide-up" delay={600}>
            <div className="text-center mt-8 md:mt-12">
              <p className="text-muted-foreground font-light mb-4 text-sm md:text-base px-4">
                And many more technologies tailored to your specific needs
              </p>
              <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
                {[Code, Palette, BarChart3].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 md:w-10 md:h-10 bg-primary/5 rounded-lg flex items-center justify-center hover:bg-primary/10 active:bg-primary/15 transition-colors"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section className="py-20 px-4 bg-gradient-to-bl from-background to-secondary/20">
        <div className="container mx-auto">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5">
                Industries
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Diverse Industry <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Delivering specialized solutions across multiple industry verticals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal
                key={industry.name}
                animation="scale"
                delay={index * 100}
              >
                <GlassCard className="text-center group cursor-pointer hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-current/10`}>
                      <industry.icon className={`h-8 w-8 ${industry.color}`} />
                    </div>

                    <h3 className={`text-xl font-semibold mb-3 group-hover:${industry.color} transition-colors`}>
                      {industry.name}
                    </h3>

                    <p className="text-muted-foreground font-light">
                      {industry.description}
                    </p>

                    <div className={`mt-4 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent ${industry.color} opacity-30 group-hover:opacity-60 transition-opacity`} />
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-blue-500/5">
        <div className="container mx-auto">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20 bg-primary/5">
                Get In Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let&apos;s Build Something <span className="text-gradient">Beautiful Together</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Ready to transform your business? Get in touch with our experts today
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="slide-right">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: Mail, label: "Email", value: "info@changtechs.com", gradient: "from-blue-500 to-cyan-500" },
                    { icon: Phone, label: "Phone", value: "+91 7010747878", gradient: "from-green-500 to-emerald-500" },
                    { icon: MapPin, label: "Office", value: "109, Pillayar Kovil St. · Kalathur · Ranipet · TN 632531", gradient: "from-purple-500 to-pink-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <GlassCard className="p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary mr-3" />
                    <span className="font-semibold">Live Chat Available 24/7</span>
                  </div>
                  <p className="text-muted-foreground font-light mb-4">
                    Our team is available around the clock to answer your questions and provide support.
                  </p>
                  <Button
                    asChild
                    className="w-full glass bg-primary/90 hover:bg-primary group"
                  >
                    <Link
                      href="https://wa.me/917010747878"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Live Chat
                      <MessageCircle className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Link>
                  </Button>
                </GlassCard>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <GlassCard className="hover:shadow-glow transition-all duration-500">
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        autoComplete="given-name"
                        className="glass bg-white/40 border-white/30 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        autoComplete="family-name"
                        className="glass bg-white/40 border-white/30 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      autoComplete="email"
                      className="glass bg-white/40 border-white/30 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      autoComplete="organization"
                      className="glass bg-white/40 border-white/30 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="glass bg-white/40 border-white/30 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass bg-primary/90 hover:bg-primary text-primary-foreground py-6 text-lg font-medium rounded-2xl backdrop-blur-md border border-white/20 transition-spring group hover:scale-105 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Start Your Digital Journey'}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>

                  {formStatus === 'success' && (
                    <p className="text-sm text-green-500 text-center" role="status" aria-live="polite">
                      Thanks! We received your message and will reply shortly.
                    </p>
                  )}

                  {formStatus === 'error' && (
                    <p className="text-sm text-red-500 text-center" role="alert" aria-live="assertive">
                      {formError ?? 'Something went wrong. Please try again.'}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-6 py-3 text-white border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                🚀 Ready to Transform Your Business?
              </Badge>

              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-up leading-tight">
                Let&apos;s Build Something{" "}
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 animate-pulse">
                    Amazing
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full animate-pulse" />
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
                Join 100+ businesses that have transformed their operations with our cutting-edge solutions.
                Your success story starts with a simple conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <Button
                  size="lg"
                  onClick={handleScheduleConsultation}
                  className="relative bg-white text-primary hover:bg-white/90 shadow-glow hover:scale-110 transition-all duration-300 group px-10 py-5 text-lg font-bold overflow-hidden"
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <Link href="/Services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300 px-10 py-5 text-lg font-semibold group"
                  >
                    <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                {
                  icon: "💬",
                  title: "Free Consultation",
                  description: "30-minute strategy session to discuss your project",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "⚡",
                  title: "Quick Response",
                  description: "Get detailed proposal within 24-48 hours",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: "🎯",
                  title: "Custom Solutions",
                  description: "Tailored approach for your specific business needs",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { text: "No Long-term Contracts", icon: CheckCircle },
                { text: "Money-back Guarantee", icon: Shield },
                { text: "Expert Team", icon: Users },
                { text: "24/7 Support", icon: MessageCircle }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/70 hover:text-white/90 transition-colors group cursor-pointer">
                  <item.icon className="w-5 h-5 text-green-300 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;