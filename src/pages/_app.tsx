import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import {
  Big_Shoulders_Display as Display,
  Inter as Sans,
} from "@next/font/google";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const neueFont = localFont({
  src: "../fonts/NHaas/NHaasGroteskDSPro-55Rg.otf",
  variable: "--font-neue",
});
const sans = Sans({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-sans",
});

const display = Display({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-big-shoulders-display",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${display.variable} ${sans.variable} ${neueFont.variable} font-neue`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
