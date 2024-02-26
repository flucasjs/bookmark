import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cards from "@/components/Cards";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Header />
      <Hero />
      <Features />
      <Cards />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  )
}
