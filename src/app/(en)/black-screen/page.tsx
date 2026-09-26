import type { Metadata } from "next";
import Link from "next/link";
import ScreenTool from "@/components/ScreenTool";
import FaqSection, { FaqJsonLd } from "@/components/FaqSection";
import { SiteFooter, SiteHeader, RelatedTools } from "@/components/SiteChrome";
import type { FaqItem } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Black Screen Online — Full Screen #000000 for Dead Pixel & OLED Tests",
  description:
    "Turn any monitor or phone into a full black screen (#000000) instantly. Free online blacksreen tool for dead-pixel tests, OLED battery saving and a plain black background. No install.",
  keywords: [
    "black screen",
    "blacksreen",
    "black screen online",
    "full black screen",
    "black screen test",
    "black background",
    "pitch black screen",
    "black screen wallpaper",
    "#000000 screen",
  ],
  alternates: {
    canonical: "/black-screen",
    languages: {
      en: "/black-screen",
      de: "/de",
      "x-default": "/black-screen",
    },
  },
  openGraph: {
    url: "/black-screen",
    title:
      "Black Screen Online — Full Screen #000000 for Dead Pixel & OLED Tests",
    description:
      "Free online blacksreen: fill your display with true #000000 for pixel tests, OLED saving and a plain black background.",
  },
};

const USES = [
  {
    title: "Dead pixel & backlight test",
    body: "A full black screen reveals stuck or dead pixels and backlight bleed instantly — the classic black screen test for new monitors.",
  },
  {
    title: "OLED / AMOLED battery saving",
    body: "Black pixels switch off on self-emissive displays, so a pitch-black screen draws almost no display power.",
  },
  {
    title: "Audio with the lights out",
    body: "Keep music or a long video playing while the display shows pure black instead of bright artwork or controls.",
  },
  {
    title: "Plain black background",
    body: "Need a distraction-free black background for screenshots, screen recording or a presentation? One tap, no editing.",
  },
  {
    title: "Check a used phone or monitor",
    body: "Inspect a second-hand display in a dark room before buying — uneven backlight is impossible to hide on #000000.",
  },
  {
    title: "Focus, sleep & dark rooms",
    body: "Use the black screen as a neutral night display or a blank field behind floating clocks and timers.",
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Why is my screen black?",
    answer:
      "An unexpected black screen usually means the display has gone to sleep, lost its video signal, or the device's battery saver forced a dark theme. Check the cable or input source, move the mouse or press a key, and restart the device if needed. If you deliberately want a black screen, the button above fills the display with #000000 on purpose — that is not an error.",
  },
  {
    question: "How do I get a full black screen on my phone or monitor?",
    answer:
      "Tap “Open full screen” on this page. The display turns completely black (#000000) until you click anywhere or press Esc. The black screen online tool works in any modern browser on Windows, macOS, Android and iPhone, with no app or download. You can also save a matching black PNG with the download buttons below.",
  },
  {
    question: "What is the difference between a black screen, a black background and a black wallpaper?",
    answer:
      "A black screen fills the whole display right now and is mainly used for testing and playback. A black background is a flat #000000 field behind other content such as slides, photos or recordings. A black wallpaper is the same pure-black image saved and assigned to your phone's lock or home screen — our Black Wallpaper page offers exact device resolutions for that.",
  },
  {
    question: "Is “blacksreen” the same as a black screen?",
    answer:
      "Yes — “blacksreen” is simply the common one-word misspelling people use when searching for a full black display. Both refer to a screen showing solid #000000, which is exactly what this page produces.",
  },
  {
    question: "Can a black screen test for dead pixels and backlight bleed?",
    answer:
      "Yes. Open the full black screen in a dark room and look closely: glow around the edges indicates backlight bleed, while a pixel that never lights up across black, white, red, green and blue test colours is dead or stuck. Repeat the test with the white screen tool as well for a complete check.",
  },
  {
    question: "Does a black screen save battery?",
    answer:
      "On OLED and AMOLED phones — iPhone X and later, and most modern Android devices — black pixels are powered off, so #000000 saves significant battery, especially with dark mode enabled. LCD screens keep their backlight on even when displaying black, so on those devices there is no power saving, only the visual benefit.",
  },
  {
    question: "Can I make the screen black while YouTube or music keeps playing?",
    answer:
      "On a laptop, start the video or music, switch back to this tab and open the full black screen; audio continues while the display no longer shows the bright player interface. On phones the operating system may dim the panel automatically, but playing audio in the background with this page open is the closest equivalent.",
  },
  {
    question: "How do I exit the full black screen?",
    answer:
      "Click or tap anywhere on the black field, or press the Esc key. If your phone opened the browser's native fullscreen mode, swiping down also restores the status bar. Nothing is installed or changed on your device.",
  },
];

export default function BlackScreenPage() {
  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Black Screen Online",
    url: `${SITE_URL}/black-screen`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android, Windows, macOS, Linux",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free online full-screen #000000 black display for dead-pixel tests, OLED battery saving and a plain black background.",
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

      <SiteHeader active="/black-screen" />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-black ring-1 ring-zinc-600" />
            Blacksreen · #000000 · Free online tool
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Black Screen Online — Turn Your Display Full #000000 Black
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            One click and your monitor or phone becomes a{" "}
            <strong className="text-zinc-200">full black screen</strong>: a
            pitch-black <span className="font-mono">#000000</span> field with
            no icons, no taskbar and no install. Use the black screen online
            for pixel tests, OLED battery saving, or a plain black background.
          </p>
          <div className="mt-8">
            <ScreenTool color="#000000" />
          </div>
        </section>

        <section className="border-t border-zinc-900 bg-zinc-950/40">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What a Full Black Screen Is Used For
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
              Black Screen vs. Black Background vs. Black Wallpaper
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              People search for these three phrases interchangeably, but the
              intent differs slightly. A{" "}
              <strong className="text-zinc-200">black screen</strong> is the
              temporary full-display view this page creates — ideal for the
              black screen test and for hiding a bright player while audio
              keeps playing. A{" "}
              <strong className="text-zinc-200">black background</strong> is a
              reusable flat #000000 layer behind presentations, product photos
              or screen recordings; the PNG buttons above give you that file
              at Full HD or 4K. A{" "}
              <strong className="text-zinc-200">black wallpaper</strong> is the
              same image saved permanently as your phone wallpaper — head to
              the{" "}
              <Link
                href="/"
                className="text-white underline underline-offset-4"
              >
                pure black wallpaper
              </Link>{" "}
              page for exact iPhone and Android resolutions.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              In every case the only technically correct value is strict{" "}
              <span className="font-mono text-zinc-300">#000000</span>: very
              dark greys such as #0A0A0A still emit light, so they are neither
              a true blacksreen nor useful for OLED pixel tests.
            </p>
          </div>
        </section>

        <FaqSection items={FAQ} heading="Black Screen FAQ" />

        <RelatedTools current="/black-screen" />
      </main>

      <SiteFooter />
    </>
  );
}
