import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const CookieBanner = ({ onAccept, onDecline }: CookieBannerProps) => {
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 md:inset-x-auto md:left-6 md:bottom-6 md:max-w-sm animate-fade-up"
    >
      <div className="m-3 md:m-0 rounded-xl border border-white/10 bg-surface shadow-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="size-9 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
            <Cookie className="size-4" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to run this site and understand how it's used. See our{" "}
            <Link to="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 flex gap-3">
          <Button size="sm" className="flex-1" onClick={onAccept}>
            Accept
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={onDecline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};
