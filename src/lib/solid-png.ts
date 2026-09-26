/**
 * Build a solid-colour PNG of any size entirely in the browser.
 * No server requests, no static assets.
 */
export async function buildSolidPngBlob(
  hex: string,
  width: number,
  height: number
): Promise<Blob | null> {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, width, height);
  return new Promise((resolve) =>
    canvas.toBlob((blob) => resolve(blob), "image/png")
  );
}

/** Trigger a browser download for an in-memory Blob. */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  return url;
}
