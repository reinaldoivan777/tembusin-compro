import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurValue from "@/components/home/OurValue";
import Banner from "@/components/services/Banner";
import BannerBottom from "@/components/services/BannerBottom";
import OurServices from "@/components/services/OurServices";
import Overview from "@/components/services/Overview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Tembusin",
  description:
    "Fortify Your Digital Realm with Our Mastery. Unlock unbeatable solutions for fortified protection and unwavering security in your digital domain.",
  openGraph: {
    title: "Services - Tembusin",
    description:
      "Fortify Your Digital Realm with Our Mastery. Unlock unbeatable solutions for fortified protection and unwavering security in your digital domain.",
    url: "https://tembusin.id",
    siteName: "Tembusin",
    images: [
      {
        url: "https://tembusin.id/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Services() {
  return (
    <main>
      <Header />
      <Banner />
      <Overview />
      <OurValue />
      <OurServices />
      <BannerBottom />
      <Footer />
    </main>
  );
}
