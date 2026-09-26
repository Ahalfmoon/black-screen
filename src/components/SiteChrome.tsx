import Link from "next/link";

type Lang = "en" | "de";

const NAV = {
  en: [
    { href: "/", label: "Black Wallpaper" },
    { href: "/black-screen", label: "Black Screen" },
    { href: "/white-screen", label: "White Screen" },
  ],
  de: [
    { href: "/de#schwarz", label: "Schwarzer Bildschirm" },
    { href: "/de#weiss", label: "Weißes Bild" },
    { href: "/de#faq", label: "FAQ" },
  ],
} as const;

const ALL_TOOLS = [
  { href: "/", en: "Pure Black Wallpaper", de: "Rein schwarze Wallpaper" },
  {
    href: "/black-screen",
    en: "Black Screen – full screen black",
    de: "Schwarzer Bildschirm (Vollbild)",
  },
  {
    href: "/white-screen",
    en: "White Screen – full brightness",
    de: "Weißes Bild (Vollbild)",
  },
  { href: "/de", en: "Deutsche Version", de: "Deutsch" },
];

export function SiteHeader({
  lang = "en",
  active,
}: {
  lang?: Lang;
  active?: string;
}) {
  return (
    <header className="border-b border-zinc-900">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4">
        <Link href={lang === "de" ? "/de" : "/"} className="flex items-center gap-2.5">
          <span className="inline-block h-4 w-4 rounded-sm border border-zinc-700 bg-black" />
          <span className="text-sm font-semibold tracking-tight text-white">
            PureBlack<span className="text-zinc-500">.screen</span>
          </span>
        </Link>
        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-sm text-zinc-400">
          {NAV[lang].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                active === item.href
                  ? "text-white"
                  : "transition-colors hover:text-white"
              }
            >
              {item.label}
            </Link>
          ))}
          {lang === "en" ? (
            <Link href="/de" className="transition-colors hover:text-white">
              DE
            </Link>
          ) : (
            <Link href="/black-screen" className="transition-colors hover:text-white">
              EN
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ lang = "en" }: { lang?: Lang }) {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto max-w-4xl px-5 py-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {lang === "de" ? "Kostenlose Bildschirm-Tools" : "Free screen tools"}
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-zinc-400 sm:grid-cols-2">
          {ALL_TOOLS.map((tool) => (
            <li key={tool.href}>
              <Link href={tool.href} className="transition-colors hover:text-white">
                {lang === "de" ? tool.de : tool.en}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} PureBlack.screen · #000000 / #FFFFFF ·{" "}
          {lang === "de"
            ? "Kostenlos, ohne Wasserzeichen, ohne Anmeldung"
            : "Free, no watermark, no sign-up"}
        </p>
      </div>
    </footer>
  );
}

/** Compact "related tools" strip for internal linking. */
export function RelatedTools({
  lang = "en",
  current,
}: {
  lang?: Lang;
  current?: string;
}) {
  const title =
    lang === "de" ? "Ähnliche kostenlose Tools" : "Related free tools";
  return (
    <section className="border-t border-zinc-900">
      <div className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {ALL_TOOLS.filter((tool) => tool.href !== current).map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              {lang === "de" ? tool.de : tool.en}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
