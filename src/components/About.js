import FadeIn from "./animations/FadeIn";
const ABOUT_IMG = "/assets/AboutImage.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-card">
          <FadeIn direction="up" className="about-text">
            <h2 className="about-heading">About VYE Comms</h2>
            <p>
              A strong online presence is essential for the success of any
              organization. At VYE Comms, we understand the unique challenges
              government and non-government entities face in this space and offer
              tailored digital communications solutions to help them achieve
              their goals.
            </p>
            <p>
              Our approach is rooted in a deep understanding of the public sector
              landscape, combined with data analytics, strategic thinking, and
              creative solutions. We work closely with our clients to identify
              their specific needs and develop customized strategies to reach
              their target audience effectively.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="about-image-wrap">
            <img src={ABOUT_IMG} alt="VYE Comms Technology" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
