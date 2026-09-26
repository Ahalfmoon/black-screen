"use client";

import { useState, useSyncExternalStore } from "react";
import {
  DEVICE_GROUPS,
  type DeviceGroupId,
  type SizePreset,
} from "@/lib/wallpaper-sizes";
import { buildSolidPngBlob, downloadBlob } from "@/lib/solid-png";

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export default function WallpaperDownloader() {
  const [activeTab, setActiveTab] = useState<DeviceGroupId>("iphone");
  const [width, setWidth] = useState(1170);
  const [height, setHeight] = useState(2532);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  // iOS only exists on the client; use a server snapshot of false to stay
  // hydration-safe.
  const ios = useSyncExternalStore(
    () => () => {},
    () => isIOS(),
    () => false
  );

  const activeGroup = DEVICE_GROUPS.find((g) => g.id === activeTab)!;

  async function download(preset: SizePreset) {
    setBusyId(preset.id);
    try {
      const blob = await buildSolidPngBlob("#000000", preset.width, preset.height);
      if (!blob) return;
      const url = downloadBlob(
        blob,
        `pure-black-${preset.width}x${preset.height}.png`
      );
      // Keep the last URL alive as an iOS long-press fallback preview.
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
    } finally {
      setBusyId(null);
    }
  }

  async function downloadCustom() {
    const w = Math.min(9999, Math.max(1, Math.round(width) || 1));
    const h = Math.min(9999, Math.max(1, Math.round(height) || 1));
    setWidth(w);
    setHeight(h);
    await download({
      id: "custom",
      width: w,
      height: h,
      label: `${w} × ${h}`,
      devices: "Custom size",
    });
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-2xl shadow-black/60 sm:p-7">
      {/* Device tabs */}
      <div
        role="tablist"
        aria-label="Choose your device"
        className="flex flex-wrap gap-2"
      >
        {DEVICE_GROUPS.map((group) => {
          const active = group.id === activeTab;
          return (
            <button
              key={group.id}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveTab(group.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {group.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Preset sizes */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {activeGroup.presets.map((preset) => (
          <div
            key={preset.id}
            className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-black/60 p-4"
          >
            <div className="min-w-0">
              <p className="font-mono text-sm text-white">{preset.label}</p>
              <p className="mt-0.5 truncate text-xs text-zinc-500">
                {preset.devices}
              </p>
            </div>
            <button
              onClick={() => download(preset)}
              disabled={busyId === preset.id}
              className="shrink-0 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {busyId === preset.id ? "…" : "Download"}
            </button>
          </div>
        ))}
      </div>

      {/* Custom size */}
      <div className="mt-4 rounded-xl border border-dashed border-zinc-800 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Need another resolution?
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-zinc-400">
            W
            <input
              type="number"
              min={1}
              max={9999}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-24 rounded-lg border border-zinc-800 bg-black px-3 py-2 font-mono text-sm text-white outline-none focus:border-zinc-600"
            />
          </label>
          <span className="text-zinc-600">×</span>
          <label className="flex items-center gap-2 text-sm text-zinc-400">
            H
            <input
              type="number"
              min={1}
              max={9999}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-24 rounded-lg border border-zinc-800 bg-black px-3 py-2 font-mono text-sm text-white outline-none focus:border-zinc-600"
            />
          </label>
          <button
            onClick={downloadCustom}
            disabled={busyId === "custom"}
            className="ml-auto rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-900 disabled:opacity-50"
          >
            {busyId === "custom" ? "…" : "Generate PNG"}
          </button>
        </div>
      </div>

      {/* iOS fallback */}
      {ios && previewUrl && (
        <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <p className="text-sm text-zinc-300">
            Didn&apos;t save? Long-press the image below, then choose{" "}
            <span className="font-medium text-white">
              “Save to Photos”
            </span>
            .
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            alt="Pure black #000000 wallpaper preview"
            className="mt-3 h-40 w-full rounded-lg border border-zinc-800 object-cover"
          />
        </div>
      )}

      <p className="mt-4 text-center text-xs text-zinc-600">
        Every file is a true #000000 PNG · free · no watermark · no sign-up
      </p>
    </div>
  );
}
