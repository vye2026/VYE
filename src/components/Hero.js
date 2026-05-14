import FadeIn from "./animations/FadeIn";
const HERO_IMG = "/assets/HeroImage.svg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <FadeIn direction="right" className="hero-content">
          <div className="inline-block px-4 py-2 bg-[#00A4FF]/20 text-white mb-[8px] rounded-[4] font-pirulen text-[11px] tracking-widest uppercase">DIGITAL IMPACT</div>
          <h1 className="hero-title">Digital Communication Solutions</h1>
          <p className="hero-desc">
            Develop need-based differentiated strategies and tactics to drive successful digital communications solutions that strengthen audience engagement, improve visibility, and deliver measurable impact
          </p>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </FadeIn>
        <FadeIn direction="left" delay={0.2} className="hero-image">
          <img src={HERO_IMG} alt="Digital Communication Solutions" />
        </FadeIn>
      </div>
    </section>
  );
}
