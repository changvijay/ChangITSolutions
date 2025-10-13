import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, performant applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="group hover:shadow-primary transition-all duration-300 border-border hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tech.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
