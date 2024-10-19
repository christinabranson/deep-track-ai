// `pages/_app.js`

import { Rubik } from "next/font/google";

import "../styles/global.css";

const rubic_font = Rubik({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={rubic_font.className}>
      <Component {...pageProps} />
    </main>
  );
}
