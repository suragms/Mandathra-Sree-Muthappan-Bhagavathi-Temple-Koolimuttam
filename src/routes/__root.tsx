import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Footer } from "@/components/temple/Footer";
import { Navbar } from "@/components/temple/Navbar";
import { media, temple } from "@/lib/temple-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-temple-red">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-maroon px-5 py-3 text-sm font-bold text-white"
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page did not load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full gradient-maroon px-5 py-3 text-sm font-bold text-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-gold px-5 py-3 text-sm font-bold text-temple-red"
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
      { title: `${temple.nameMl} | Kerala Temple` },
      {
        name: "description",
        content:
          "Mandathra Sree Muthappan Bhagavathi Temple Committee, Reg No 603/99, P.O. Koolimuttam 680691. Kerala temple festivals, Bhagavathi Pooja, gallery, contact, and donation details.",
      },
      { name: "author", content: temple.nameEn },
      {
        name: "keywords",
        content:
          "Mandathra Sree Muthappan Bhagavathi Temple, Mandathra Kshethram, Koolimuttam temple, Kerala temple, Muthappan temple, Bhagavathi Pooja, temple committee 603/99",
      },
      { property: "og:title", content: temple.nameEn },
      {
        property: "og:description",
        content: "A premium devotional Kerala temple website for devotees and the Mandathra temple committee.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mandathra Temple" },
      { property: "og:image", content: media.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: media.hero },
      { name: "theme-color", content: "#8B0000" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/logo-mobile.webp" },
      { rel: "preload", as: "image", href: media.hero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PlaceOfWorship",
          name: temple.nameEn,
          alternateName: temple.nameMl,
          image: media.hero,
          telephone: temple.phoneSecretary,
          email: temple.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: temple.addressMl,
            addressLocality: "Koolimuttam",
            addressRegion: "Kerala",
            postalCode: "680691",
            addressCountry: "IN",
          },
          description:
            "Traditional Kerala temple committee devoted to Sree Muthappan and Bhagavathi at P.O. Koolimuttam.",
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
    <html lang="ml-IN">
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
