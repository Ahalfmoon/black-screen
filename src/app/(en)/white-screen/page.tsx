import type { Metadata } from "next";
import Link from "next/link";
import ScreenTool from "@/components/ScreenTool";
import FaqSection, { FaqJsonLd } from "@/components/FaqSection";
import { SiteFooter, SiteHeader, RelatedTools } from "@/components/SiteChrome";
import type { FaqItem } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "White Screen Online — Plain Whitescreen at Full Brightness (#FFFFFF)",
  description:
    "Free online white screen: turn any monitor or phone into a plain #FFFFFF whitescreen at full brightness. Perfect for cleaning dust, the white screen test, lighting and the white-out-screen effect. No download.",
  keywords: [
    "white screen",
    "whitescreen",
    "white screen online",
    "full brightness",
    "white out screen",
    "plain white screen",
    "white screen test",
    "screens white",
    "white background",
    "#ffffff screen",
  ],
  alternates: {
    canonical: "/white-screen",
    languages: {
      en: "/white-screen",
      de: "/de",
      "x-default": "/white-screen",
    },
  },
  openGraph: {
    url: "/white-screen",
    title:
      "White Screen Online — Plain Whitescreen at Full Brightness (#FFFFFF)",
    description:
      "A plain #FFFFFF whitescreen at full brightness: clean dust, run the white screen test, or use your display as a light. Free, no download.",
  },
};

const USES = [
  {
    title: "Clean dust & smudges",
    body: "Every speck and fingerprint shows against a plain white screen — turn brightness up before wiping for a perfectly clean display.",
  },
  {
    title: "Instant soft light",
    body: "Use the whitescreen as a reading lamp, makeup mirror light, photo fill light or a small emergency light in a dark room.",
  },
  {
    title: "White screen test",
    body: "A full #FFFFFF field reveals stuck pixels, uneven backlight and tint problems on monitors, phones and TVs.",
  },
  {
    title: "Clean white background",
    body: "Product photos, document scanning, video calls and slides all benefit from a neutral, shadow-free white background.",
  },
  {
    title: "Projector calibration",
    body: "Check focus, edge uniformity and hotspots by projecting a full white image onto the screen in a darkened room.",
  },
  {
    title: "Hide everything else",
    body: "White out the screen to hide clutter behind transparent accessories, floating clocks or an exhibition display.",
  },
];

const FAQ: FaqItem[] = [
  {
    question: "How do I get a plain white screen?",
    answer:
      "Click “Open full screen” at the top of this page: the entire display immediately becomes a plain white screen filled with #FFFFFF. Click anywhere or press Esc to return. The white screen online tool is free, works in every modern browser, and needs no download, app or sign-up.",
  },
  {
    question: "Why should I turn my display to full brightness?",
    answer:
      "Many uses of a white screen depend on maximum light: cleaning dust, lighting your face on a video call, using the phone as a lamp, or spotting faint display defects. Open the whitescreen, set the display to full brightness, and the panel outputs its brightest, most uniform white. On OLED phones battery will drain faster at full brightness, which is expected.",
  },
  {
    question: "What does “white out screen” mean?",
    answer:
      "“White out screen” describes turning the entire display into one blown-out white field — no icons, text or borders. People use it to white out distractions, light a scene, inspect the panel for damage, or give a device a blank, museum-like look. The button above produces the effect instantly without editing an image.",
  },
  {
    question: "Can a white screen help me clean my monitor or phone?",
    answer:
      "Yes, it is the fastest way to find dust. Open the plain white screen at full brightness in a slightly dark room: every hair, crumb and oily smudge appears as a dark mark. Wipe gently with a microfibre cloth, re-check the white field, and repeat until it is spotless.",
  },
  {
    question: "Does a white screen help with the white screen test for pixels?",
    answer:
      "A white screen test catches the opposite defects of a black test: on #FFFFFF, a dead pixel appears as a permanent dark dot, while a stuck pixel shows up as a coloured speck. Run both the white and the black screen tests, plus red, green and blue, for a complete panel check.",
  },
  {
    question: "Can I use the whitescreen as a light source?",
    answer:
      "Absolutely. At full brightness a white phone or tablet screen is a handy fill light for selfies, a soft reading light on a nightstand, or an emergency lamp in a power cut. Larger laptops and monitors at #FFFFFF can illuminate a small room enough to find things.",
  },
  {
    question: "Is a full-white screen safe for OLED displays?",
    answer:
      "Short viewing is completely safe. Static white draws maximum current from every OLED pixel and, over many hours, can marginally accelerate wear, so do not leave a static whitescreen running for days at full brightness. For normal cleaning, testing and lighting use there is no meaningful risk.",
  },
  {
    question: "Does the “screens white” view work on iPhone, Android and laptops?",
    answer:
      "Yes — the page is fully responsive, so it screens white on iPhone, iPad, Android phones and Windows, macOS or Linux laptops. On iPhone Safari the fullscreen button falls back to a white overlay if the browser blocks the native Fullscreen API; tap once to return.",
  },
];

export default function WhiteScreenPage() {
  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "White Screen Online",
    url: `${SITE_URL}/white-screen`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android, Windows, macOS, Linux",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free online full-screen #FFFFFF white display at full brightness for screen cleaning, pixel tests and lighting.",
  };

  return (
    <>
      <FaqJsonLd items={FAQ} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader active="/white-screen" />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-white ring-1 ring-zinc-600" />
            Whitescreen · #FFFFFF · Full brightness
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            White Screen Online — a Plain Whitescreen at Full Brightness
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Turn any display into a{" "}
            <strong className="text-zinc-200">plain white screen</strong> in
            one click — pure <span className="font-mono">#FFFFFF</span>, edge
            to edge, at full brightness. Use the whitescreen to clean dust,
            run a white screen test, light a scene or white out everything
            else. Free, no download.
          </p>
          <div className="mt-8">
            <ScreenTool color="#FFFFFF" />
          </div>
        </section>

        <section className="border-t border-zinc-900 bg-zinc-950/40">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What a Plain White Screen Is Used For
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {USES.map((useCase) => (
                <div
                  key={useCase.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5"
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

        <section className="border-t border-zinc-900">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Full Brightness and the “White Out Screen” Effect
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              A white screen works hardest when the panel is at{" "}
              <strong className="text-zinc-200">full brightness</strong>: that
              is when dust is most visible, stuck pixels are easiest to spot,
              and the display genuinely works as a lamp. Open the whitescreen,
              crank brightness to maximum, and let the display white out —
              every interface element disappears into a single #FFFFFF field.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              The <strong className="text-zinc-200">white out screen</strong>{" "}
              effect is also the standard trick for photographing or scanning
              documents without shadows, checking a projector&apos;s
              uniformity, or giving a spare phone a clean clock-only look.
              When you need the opposite — hiding all light for an OLED pixel
              test or audio playback — switch to the{" "}
              <Link
                href="/black-screen"
                className="text-white underline underline-offset-4"
              >
                black screen
              </Link>{" "}
              instead.
            </p>
          </div>
        </section>

        <FaqSection items={FAQ} heading="White Screen FAQ" />

        <RelatedTools current="/white-screen" />
      </main>

      <SiteFooter />
    </>
  );
}
