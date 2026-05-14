import FadeIn from "./animations/FadeIn";
const mbrf = "/assets/mbrf.svg";
const kf = "/assets/kf.svg";
const uae = "/assets/uae.svg";
const sandpiper = "/assets/sandpiper.svg";
const prime = "/assets/prime.svg";
const apco = "/assets/apco.svg";
const offline = "/assets/offline.svg";


const PartnerLogo = ({ src }) => (
  <div className="partner-logo">
    <img src={src} alt="Partner Logo" style={{ height: "50px", width: "auto", objectFit: "contain" }} />
  </div>
);

const logos = [mbrf, kf, uae, sandpiper, prime, apco, offline];

export default function Partners() {
  return (
    <section className="partners">
      <FadeIn direction="up">
        <div style={{ overflow: "hidden" }}>
          <div className="partners-track">
            {[...logos, ...logos].map((src, i) => (
              <PartnerLogo key={i} src={src} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
