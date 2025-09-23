import Follow from "@/components/Follow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-bimbo">
      <Hero url='/image.jpg' />
      <Follow />
      <Footer />
    </div>
  );
}
