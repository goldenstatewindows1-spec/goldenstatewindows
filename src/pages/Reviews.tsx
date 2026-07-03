import { Link } from "react-router-dom";
import { ArrowRight, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Seo } from "@/components/site/Seo";
import { breadcrumbLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

// Video testimonials shown on this page. Add a new entry HERE: `src` is the
// embed URL (for Facebook: the plugins/video.php link from the video's Embed
// option). Keep titles factual — no invented names or cities.
const videoReviews = [
  {
    id: "fb-1539893382938311",
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100080430490204%2Fvideos%2F1539893382938311%2F&show_text=false&width=560&t=0",
    title: "Client video review — Golden State Windows",
  },
];

const VideoCard = ({ src, title }: { src: string; title: string }) => (
  <figure className="group">
    <div className="aspect-video bg-surface border border-white/5 overflow-hidden">
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowFullScreen
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
    <figcaption className="mt-4 flex items-center gap-3">
      <span className="size-2 bg-primary rounded-full shrink-0" />
      <span className="text-sm text-muted-foreground">{title}</span>
    </figcaption>
  </figure>
);

const ReviewsPage = () => {
  const [featured, ...rest] = videoReviews;

  return (
    <>
      <Seo
        title="Client Reviews & Video Testimonials | Golden State Windows"
        description={`Watch real Golden State Windows clients share their experience — and read ${SITE.reviewCount} written reviews (${SITE.rating}★) on ${SITE.reviewPlatform}. Bay Area window replacement since ${SITE.foundedYear}.`}
        path="/reviews"
        jsonLd={breadcrumbLd("Reviews", "/reviews")}
      />
      <PageHeader
        eyebrow="Reviews"
        index="CLIENT RECORD"
        title={<>Real clients. Real <span className="italic font-normal text-primary">results</span>.</>}
        description={`Hear directly from Bay Area homeowners — and see why ${SITE.name} holds a ${SITE.rating}-star rating across ${SITE.reviewCount} ${SITE.reviewPlatform} reviews, the highest of any Bay Area window company.`}
      />

      {/* Video testimonials */}
      <section className="container-tight py-14">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Video Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
            In their own words.
          </h2>
        </div>

        {featured && (
          <div className="max-w-4xl mx-auto">
            <VideoCard src={featured.src} title={featured.title} />
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {rest.map((v) => (
              <VideoCard key={v.id} src={v.src} title={v.title} />
            ))}
          </div>
        )}
      </section>

      {/* Written reviews on Yelp */}
      <section className="bg-surface/40 border-y border-white/5">
        <div className="container-tight py-14 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="eyebrow">Written Reviews</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-balance">
              {SITE.reviewCount} more reviews live on {SITE.reviewPlatform}.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every rating we quote is real and verifiable. Read what {SITE.reviewCount} Bay Area
              homeowners wrote about their window, siding, and door projects — unedited, on{" "}
              {SITE.reviewPlatform}.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer">
                Read Reviews on {SITE.reviewPlatform} <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="lg:pl-12 lg:border-l border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl font-light tracking-tighter text-primary">{SITE.rating}</div>
              <div>
                <div className="flex gap-1 text-primary mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary" />
                  ))}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {SITE.reviewCount} {SITE.reviewPlatform} reviews
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Highest Yelp rating of any Bay Area window company",
                `Over ${SITE.homesServedLabel} homes serviced since ${SITE.foundedYear}`,
                "Full lifetime warranty on every window",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check className="size-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-14">
        <div className="bg-surface/40 border border-white/5 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <span className="eyebrow">Your Project</span>
            <p className="mt-4 text-2xl md:text-3xl font-light tracking-tight text-balance">
              Join {SITE.homesServedLabel} Bay Area homeowners. Start with a free consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button asChild size="lg">
              <Link to="/contact">Request a Free Quote <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
