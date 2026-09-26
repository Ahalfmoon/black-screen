import DeScreenTool from "@/components/DeScreenTool";
import FaqSection, { FaqJsonLd } from "@/components/FaqSection";
import { SiteFooter, SiteHeader, RelatedTools } from "@/components/SiteChrome";
import type { FaqItem } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

const ANWENDUNGEN = [
  {
    title: "Pixeltest & Lichthöfe",
    body: "Das schwarze Vollbild zeigt tote Pixel und Lichthöfe am Rand vom Monitor oder Handy im dunklen Raum sofort.",
  },
  {
    title: "Strom sparen mit OLED",
    body: "Auf OLED/AMOLED schalten sich schwarze Pixel ab – ein echtes #000000 verbraucht fast keinen Anzeige-Strom.",
  },
  {
    title: "Display reinigen",
    body: "Das weiße Bild in voller Helligkeit macht jedes Staubkorn und jeden Schmierer sichtbar – perfekt vor dem Abwischen.",
  },
  {
    title: "Weiche Lichtquelle",
    body: "Das Handy oder Tablet mit weißem Vollbild dient als Leselampe, Selfie-Licht oder Notlicht im Dunkeln.",
  },
  {
    title: "Ablenkung ausblenden",
    body: "Ein schwarzer Screen beim Musik-Hören oder Präsentieren – keine Icons, keine hellen Flächen, nur ruhiges Licht.",
  },
  {
    title: "Fotos, Folien & Aufnahmen",
    body: "Neutrale schwarze oder weiße Hintergründe für Produktfotos, Scans, Videos und Beamer-Kalibrierung.",
  },
];

const FAQ: FaqItem[] = [
  {
    question: "Warum ist mein Bildschirm schwarz?",
    answer:
      "Ein unerwartet schwarzer Bildschirm hat meist einen einfachen Grund: Das Gerät ist in den Ruhemodus gegangen, das Kabel oder die Bildschirmquelle stimmt nicht, oder der Energiesparmodus hat ein dunkles Design erzwungen. Bewege die Maus, prüfe die Signalquelle und starte bei Bedarf neu. Wer den Bildschirm bewusst schwarz machen möchte, tippt oben auf „Vollbild öffnen“ – das ist gewollt und kein Fehler.",
  },
  {
    question: "Wie mache ich meinen Bildschirm komplett schwarz oder weiß?",
    answer:
      "Wähle oben zwischen Schwarz #000000 und Weiß #FFFFFF und tippe auf „Vollbild öffnen“ – schon füllt das schwarze oder weiße Vollbild das gesamte Display. Zurück kommst du mit einem Klick irgendwo in die Fläche oder mit Esc. Das Tool läuft im Browser unter Windows, macOS, Android und iOS, ganz ohne Installation oder App.",
  },
  {
    question:
      "Was ist der Unterschied zwischen einem schwarzen Bildschirm und einer schwarzen Wallpaper?",
    answer:
      "Der schwarze Bildschirm ist die temporäre Vollbild-Ansicht dieser Seite, etwa für den Pixeltest oder die Musikwiedergabe. Eine schwarze Wallpaper ist ein gespeichertes #000000-Bild, das dauerhaft auf dem Sperr- oder Startbildschirm liegt. Die PNG-Buttons liefern das Bild in gängigen Full-HD-, 4K- und Handy-Auflösungen; für exakte iPhone-Größen gibt es unsere spezielle Wallpaper-Seite.",
  },
  {
    question: "Warum spart #000000 auf OLED und AMOLED Strom?",
    answer:
      "OLED- und AMOLED-Pixel leuchten selbst. Bei der Farbe #000000 sind sie komplett ausgeschaltet und verbrauchen fast keinen Strom. Ein dunkles Grau wie #1B1B1B sieht ähnlich aus, leuchtet aber weiter – deshalb ist nur echtes Schwarz ein „schwarzes Vollbild“ mit echtem Spar-Effekt. Auf LCD-Displays bleibt die Hintergrundbeleuchtung auch bei Schwarz an, dort liegt der Nutzen rein optisch.",
  },
  {
    question: "Wofür brauche ich ein weißes Bild in voller Helligkeit?",
    answer:
      "Auf einem weißen Bildschirm sind Staub, Krümel und Fingerabdrücke deutlich zu sehen, das hilft beim gründlichen Reinigen. Außerdem dient das weiße Bild als weiche Lichtquelle für Selfies oder zum Lesen, und beim Pixeltest zeigt #FFFFFF tote oder hängengebliebene Pixel als dunkle oder bunte Punkte. Zum Scannen von Dokumenten und zur Beamer-Kalibrierung ist ein weißes Vollbild ebenfalls praktisch.",
  },
  {
    question: "Erkenne ich mit einem schwarzen Vollbild tote Pixel?",
    answer:
      "Ja. Öffne das schwarze Vollbild in einem möglichst dunklen Raum und suche die Fläche nach auffällig leuchtenden Punkten und die Ränder nach Lichthöfen ab. Wiederhole den Test zusätzlich mit dem weißen Bild sowie mit Rot, Grün und Blau – damit lassen sich sowohl tote als auch hängengebliebene Pixel zuverlässig erkennen.",
  },
  {
    question: "Wie verlasse ich das Vollbild wieder?",
    answer:
      "Klicke oder tippe einfach irgendwo auf die schwarze oder weiße Fläche oder drücke Esc. Auf dem Smartphone lässt sich die native Vollbildansicht auch durch Wischen beenden. Das Tool verändert nichts an deinen Einstellungen und installiert nichts.",
  },
  {
    question: "Brauche ich ein „Black Screen“-Bild zum Download?",
    answer:
      "Nicht zwingend: Die Webseite erzeugt das schwarze oder weiße Vollbild sofort im Browser. Wer das Black-Screen-Bild aber als Wallpaper, in einer Präsentation oder ohne Internet zum Testen nutzen möchte, lädt es oben als PNG in vier Auflösungen herunter – kostenlos, ohne Wasserzeichen und ohne Anmeldung.",
  },
];

