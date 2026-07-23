import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import GoogleMap from "../components/home/GoogleMap";
import SEO from "../components/seo/SEO";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Contact />
      <GoogleMap />
      <SEO
            title="YUGA Document Consultancy Centre | Property Registration & Legal Documentation | Namakkal"
            description="YUGA Document Consultancy Centre provides Property Registration, Patta Transfer, Encumbrance Certificate (EC), Legal Documentation, Bank Loan Documentation and Government Documentation Services across Namakkal District, Tamil Nadu."
            keywords="
            Property Registration Namakkal,
            Patta Transfer Namakkal,
            Document Consultancy Namakkal,
            Encumbrance Certificate Namakkal,
            Legal Documentation Namakkal,
            Bank Loan Documentation Namakkal,
            Property Registration Tamil Nadu"
        />
    </>
  );
}