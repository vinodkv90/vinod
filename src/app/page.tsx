import Follow from "@/components/Follow";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="font-bimbo">
      <Hero url='/image.jpg' />
      <Follow />
    </div>
  );
}
