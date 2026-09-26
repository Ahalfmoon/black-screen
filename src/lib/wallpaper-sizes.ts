export type SizePreset = {
  id: string;
  width: number;
  height: number;
  label: string;
  devices: string;
};

export type DeviceGroupId = "iphone" | "android" | "desktop";

export type DeviceGroup = {
  id: DeviceGroupId;
  tabLabel: string;
  presets: SizePreset[];
};

export const DEVICE_GROUPS: DeviceGroup[] = [
  {
    id: "iphone",
    tabLabel: "iPhone",
    presets: [
      {
        id: "iphone-16-pro-max",
        width: 1320,
        height: 2868,
        label: "1320 × 2868",
        devices: "iPhone 16 Pro Max",
      },
      {
        id: "iphone-plus-pro-max",
        width: 1290,
        height: 2796,
        label: "1290 × 2796",
        devices: "iPhone 15 / 14 Pro Max, 15 / 14 Plus",
      },
      {
        id: "iphone-16-pro",
        width: 1206,
        height: 2622,
        label: "1206 × 2622",
        devices: "iPhone 16 Pro / 16",
      },
      {
        id: "iphone-15-14-pro",
        width: 1179,
        height: 2556,
        label: "1179 × 2556",
        devices: "iPhone 15 Pro / 14 Pro",
      },
      {
        id: "iphone-standard",
        width: 1170,
        height: 2532,
        label: "1170 × 2532",
        devices: "iPhone 14 / 13 / 12 (Pro)",
      },
      {
        id: "iphone-xs-max",
        width: 1242,
        height: 2688,
        label: "1242 × 2688",
        devices: "iPhone 11 Pro Max / XS Max",
      },
    ],
  },
  {
    id: "android",
    tabLabel: "Android / AMOLED",
    presets: [
      {
        id: "android-qhd",
        width: 1440,
        height: 3120,
        label: "1440 × 3120",
        devices: "Galaxy S Ultra & QHD+ flagships",
      },
      {
        id: "android-fhd",
        width: 1080,
        height: 2400,
        label: "1080 × 2400",
        devices: "Most Android phones (FHD+)",
      },
      {
        id: "android-2340",
        width: 1080,
        height: 2340,
        label: "1080 × 2340",
        devices: "Pixel 4–7 & older Android",
      },
    ],
  },
  {
    id: "desktop",
    tabLabel: "Desktop",
    presets: [
      {
        id: "desktop-4k",
        width: 3840,
        height: 2160,
        label: "3840 × 2160",
        devices: "4K UHD monitor / TV",
      },
      {
        id: "desktop-qhd",
        width: 2560,
        height: 1440,
        label: "2560 × 1440",
        devices: "1440p QHD monitor",
      },
      {
        id: "desktop-fhd",
        width: 1920,
        height: 1080,
        label: "1920 × 1080",
        devices: "1080p Full HD monitor",
      },
    ],
  },
];

export function findPreset(
  groupId: DeviceGroupId,
  presetId: string
): SizePreset | undefined {
  return DEVICE_GROUPS.find((g) => g.id === groupId)?.presets.find(
    (p) => p.id === presetId
  );
}
