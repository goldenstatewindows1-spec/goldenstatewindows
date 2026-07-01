import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/** Route-level error boundary: renders a branded fallback instead of a blank page. */
export const RouteError = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : undefined;

  return (
    <section className="container-tight min-h-[70vh] flex items-center">
      <div className="max-w-xl">
        <span className="eyebrow">{status ? `Error ${status}` : "Something went wrong"}</span>
        <h1 className="mt-4 text-5xl md:text-6xl font-light tracking-tighter">
          We hit an unexpected error.
        </h1>
        <p className="mt-6 text-muted-foreground">
          Please try again, or head back to the homepage. If the problem persists, give us a call.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg"><Link to="/">Return Home</Link></Button>
          <Button asChild variant="outline" size="lg"><a href={SITE.phoneHref}>Call Us</a></Button>
        </div>
      </div>
    </section>
  );
};
