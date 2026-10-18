import { NextPageContext } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-primary mb-4">
          {statusCode || 500}
        </h1>
        <h2 className="text-2xl font-bold mb-3">
          {statusCode === 404
            ? "Page Not Found"
            : "Something Went Wrong"}
        </h2>
        <p className="text-muted-foreground mb-8">
          {statusCode
            ? `An error ${statusCode} occurred on the server.`
            : "An unexpected error occurred on the client."}
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
