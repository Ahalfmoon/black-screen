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
    "black vs white screen",
    "OLED power consumption by color",
    "red screen test",
    "blue screen test",
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
    title: "Screen testing",
    body: "Detect dead or stuck pixels, check brightness uniformity and calibrate any monitor, phone or TV.",
  },
  {
    title: "Professional presentations",
    body: "A neutral black field during projections and video calls cuts distractions and hides desktop clutter.",
  },
  {
    title: "Meditation & focus",
    body: "In a dark room a blank black screen works as a visual aid for relaxation, breathing and focus drills.",
  },
  {
    title: "Video & photo editing",
    body: "A zero-luminance base template for color grading, contrast checks and letterboxing creative work.",
  },
  {
    title: "OLED / AMOLED energy saving",
    body: "Self-emissive black pixels switch off completely, so dark screens measurably lower battery drain.",
  },
  {
    title: "Projector calibration",
    body: "Adjust sharpness, focus and color in a theatre or classroom, and spot light bleed on the lens path.",
  },
  {
    title: "Education & science demos",
    body: "Demonstrate color theory, additive light and optics principles — black is the absence of emitted light.",
  },
  {
    title: "Burn-in protection",
    body: "A static pure-black lock or home screen gives hard-working OLED pixels a genuine rest.",
  },
  {
    title: "Minimal dark-mode setup",
    body: "Icons and widgets pop against true #000000, and zero emitted light is easier on the eyes at night.",
  },
];

// Relative display-power index for a full-screen solid color on an OLED panel
// (white = 100). Illustrative values synthesized from published OLED power
// measurements; actual draw varies by panel generation, brightness and ABL.
const OLED_POWER = [
  { color: "#000000", label: "Pure black #000000", value: 5, note: "pixels off" },
  { color: "#ef4444", label: "Red #FF0000", value: 40 },
  { color: "#22c55e", label: "Green #00FF00", value: 50 },
  { color: "#3b82f6", label: "Blue #0000FF", value: 58 },
  { color: "#ffffff", label: "White #FFFFFF", value: 100, note: "all subpixels on" },
];

const COLOR_SCREENS = [
  {
    name: "White screen",
    hex: "#ffffff",
    uses: "Photography backdrop, maximum-brightness test, lightbox, spotting dust on the sensor.",
    href: "/white-screen",
  },
  {
    name: "Blue screen",
    hex: "#1d4ed8",
    uses: "Revealing LCD backlight bleed and panel glow; AMOLED power comparisons; blue-channel checks.",
  },
  {
    name: "Black screen",
    hex: "#000000",
    uses: "Dead & stuck pixel test, OLED battery saving, burn-in rest, less eye fatigue in the dark.",
    href: "/black-screen",
  },
  {
    name: "Red screen",
    hex: "#dc2626",
    uses: "Night use without harsh blue light, sleep-friendly viewing, red-channel color calibration.",
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
            {/* OLED power-by-color comparison */}
            <h3 className="mt-10 text-lg font-semibold text-white">
              OLED power use by screen color
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Relative display-power index for a full-screen solid color, white
              = 100, measured at a fixed brightness on a typical OLED panel.
              Black draws almost nothing because the pixels are off — every
              lit color, including dark-looking ones, costs substantially more.
            </p>
            <div className="mt-6 space-y-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 sm:p-6">
              {OLED_POWER.map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="h-4 w-4 shrink-0 rounded-sm ring-1 ring-zinc-700"
                    style={{ backgroundColor: row.color }}
                  />
                  <span className="w-40 shrink-0 text-xs font-medium text-zinc-300 sm:text-sm">
                    {row.label}
                  </span>
                  <span className="relative h-5 flex-1 overflow-hidden rounded bg-zinc-900">
                    <span
                      className="absolute inset-y-0 left-0 rounded bg-gradient-to-r from-zinc-600 to-zinc-300"
                      style={{ width: `${Math.max(row.value, 3)}%` }}
                    />
                  </span>
                  <span className="w-20 shrink-0 text-right text-xs tabular-nums text-zinc-400 sm:text-sm">
                    {row.value}
                    {row.note ? (
                      <span className="block text-[10px] text-zinc-600">
                        {row.note}
                      </span>
                    ) : null}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 border-t border-zinc-800 pt-3">
                <span
                  aria-hidden
                  className="h-4 w-4 shrink-0 rounded-sm bg-zinc-400 ring-1 ring-zinc-700"
                />
                <span className="w-40 shrink-0 text-xs font-medium text-zinc-300 sm:text-sm">
                  Any color on LCD
                </span
                >
                <span className="relative h-5 flex-1 overflow-hidden rounded bg-zinc-900">
                  <span className="absolute inset-y-0 left-0 w-[95%] rounded bg-gradient-to-r from-zinc-700 to-zinc-500" />
                </span>
                <span className="w-20 shrink-0 text-right text-xs tabular-nums text-zinc-400 sm:text-sm">
                  ~95
                  <span className="block text-[10px] text-zinc-600">
                    backlight on
                  </span>
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-zinc-600">
              Illustrative index based on published OLED power measurements.
              Actual consumption varies by panel generation, brightness and
              automatic brightness limiting (ABL). On LCD screens the backlight
              stays on for every color, so black saves no power there.
            </p>

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

        {/* Color screen comparison */}
        <section
          id="screen-colors"
          className="border-t border-zinc-900 bg-zinc-950/40"
        >
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Black vs White vs Blue vs Red Screen — When to Use Each
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              A full-screen solid color is one of the oldest display-diagnostic
              tricks — each color reveals a different set of problems and suits
              a different task. This table covers the four screens people
              search for most.
            </p>
            <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-zinc-950 text-xs uppercase tracking-wide text-zinc-500">
                    <th className="px-5 py-3 font-medium">Screen</th>
                    <th className="px-5 py-3 font-medium">
                      Best use cases
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {COLOR_SCREENS.map((row) => (
                    <tr key={row.name} className="align-top">
                      <td className="px-5 py-4">
                        <span className="flex items-center gap-2.5 font-semibold text-white">
                          <span
                            aria-hidden
                            className="h-4 w-4 shrink-0 rounded-sm ring-1 ring-zinc-700"
                            style={{ backgroundColor: row.hex }}
                          />
                          {row.href ? (
                            <a
                              href={row.href}
                              className="underline-offset-4 hover:underline"
                            >
                              {row.name}
                            </a>
                          ) : (
                            row.name
                          )}
                        </span>
                      </td>
                      <td className="px-5 py-4 leading-relaxed text-zinc-400">
                        {row.uses}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Tip: run every color at full brightness in a dark room — a dead
              pixel shows as a permanent dark dot on white, while a stuck pixel
              glows on black. Our{" "}
              <a
                href="/black-screen"
                className="text-zinc-300 underline-offset-4 hover:underline"
              >
                full-screen black
              </a>{" "}
              and{" "}
              <a
                href="/white-screen"
                className="text-zinc-300 underline-offset-4 hover:underline"
              >
                full-screen white
              </a>{" "}
              tools work on any device with no download.
            </p>
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
