import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/ScrollReveal";
import NextLink from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useCalendlyPopup } from "@/hooks/useCalendlyPopup";
import {
  Mail,
  Phone,
  Send,
  Clock,
  Globe,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Heart,
  Award,
  Headphones
} from "lucide-react";

const Contact = () => {
  const CALENDLY_URL = "https://calendly.com/changvijay54";
  const { handleCalendlyLoaded, triggerCalendlyPopup } = useCalendlyPopup(CALENDLY_URL);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");
    setFormError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: (formData.get("firstName") as string)?.trim() ?? "",
      lastName: (formData.get("lastName") as string)?.trim() ?? "",
      email: (formData.get("email") as string)?.trim() ?? "",
      company: (formData.get("company") as string)?.trim() ?? "",
      message: (formData.get("message") as string)?.trim() ?? ""
    };

    if (!payload.firstName || !payload.lastName || !payload.email || !payload.message) {
      setFormError("Please fill in all required fields.");
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message ?? "Failed to send message. Please try again later.");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "We respond within 2 hours",
      contact: "info@changtechs.com",
      link: "mailto:info@changtechs.com",
      type: "link" as const
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      details: "Quick direct communication",
      contact: "+91 7010747878",
      link: "tel:+917010747878",
      type: "link" as const
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "24/7 instant messaging",
      details: "Fast responses via chat",
      contact: "+91 7010747878",
      link: "https://wa.me/917010747878",
      type: "link" as const
    },
    {
      icon: Calendar,
      title: "Book a Meeting",
      description: "Schedule a consultation",
      details: "30-min free consultation",
      contact: "Schedule Now",
      link: undefined,
      type: "calendly" as const
    }
  ];

  // const officeLocations = [
  //   {
  //     city: "Head Office",
  //     address: "123 Tech Park, Innovation Road",
  //     area: "Silicon Valley, CA 94025",
  //     phone: "+1 (555) 123-4567",
  //     hours: "Mon-Fri: 9:00 AM - 6:00 PM"
  //   },
  //   {
  //     city: "Development Center",
  //     address: "456 IT Hub, Digital Street",
  //     area: "Bangalore, KA 560001",
  //     phone: "+91 80 1234 5678",
  //     hours: "Mon-Sat: 9:00 AM - 7:00 PM"
  //   }
  // ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your project requirements and goals"
    },
    {
      step: "02",
      title: "Project Analysis",
      description: "Our experts analyze and provide recommendations"
    },
    {
      step: "03",
      title: "Proposal & Planning",
      description: "We create a detailed project proposal and timeline"
    },
    {
      step: "04",
      title: "Kick-off & Development",
      description: "We start the project with regular updates"
    }
  ];

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://changtechs.com/Contact#webpage",
    url: "https://changtechs.com/Contact",
    name: "Contact Chang Groups | Get a Free Custom Software Consultation",
    description:
      "Contact Chang Groups IT Solutions for a free consultation on custom software development — CRM, ERP, web applications, AI integration, and mobile apps.",
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://changtechs.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://changtechs.com/Contact" },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      name: "Chang Groups IT Solutions",
      url: "https://changtechs.com",
      email: "info@changtechs.com",
      telephone: "+91-7010747878",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7010747878",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: "English",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Contact Chang Groups | Get a Free Custom Software Consultation</title>
        <meta
          name="description"
          content="Get a free consultation with Chang Groups IT Solutions. We build custom CRM, ERP, web applications, AI integrations & mobile apps. Call +91 7010747878 or email info@changtechs.com."
        />
        <link rel="canonical" href="https://changtechs.com/Contact" />
        <meta property="og:url" content="https://changtechs.com/Contact" />
        <meta property="og:title" content="Contact Chang Groups | Get a Free Custom Software Consultation" />
        <meta
          property="og:description"
          content="Get a free consultation. Custom CRM, ERP, web apps, AI integrations & mobile apps. Reach us at info@changtechs.com or +91 7010747878."
        />
        <meta name="twitter:title" content="Contact Chang Groups | Free Custom Software Consultation" />
        <meta
          name="twitter:description"
          content="Free consultation for custom CRM, ERP, web apps & AI integrations. Email info@changtechs.com or call +91 7010747878."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleCalendlyLoaded}
      />
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-md animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Trusted by 500+ Clients Worldwide</span>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Let&apos;s Build
            <span className="block text-gradient bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your vision into reality with our expert team. From concept to deployment,
            we&apos;re here to make your digital dreams come true.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <NextLink href="/Services">
              <Button size="lg" className="group bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NextLink>
            <Button size="lg" variant="outline" className="group border-white/30 text-primary hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 7010747878
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "100% Secure", desc: "NDA & Data Protection" },
              { icon: Zap, title: "24-48 Hours", desc: "Guaranteed Response" },
              { icon: Award, title: "Expert Team", desc: "Certified Professionals" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="glass-card text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Contact Methods */}
      <section className="py-20 bg-gradient-subtle border-b relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary mb-6">
                <Headphones className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">24/7 Support Available</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Multiple Ways to
                <span className="text-gradient"> Connect</span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                Choose the communication method that works best for you. Our team is ready to help you succeed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 150}>
                <Card className="group interactive-card hover:shadow-glow transition-all duration-500 border-border hover:border-primary/50 hover:-translate-y-2 text-center h-full">
                  <CardContent className="p-8 relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-primary">
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">{method.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{method.description}</p>
                      <div className="bg-primary/5 rounded-lg p-3 mb-6">
                        <p className="text-sm text-primary font-semibold">{method.details}</p>
                      </div>
                      {method.type === "calendly" ? (
                        <button
                          type="button"
                          onClick={triggerCalendlyPopup}
                          className="group/link inline-flex items-center text-foreground hover:text-primary transition-all duration-300 font-medium"
                        >
                          <span className="border-b border-transparent group-hover/link:border-primary transition-all">
                            {method.contact}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </button>
                      ) : (
                        <a
                          href={method.link}
                          className="group/link inline-flex items-center text-foreground hover:text-primary transition-all duration-300 font-medium"
                        >
                          <span className="border-b border-transparent group-hover/link:border-primary transition-all">
                            {method.contact}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats Row
          <ScrollReveal animation="slide-up" delay={600}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Happy Clients", icon: Heart },
                { number: "2-4hrs", label: "Response Time", icon: Clock },
                { number: "15+", label: "Countries Served", icon: Globe },
                { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
           */}
        </div>
      </section>

      {/* Enhanced Contact Form & Info */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal animation="slide-left">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary mb-6">
                    <Send className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Get Your Free Quote</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    Start Your
                    <span className="text-gradient"> Project</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Fill out the form below and our solution experts will get back to you within 24 hours with a comprehensive proposal.
                  </p>
                </div>

                <Card className="border-border hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-10 relative z-10">
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
                        {isSubmitting ? "Sending..." : "Start Your Digital Journey"}
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>

                      {formStatus === "success" && (
                        <p className="text-sm text-green-500 text-center" role="status" aria-live="polite">
                          Thanks! We received your message and will reply shortly.
                        </p>
                      )}

                      {formStatus === "error" && (
                        <p className="text-sm text-red-500 text-center" role="alert" aria-live="assertive">
                          {formError ?? "Something went wrong. Please try again."}
                        </p>
                      )}

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            {/* Enhanced Contact Info & Process */}
            <ScrollReveal animation="slide-right">
              <div className="space-y-12">
                {/* Contact Information */}
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 text-secondary mb-6">
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Global Support Team</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                    Contact
                    <span className="text-gradient"> Information</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    We&apos;re here to help you achieve your digital goals. Our expert team is available across multiple time zones to provide you with the best support.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Support",
                      details: "info@changtechs.com",
                      description: "General inquiries and project discussions",
                      link: "mailto:info@changtechs.com",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: Phone,
                      title: "Phone Support",
                      details: "+91 7010747878",
                      description: "Mon-Fri: 9:00 AM - 6:00 PM IST",
                      link: "tel:+917010747878",
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: MessageCircle,
                      title: "WhatsApp Chat",
                      details: "Instant Messaging",
                      description: "24/7 quick responses and support",
                      link: "https://wa.me/917010747878",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      details: "Monday - Saturday",
                      description: "Extended hours for global clients",
                      link: "#",
                      color: "from-orange-500 to-red-500"
                    }
                  ].map((item, index) => (
                    <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
                      <Card className="group interactive-card hover:shadow-glow transition-all duration-500 border-border hover:border-primary/50">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                              <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                              <p className="text-foreground font-semibold mb-2">{item.details}</p>
                              <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                              {item.link !== "#" && (
                                <a
                                  href={item.link}
                                  className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors group/link"
                                >
                                  <span>Contact now</span>
                                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary mb-6">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Proven Methodology</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                Our
                <span className="text-gradient"> Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From initial contact to project delivery, we follow a structured approach that ensures
                quality, transparency, and client satisfaction at every step.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} animation="slide-up" delay={index * 200}>
                  <div className="text-center group relative">
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 -z-10">
                        <div className="w-0 h-full bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-1000 ease-out"></div>
                      </div>
                    )}

                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                        <span className="text-white font-bold text-2xl">{step.step}</span>
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Hover Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Process Benefits */}
            <ScrollReveal animation="slide-up" delay={800}>
              <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-12 border border-border/50">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Why Our Process Works
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Our systematic approach ensures project success and client satisfaction
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Transparent Communication",
                      description: "Regular updates and clear milestones throughout the project"
                    },
                    {
                      icon: Zap,
                      title: "Agile Development",
                      description: "Flexible approach that adapts to your changing needs"
                    },
                    {
                      icon: Award,
                      title: "Quality Assurance",
                      description: "Rigorous testing and quality checks at every stage"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-foreground mb-3 text-lg">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-md animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="slide-up">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white mb-8">
                <Star className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="font-medium">Join 500+ Satisfied Clients</span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Ready to Start Your
                <span className="block text-gradient bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Digital Journey?
                </span>
              </h2>

              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Let&apos;s transform your vision into reality. Get a free consultation and project estimate from our expert team.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button size="lg" className="group bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow h-16 px-8">
                  <Phone className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Call Now</div>
                    <div className="text-sm opacity-80">+91 7010747878</div>
                  </div>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group border-white/30 text-primary hover:bg-white/10 hover:scale-105 transition-all duration-300 h-16 px-8"
                  onClick={triggerCalendlyPopup}
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="text-lg font-bold">Schedule a Meeting</div>
                    <div className="text-sm opacity-80">Pick a time that works</div>
                  </div>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {[
                  { icon: Shield, label: "100% Secure", value: "SSL Protected" },
                  { icon: Clock, label: "Fast Response", value: "24-48 Hours" },
                  { icon: Award, label: "Certified Team", value: "Expert Developers" },
                  { icon: Heart, label: "Client Satisfaction", value: "99.8% Rating" }
                ].map((item, index) => (
                  <div key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                    <div className="text-xs text-white/80">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Contact;