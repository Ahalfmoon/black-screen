"use client";

import { useEffect, useRef, useState } from "react";
import { buildSolidPngBlob, downloadBlob } from "@/lib/solid-png";

export type ScreenColor = "#000000" | "#FFFFFF";
type Lang = "en" | "de";

const LABELS = {
  en: {
    open: "Open full screen",
    downloadTitle: "Or download a solid-colour PNG",
    exit: "Click anywhere or press Esc to exit full screen",
    black: "Black #000000",
    white: "White #FFFFFF",
    note: "Runs instantly in your browser · free · no install",
    sizes: [
      "1920 × 1080 · Full HD desktop",
      "3840 × 2160 · 4K desktop",
      "1080 × 2340 · Android phone",
      "1170 × 2532 · iPhone",
    ],
  },
  de: {
    open: "Vollbild öffnen",
    downloadTitle: "Oder ein einfarbiges PNG herunterladen",
    exit: "Irgendwo klicken oder Esc drücken, um das Vollbild zu verlassen",
    black: "Schwarz #000000",
    white: "Weiß #FFFFFF",
    note: "Läuft direkt im Browser · kostenlos · keine Installation",
    sizes: [
      "1920 × 1080 · Full-HD Bildschirm",
      "3840 × 2160 · 4K Bildschirm",
      "1080 × 2340 · Android-Handy",
      "1170 × 2532 · iPhone",
    ],
  },
} as const;

const SIZES: { id: string; w: number; h: number }[] = [
  { id: "fhd", w: 1920, h: 1080 },
  { id: "4k", w: 3840, h: 2160 },
  { id: "android", w: 1080, h: 2340 },
  { id: "iphone", w: 1170, h: 2532 },
];

export default function ScreenTool({
  color,
  lang = "en",
  onColorChange,
}: {
  color: ScreenColor;
  lang?: Lang;
  onColorChange?: (color: ScreenColor) => void;
}) {
  const fsRef = useRef<HTMLDivElement>(null);
  const [full, setFull] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const isDark = color === "#000000";
  const t = LABELS[lang];

  // Sync with browser-native fullscreen exits (Esc key).
  useEffect(() => {
    const onChange = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Lock scroll while the fallback overlay is open.
  useEffect(() => {
    if (!full || document.fullscreenElement) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [full]);

  async function openFullscreen() {
    // Show the overlay immediately — it also works as a fallback on iPhone
    // Safari, which does not support the Fullscreen API on plain elements.
    setFull(true);
    try {
      await fsRef.current?.requestFullscreen?.();
    } catch {
      /* overlay fallback stays active */
    }
  }

  function closeFullscreen() {
    setFull(false);
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
    }
  }

  async function download(w: number, h: number, id: string) {
    setBusyId(id);
    try {
      const blob = await buildSolidPngBlob(color, w, h);
      if (!blob) return;
      const name = isDark ? "black" : "white";
      downloadBlob(blob, `${name}-screen-${w}x${h}.png`);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div
      ref={fsRef}
      className={`rounded-2xl border p-5 shadow-2xl sm:p-7 ${
        isDark
          ? "border-zinc-800 bg-zinc-950/80 shadow-black/60"
          : "border-zinc-300 bg-white shadow-zinc-900/10"
      }`}
    >
      {/* Colour switch (used on the combined German page) */}
      {onColorChange && (
        <div className="flex flex-wrap gap-2">
          {(
            [
              { value: "#000000", label: t.black },
              { value: "#FFFFFF", label: t.white },
            ] as const
          ).map((option) => {
            const active = color === option.value;
            return (
              <button
                key={option.value}
                onClick={() => onColorChange(option.value)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : isDark
                      ? "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Colour preview + primary action */}
      <div
        className={`mt-4 flex h-52 items-center justify-center rounded-xl border sm:h-64 ${
          isDark ? "border-zinc-800 bg-black" : "border-zinc-200 bg-white"
        }`}
      >
        <button
          onClick={openFullscreen}
          className={`rounded-full px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {t.open}
        </button>
      </div>

      {/* Downloads */}
      <p
        className={`mt-5 text-xs font-medium uppercase tracking-wide ${
          isDark ? "text-zinc-500" : "text-zinc-500"
        }`}
      >
        {t.downloadTitle}
      </p>
      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
        {SIZES.map((size, i) => (
          <div
            key={size.id}
            className={`flex items-center justify-between gap-3 rounded-lg border p-3 ${
              isDark
                ? "border-zinc-800 bg-black/60"
                : "border-zinc-200 bg-zinc-50"
            }`}
          >
            <span
              className={`font-mono text-xs ${
                isDark ? "text-zinc-300" : "text-zinc-700"
              }`}
            >
              {t.sizes[i]}
            </span>
            <button
              onClick={() => download(size.w, size.h, size.id)}
              disabled={busyId === size.id}
              className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold disabled:opacity-50 ${
                isDark
                  ? "bg-white text-black hover:opacity-90"
                  : "bg-black text-white hover:opacity-90"
              }`}
            >
              {busyId === size.id ? "…" : "PNG"}
            </button>
          </div>
        ))}
      </div>

      <p
        className={`mt-4 text-center text-xs ${
          isDark ? "text-zinc-600" : "text-zinc-400"
        }`}
      >
        {t.note}
      </p>

      {/* Fullscreen overlay */}
      {full && (
        <button
          type="button"
          aria-label={t.exit}
          onClick={closeFullscreen}
          className={`fixed inset-0 z-[100] h-full w-full cursor-default ${
            isDark ? "bg-black" : "bg-white"
          }`}
        >
          <span
            className={`pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs ${
              isDark ? "text-zinc-700" : "text-zinc-300"
            }`}
          >
            {t.exit}
          </span>
        </button>
      )}
    </div>
  );
}
