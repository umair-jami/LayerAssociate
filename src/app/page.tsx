import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "../components/about/page";
import Practices from "../components/practices/page";
import Service from "../components/services/page";
import Feedback from "../components/feedback/page";
import Contact from "../components/contact/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Practices />
      <Service />
      <Feedback />
      <Contact />
    </>
  );
}
