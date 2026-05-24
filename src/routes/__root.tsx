import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/temple/Navbar";
import { Footer } from "@/components/temple/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mandathra Sree Muthappan Bhagavathi Temple | Thrissur, Kerala" },
      {
        name: "description",
        content:
          "Mandathra Sree Muthappan Bhagavathi Temple — a sacred Madappura in Thrissur, Kerala. Witness Muthappan Theyyam, traditional rituals, and the divine presence.",
      },
      { name: "author", content: "Mandathra Sree Muthappan Bhagavathi Temple" },
      {
        name: "keywords",
        content:
          "Mandathra Muthappan Temple, Muthappan Temple Thrissur, Kerala Muthappan Madappura, Muthappan Theyyam, Bhagavathi Temple Kerala",
      },
      { property: "og:title", content: "Mandathra Sree Muthappan Bhagavathi Temple" },
      {
        property: "og:description",
        content: "Where Devotion Meets Divine Presence — A sacred Kerala Madappura.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mandathra Temple" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B0A07" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PlaceOfWorship",
          name: "Mandathra Sree Muthappan Bhagavathi Temple",
          alternateName: "മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mandathra",
            addressRegion: "Thrissur, Kerala",
            addressCountry: "IN",
          },
          description:
            "Traditional Kerala Muthappan Madappura temple in Thrissur district devoted to Sree Muthappan and Bhagavathi.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
