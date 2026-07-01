import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/site/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page Not Found | Golden State Windows"
        description="The page you're looking for doesn't exist. Return to Golden State Windows — Bay Area window replacement and siding."
        path="/404"
        noindex
      />
      <section className="container-tight min-h-[70vh] flex items-center">
      <div className="max-w-xl">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-4 text-6xl md:text-7xl font-light tracking-tighter">Page not found.</h1>
        <p className="mt-6 text-muted-foreground">
          The page you're looking for has been moved or doesn't exist. Let's get you back on track.
        </p>
        <div className="mt-10">
          <Button asChild size="lg"><Link to="/">Return Home</Link></Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default NotFound;

