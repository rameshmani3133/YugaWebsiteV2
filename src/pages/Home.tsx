import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import GoogleMap from "../components/home/GoogleMap";

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
    </>
  );
}