export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Why is my wallpaper black?",
    answer:
      "A wallpaper that turns black on its own is usually caused by a system setting, not an image: battery saver / low power mode applies a dark or black wallpaper on some Android phones; dark mode or Material You theming can switch to a dark background; an accessibility setting such as colour inversion or grayscale may be enabled; or a system update reset your wallpaper choice. Re-select the image from Settings → Wallpaper and check battery-saver and dark-mode options.",
  },
  {
    question: "Is #000000 the only true black?",
    answer:
      "Yes. In hex colour codes, #000000 means RGB (0, 0, 0) — every colour channel is at zero, so the colour contains no light at all. Very dark greys such as #0A0A0A or #1B1B1B look black to the eye but still emit light on a screen, which matters for OLED battery savings.",
  },
  {
    question: "Does a black wallpaper really save battery?",
    answer:
      "On OLED and AMOLED screens (all modern iPhones from iPhone X, and most Android flagships), each pixel produces its own light. A #000000 pixel is switched completely off, so an all-black screen uses almost no backlight power. On LCD screens the backlight stays on even for black pixels, so a black wallpaper saves no battery — it only looks minimal.",
  },
  {
    question: "What wallpaper size do I need for my phone?",
    answer:
      "Pick the preset that matches your phone's native screen resolution — for example 1320 × 2868 for iPhone 16 Pro Max or 1080 × 2400 for most Android phones. iOS and Android scale or crop the image if it is slightly off, but an exact-resolution file fills the screen without zooming or quality loss. You can also enter any custom width and height above.",
  },
  {
    question: "How do I set a black wallpaper on iPhone?",
    answer:
      "Download the PNG, open the Photos app, tap the image, tap the Share button and choose “Use as Wallpaper”, or go to Settings → Wallpaper → Add New Wallpaper. Position it with Perspective Zoom turned off for the purest black, then tap Add and choose Lock Screen, Home Screen, or both.",
  },
  {
    question: "How do I set a black wallpaper on Android?",
    answer:
      "Download the PNG, then long-press an empty area of your home screen and tap Wallpaper, or go to Settings → Wallpaper & style. Choose the downloaded image from Photos or Files and apply it to the home screen and lock screen. On AMOLED phones, enable dark mode as well for maximum battery saving.",
  },
  {
    question: "Can I use a pure black image to test for dead pixels?",
    answer:
      "Yes. Open the downloaded image full-screen in a dark room and inspect every corner. A dead pixel stays black on bright test colours, while a stuck pixel glows a fixed colour — test with a few solid colours (red, green, blue, white) in addition to black to spot both kinds.",
  },
  {
    question: "Is the wallpaper free, and does it have a watermark?",
    answer:
      "Completely free, with no watermark, no account, and no app to install. The PNG is generated instantly in your browser at the exact resolution you choose, so you can download it as many times as you need.",
  },
];