export default function DePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Schwarzer Bildschirm & Weißes Bild",
        url: `${SITE_URL}/de`,
        inLanguage: "de",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS, Android, Windows, macOS, Linux",
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        description:
          "Kostenloses Online-Vollbild in Schwarz (#000000) oder Weiß (#FFFFFF) für Pixeltest, OLED-Stromsparen und Display-Reinigung.",
      },
    ],
  };

  return (
    <>
      <FaqJsonLd items={FAQ} inLanguage="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader lang="de" />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-black ring-1 ring-zinc-600" />
            Schwarz #000000 · Weiß #FFFFFF · ganz ohne Download
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Schwarzer Bildschirm und Weißes Bild – Vollbild kostenlos online
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Mach dein Display mit einem Klick komplett schwarz oder komplett
            weiß. Ob <strong className="text-zinc-200">schwarzes Vollbild</strong>{" "}
            für den Pixeltest, ein schwarzer Screen zum Stromsparen auf
            OLED/AMOLED oder ein weißes Bild in voller Helligkeit zum
            Reinigen – kostenlos, ohne App und ohne Installation.
          </p>
          <div className="mt-8">
            <DeScreenTool />
          </div>
        </section>

        {/* Schwarz */}
        <section id="schwarz" className="border-t border-zinc-900 bg-zinc-950/40">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Schwarzer Bildschirm: das schwarze Vollbild (#000000)
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Nach dem Tippen auf „Vollbild öffnen“ ist der Bildschirm
              komplett schwarz – ein echtes Schwarz-Vollbild ohne Icons,
              Leisten oder helle Flächen. Auf OLED- und AMOLED-Displays
              schalten sich die schwarzen Pixel dabei vollständig ab:{" "}
              <span className="font-mono text-sm text-zinc-300">#000000</span>{" "}
              spart Strom und beugt Einbrennen vor. Auf LCD-Geräten bleibt die
              Hintergrundbeleuchtung an, dort dient der schwarze Bildschirm
              vor allem als Testfläche und als ruhige, neutrale Anzeige. Wer
              das „Black Screen“-Bild behalten möchte, lädt oberhalb ein PNG in
              Full-HD-, 4K- oder Handy-Auflösung herunter – direkt als
              Wallpaper verwendbar.
            </p>
          </div>
        </section>

        {/* Weiß */}
        <section id="weiss" className="border-t border-zinc-900">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Weißes Bild: weißer Bildschirm in voller Helligkeit
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Das weiße Vollbild füllt das Display mit reinem{" "}
              <span className="font-mono text-sm text-zinc-300">#FFFFFF</span>.
              Dreh die Helligkeit hoch, dann siehst du jedes Staubkorn und
              jeden Schmierer – ideal, um Monitor oder Handy gründlich zu
              putzen. Außerdem eignet sich das weiße Bild als weiche
              Lichtquelle beim Lesen oder für Selfies, für den Pixeltest und
              zum Ausleuchten mit dem Beamer. Beenden lässt sich das Vollbild
              jederzeit per Klick oder Esc.
            </p>
          </div>
        </section>

        {/* Anwendungen */}
        <section className="border-t border-zinc-900 bg-zinc-950/40">
          <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Wofür das Vollbild gut ist
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ANWENDUNGEN.map((anwendung) => (
                <div
                  key={anwendung.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    {anwendung.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {anwendung.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={FAQ} heading="Häufige Fragen" />

        <RelatedTools lang="de" current="/de" />
      </main>

      <SiteFooter lang="de" />
    </>
  );
}
