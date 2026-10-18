import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";

export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-primary mb-4">500</h1>
        <h2 className="text-2xl font-bold mb-3">Internal Server Error</h2>
        <p className="text-muted-foreground mb-8">
          Something unexpected happened on our server. Please try again shortly.
        </p>
        <Link href="/">
          <Button size="lg">
            <HomeIcon className="mr-2 w-4 h-4" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
