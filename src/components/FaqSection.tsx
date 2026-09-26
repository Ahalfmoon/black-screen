import type { FaqItem } from "@/lib/faq";

export function FaqJsonLd({
  items,
  inLanguage = "en",
}: {
  items: FaqItem[];
  inLanguage?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function FaqSection({
  items,
  heading,
  id = "faq",
}: {
  items: FaqItem[];
  heading: string;
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-zinc-900 bg-zinc-950/40">
      <div className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
        <div className="mt-8 divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800 bg-black/50">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-zinc-500 transition-transform group-open:rotate-45"
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
  );
}
