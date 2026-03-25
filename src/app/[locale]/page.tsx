import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import LiveStreaming from "@/components/LiveStreaming";
import Infrastructure from "@/components/Infrastructure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <LiveStreaming />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
