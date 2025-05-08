'use client';
import Header from "@/components/globals/Header";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Reviews from "@/components/sections/reviews";
import Footer from "@/components/globals/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
