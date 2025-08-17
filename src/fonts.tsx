import localFont from "next/font/local";

export const SfProDisplay = localFont({
  src: [
    { path: '../public/fonts/SF-Pro-Display-Bold.woff2', weight: '700' },
    { path: '../public/fonts/SF-Pro-Display-Regular.woff2', weight: '400' }
  ],
  display: 'swap',
});

export const SfProText = localFont({
  src: [
    { path: '../public/fonts/SF-Pro-Text-Light.woff2', weight: '300' }
  ],
  display: 'swap',
});