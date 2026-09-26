import type { Metadata } from "next";
import WallpaperDownloader from "@/components/WallpaperDownloader";
import { SiteFooter, SiteHeader, RelatedTools } from "@/components/SiteChrome";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Pure Black Wallpaper #000000 — Free HD Download for iPhone & AMOLED",
  description:
    "Download a true #000000 pure black wallpaper for iPhone, Android AMOLED and desktop. Exact-resolution pitch-black PNGs — free, no watermark, saves OLED battery.",
  keywords: [
    "black wallpaper",
    "pure black wallpaper",
    "pitch black wallpaper",
    "black wallpaper iphone",
    "amoled wallpaper",
    "true black wallpaper",
    "black background",
    "black desktop wallpaper",
    "#000000 wallpaper",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      de: "/de",
    },
  },
  openGraph: {
    url: "/",
    siteName: SITE_NAME,
    title:
      "Pure Black Wallpaper #000000 — Free HD Download for iPhone & AMOLED",
    description:
      "True #000000 pitch-black PNG wallpapers at exact iPhone, Android AMOLED and desktop resolutions. Free, no watermark, saves OLED battery.",
  },
};

const USE_CASES = [
  {
    title: "Dead pixel test",
    body: "Full-screen #000000 reveals stuck or dead pixels and backlight bleed on any monitor or phone.",
  },
  {
    title: "OLED battery saving",
    body: "On AMOLED screens black pixels are fully off, cutting display power to almost zero.",
  },
  {
    title: "Burn-in protection",
    body: "A static pure-black lock or home screen gives self-emissive OLED pixels a rest.",
  },
  {
    title: "Minimal dark-mode setup",
    body: "App icons and widgets pop against true black, for a clean monochrome home screen.",
  },
  {
    title: "Easier on the eyes at night",
    body: "Zero emitted light means less glare in dark rooms, especially on OLED phones.",
  },
  {
    title: "Projector & display calibration",
    body: "Use the black field to check uniformity, focus and light bleed in a dark room.",
  },
  {
    title: "Editing & design base",
    body: "A neutral zero-luminance background for contrast grading, slides and posters.",
  },
  {
    title: "Focus & relaxation",
    body: "A blank black screen doubles as a distraction-free timer, clock or meditation aid.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Pure Black Wallpaper",
        url: SITE_URL,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS, Android, Windows, macOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Free true #000000 pure black wallpaper generator. Download pitch-black PNGs at exact iPhone, Android AMOLED and desktop resolutions.",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader active="/" />

      <main id="top" className="flex-1">
        {/* Hero — primary intent: pure / pitch black wallpaper download */}
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-black ring-1 ring-zinc-600" />
            True black · #000000 · Free PNG download
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Pure Black Wallpaper for iPhone, AMOLED &amp; Desktop
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Download a pitch-black <strong className="text-zinc-200">#000000</strong>{" "}
            wallpaper at your screen&apos;s exact resolution. No watermark, no
            sign-up — generated instantly in your browser. On OLED displays the
            black pixels switch off completely to save battery.
          </p>

          <div className="mt-8">
            <WallpaperDownloader />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <span>Free forever</span>
            <span aria-hidden>·</span>
            <span>No watermark</span>
            <span aria-hidden>·</span>
            <span>No account needed</span>
            <span aria-hidden>·</span>
            <span>Works offline after download</span>
          </div>
        </section>

        {/* iPhone keyword cluster */}
        <section
          id="iphone"
          className="border-t border-zinc-900 bg-zinc-950/40"
        >
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Black Wallpaper for iPhone — Every Model, Exact Fit
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Each iPhone preset above matches the native point resolution of a
              real device, from iPhone 16 Pro Max (1320 × 2868) down to the XS
              Max generation, so the image fills the screen edge to edge with
              no zooming, cropping, or compression. It is a single flat{" "}
              <span className="font-mono text-sm text-zinc-300">#000000</span>{" "}
              field — the only true black an OLED iPhone can render.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-white">
              How to set it on iPhone in 3 steps
            </h3>
            <ol className="mt-4 space-y-3">
              {[
                "Pick your model above and tap Download — or, if iOS opens the image, long-press it and choose “Save to Photos”.",
                "Open Photos → tap the image → Share → “Use as Wallpaper” (or Settings → Wallpaper → Add New Wallpaper).",
                "Turn off Perspective Zoom for the purest black, tap Add, and apply it to the Lock Screen, Home Screen, or both.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-zinc-500">
              Note: iPhone X and later use OLED panels where black saves
              battery; older LCD models (iPhone SE, 11, XR) render black with
              the backlight on, so the benefit there is purely visual.
            </p>
          </div>
        </section>

        {/* AMOLED keyword cluster */}
        <section id="amoled" className="border-t border-zinc-900">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              AMOLED Black Wallpaper — True #000000, Zero Pixel Power
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              AMOLED and OLED screens are{" "}
              <em className="text-zinc-300">self-emissive</em>: every pixel
              makes its own light instead of sharing a backlight. When a pixel
              receives{" "}
              <span className="font-mono text-sm text-zinc-300">#000000</span>,
              it switches off entirely and draws almost no power. A dark grey
              like #1B1B1B looks similar but the pixel stays lit — which is why
              an &ldquo;amoled wallpaper&rdquo; has to be genuinely black, and
              why every file here is strict RGB 0,0,0.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 p-5">
                <p className="text-sm font-semibold text-white">
                  Longer battery life
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Pair a black wallpaper with system dark mode and always-on
                  displays for the biggest savings.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 p-5">
                <p className="text-sm font-semibold text-white">
                  Less burn-in risk
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Pure-black areas rest the organic pixels instead of driving a
                  static grey tone all day.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 p-5">
                <p className="text-sm font-semibold text-white">
                  Icons stand out
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  A zero-light background makes colourful icon packs and
                  widgets feel sharper and more premium.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-zinc-500">
              Android presets include 1440 × 3120 (QHD+ flagships) and
              1080 × 2400 (the most common FHD+ resolution) — pick the
              Android / AMOLED tab above.
            </p>
          </div>
        </section>

        {/* Desktop keyword cluster */}
        <section
          id="desktop"
          className="border-t border-zinc-900 bg-zinc-950/40"
        >
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Black Desktop Wallpaper in Full HD, 1440p and 4K
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Download a 1920 × 1080, 2560 × 1440 or 3840 × 2160 black desktop
              wallpaper for Windows, macOS or Linux. It is the fastest way to
              check a new monitor for backlight bleed and dead pixels, and a
              flat black background keeps a dual-monitor setup looking clean in
              dark rooms. Right-click the saved PNG and choose &ldquo;Set as
              desktop background&rdquo; — or use the custom-size box for
              ultrawide and multi-monitor resolutions.
            </p>
          </div>
        </section>

        {/* Use cases */}
        <section id="uses" className="border-t border-zinc-900">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What People Use a Pure Black Background For
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {USE_CASES.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {useCase.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {useCase.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — troubleshooting intent cluster */}
        <section
          id="faq"
          className="border-t border-zinc-900 bg-zinc-950/40"
        >
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800 bg-black/50">
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden
                      className="text-zinc-500 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-zinc-900">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Get your pure black wallpaper now
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500">
              Choose your device above — the #000000 PNG is free, takes seconds
              to generate, and works on iPhone, Android, AMOLED and desktop.
            </p>
            <a
              href="#top"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Back to download
            </a>
          </div>
        </section>
        <RelatedTools current="/" />
      </main>

      <SiteFooter />
    </>
  );
}
