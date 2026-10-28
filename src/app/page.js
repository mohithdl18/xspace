
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import AboutMain from "@/components/About/AboutMain";
import ProcessMain from "@/components/Process/ProcessMain";
import ProductMainDisplay from "@/components/Products/ProductMainDisplay";
import DownloadBrochure from "@/components/Download/DownloadBrochure";
import Testimonials from "@/components/Testimonials/Testimonials";
import Location from "@/components/Location/Location";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about">
        <AboutMain />
      </div>
      <ProcessMain />
      <ProductMainDisplay />
      <DownloadBrochure />
      <Testimonials />
      {/* <Location /> */}
      <Footer />

      {/* Hero section goes here */}
    </main>
  );
}
