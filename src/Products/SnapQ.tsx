import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp,Target, LineChart,PieChart,  Activity, Award, Building2, GraduationCap, Heart, Check, Quote, Star } from "lucide-react";



const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Principal, Greenwood High School",
    content: "SnapQ has revolutionized how we track and analyze student performance. The insights we gain help us make better decisions for our students every day.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Mathematics Teacher",
    content: "I save at least 2 hours every week on administrative tasks. The analytics help me identify students who need extra support before they fall behind.",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Emily Chen",
    role: "Parent",
    content: "Being able to track my daughter's progress in real-time gives me peace of mind. The transparency and communication with teachers is outstanding.",
    rating: 5,
    avatar: "EC",
  },
];

const featurescta = [
  "No credit card required",
  "Free 30-day trial",
  "Full access to all features",
  "Cancel anytime",
];

const audiences = [
  {
    icon: Building2,
    title: "For Schools",
    subtitle: "Complete Academic Management",
    benefits: [
      "Centralized data management across all classes",
      "Generate comprehensive performance reports",
      "Track institutional progress over time",
      "Simplified compliance and record-keeping",
    ],
    color: "from-primary to-primary-light",
    iconColor: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "For Teachers",
    subtitle: "Empower Your Teaching",
    benefits: [
      "Quick score entry with bulk upload support",
      "Identify struggling students early",
      "Data-driven lesson planning insights",
      "Reduce administrative workload by 60%",
    ],
    color: "from-secondary to-secondary-light",
    iconColor: "text-secondary",
  },
  {
    icon: Heart,
    title: "For Parents",
    subtitle: "Stay Connected & Informed",
    benefits: [
      "Real-time access to child's performance",
      "Automatic notifications for new scores",
      "Visual progress tracking over time",
      "Direct communication with teachers",
    ],
    color: "from-accent to-accent-light",
    iconColor: "text-accent",
  },
];

const features = [
  {
    icon: PieChart,
    title: "Class Performance Overview",
    description: "Visual dashboards showing overall class trends and distribution",
  },
  {
    icon: BarChart3,
    title: "Individual Progress Tracking",
    description: "Monitor each student's journey with detailed analytics",
  },
  {
    icon: Activity,
    title: "Real-time Score Updates",
    description: "Instant data synchronization across all stakeholders",
  },
  {
    icon: Award,
    title: "Achievement Recognition",
    description: "Celebrate milestones and improvements automatically",
  },
];
const steps = [
  {
    icon: Target,
    title: "Track",
    description: "Capture every assessment, quiz, and test score in real-time. Create a comprehensive academic profile for each student.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: LineChart,
    title: "Analyze",
    description: "Transform raw data into actionable insights. Identify trends, patterns, and areas needing attention with powerful analytics.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Make data-driven decisions to enhance learning outcomes. Share insights with parents and celebrate progress together.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];


const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved By Schools,
            <span className="gradient-text"> Teachers & Parents</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied users who have transformed their educational experience
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="group relative animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card shadow-lg border border-border">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-secondary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed text-base">
                  &quot;{testimonial.content}&quot;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by educational institutions worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            {["500+ Schools", "50k+ Students", "2k+ Teachers", "98% Satisfaction"].map((stat) => (
              <div key={stat} className="font-semibold text-foreground">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative p-12 rounded-3xl bg-primary/95 backdrop-blur-xl text-center space-y-8 shadow-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Ready to Transform Your School&apos;s Analytics?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join 500+ schools already using SnapQ to drive better student outcomes through data-driven insights.
              </p>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6">
              {featurescta.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-white/90">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
              >
                Get Started with SnapQ
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                Schedule a Demo
              </Button>
            </div>
            
            {/* Trust badge */}
            <p className="text-sm text-white/60">
              🔒 Bank-level security • GDPR & FERPA compliant • 24/7 support
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

const ForWho = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            BUILT FOR EVERYONE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            One Platform,
            <span className="gradient-text"> Three Perspectives</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SnapQ connects schools, teachers, and parents in a unified ecosystem of academic excellence
          </p>
        </div>
        
        {/* Audience cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="group relative animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card shadow-lg border border-border overflow-hidden">
                {/* Gradient accent on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.color}`} />
                
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${audience.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <audience.icon className={`w-8 h-8 ${audience.iconColor}`} />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-foreground">{audience.title}</h3>
                <p className="text-base text-muted-foreground mb-6 font-medium">{audience.subtitle}</p>
                
                {/* Benefits list */}
                <ul className="space-y-4 mb-8">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-br ${audience.color} flex-shrink-0`} />
                      <span className="text-base text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Analytics = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            POWERFUL ANALYTICS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Data Visualization That
            <span className="gradient-text"> Drives Decisions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform complex data into clear, actionable insights with our advanced analytics engine
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl bg-card shadow-md hover:shadow-xl hover-lift animate-fade-in border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Sample metrics showcase */}
        <div className="mt-16 p-10 rounded-2xl bg-card shadow-lg max-w-4xl mx-auto border border-border">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-secondary">98%</div>
              <div className="text-sm font-medium text-foreground">Parent Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-accent">35%</div>
              <div className="text-sm font-medium text-foreground">Score Improvement</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">2.5hrs</div>
              <div className="text-sm font-medium text-foreground">Time Saved Weekly</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-secondary">500+</div>
              <div className="text-sm font-medium text-foreground">Schools Trust Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Three Simple Steps to 
            <span className="gradient-text"> Academic Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven methodology transforms how schools understand and improve student performance
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
          
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${step.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 w-full h-1 ${step.bgColor} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-90" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-lighter)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-lighter)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Trusted by 500+ Schools</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                Smart Insights.
                <br />
                <span className="text-secondary drop-shadow-lg">Smarter Classrooms.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-xl font-medium drop-shadow-md">
                Track. Analyze. Improve — Together. Empowering schools with real-time academic intelligence for better student outcomes.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" className="pulse-glow bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Book a Demo
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Try SnapQ Free
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <BarChart3 className="w-6 h-6" />
                  <span className="text-3xl font-bold drop-shadow-md">98%</span>
                </div>
                <p className="text-sm font-medium text-white/80">Data Accuracy</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-6 h-6" />
                  <span className="text-3xl font-bold drop-shadow-md">50k+</span>
                </div>
                <p className="text-sm font-medium text-white/80">Active Users</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-3xl font-bold drop-shadow-md">35%</span>
                </div>
                <p className="text-sm font-medium text-white/80">Avg. Improvement</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Dashboard Placeholder */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="w-full h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl shadow-2xl flex items-center justify-center border border-border">
                <div className="text-center space-y-4">
                  <BarChart3 className="w-16 h-16 mx-auto text-primary" />
                  <p className="text-lg font-semibold text-foreground">SnapQ Analytics Dashboard</p>
                  <p className="text-sm text-muted-foreground">Student performance metrics and insights</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};


const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <HowItWorks />
        <Analytics />
        <ForWho />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
