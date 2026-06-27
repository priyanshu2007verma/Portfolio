import HeroContent from "./HeroContent";
import HeroGlobe from "./HeroGlobe";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
    >
      <div
        className="
        mx-auto

        flex

        w-full
        max-w-7xl

        flex-col

        items-center

        gap-16

        px-6
        py-24

        md:px-10

        lg:flex-row
        lg:justify-between
        lg:gap-8
        lg:px-12
        "
      >
        {/* Left */}

        <div className="order-2 w-full lg:order-1 lg:w-[52%]">
          <HeroContent />
        </div>

        {/* Right */}

        <div className="order-1 flex w-full justify-center lg:order-2 lg:w-[48%]">
          <HeroGlobe />
        </div>
      </div>
    </section>
  );
}