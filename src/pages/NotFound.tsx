import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl sm:text-9xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300"
        >
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
