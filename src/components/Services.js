const Social = "/assets/SocialImage.png";
const ContentImage = "/assets/ContentImage.png"
const Video = "/assets/VideoImage.png"
const Media = "/assets/MediaImage.png"
const PerformanceImage = "/assets/PerformanceImage.png"
const WebImage = "/assets/WebImage.png"
const TranslationImage = "/assets/TranslationImage.png"

const services = [
  {
    title: "Social Media Management",
    desc: "Our approach to social media management is focused on generating clear, platform-specific narratives that captivate and educate users. We simplify complex topics into engaging and accessible content and ensure messages resonate deeply with the intended audience. Using advanced analytics, we tailor our strategies to enhance visibility, foster community building, and stimulate active participation across all digital platforms.",
    img: Social,
    reverse: false,
  },
  {
    title: "Creative Content",
    desc: "Our creative services are designed to capture the essence of our client's message and transform it into compelling narratives that resonate with their target audience. We specialize in creating dynamic and engaging content that stands out in today's fast-paced digital landscape. From video content that tells powerful stories to insightful infographics that simplify complex topics, we aim to craft content that informs and inspires action.",
    img: ContentImage,
    reverse: true,
  },
  {
    title: "Video Production",
    desc: "Our video production services are designed to raise awareness about key issues central to our client's missions. We combine storytelling with high-quality visuals and sound to create videos that captivate and educate audiences. From scripting to post-production, every stage of the video creation process is planned and executed to ensure the final product is visually appealing, emotionally resonant, and thought-provoking.",
    img: Video,
    reverse: false,
  },
  {
    title: "Media Monitoring",
    desc: "Effective communication requires strategic foresight and a proactive stance in the media landscape. Our team uses digital tools to monitor traditional and social media narratives, providing our clients real-time insights and analyses. We track conversations, trends, and public sentiments related to our client's messaging that help them strategically address potential concerns or capitalize on opportunities to engage with the audience.",
    img: Media,
    reverse: true,
  },
  {
    title: "Performance Marketing",
    desc: "Simply creating great content is not enough. It is equally important to reach the right audience and engage with them effectively. At VYE Comms, we use data-driven strategies to optimize content distribution and target specific demographics, ensuring our client's message reaches the right audience at the right time. From social media advertising to media buying, we seek to maximize the impact and drive meaningful engagement.",
    img: PerformanceImage,
    reverse: false,
  },
  {
    title: "Web Development",
    desc: "We assist clients in developing and maintaining their online presence through web development services. We create fully functional and visually appealing websites that align with the brand identity of the client's business. Our approach integrates the latest web technologies, search engine optimization (SEO) strategies, and data security protocols. With the user in mind, we ensure that the website architecture supports easy navigation and a high degree of personalization.",
    img: WebImage,
    reverse: true,
  },
  {
    title: "Translation",
    desc: "Translations must be accurate, culturally sensitive, and linguistically nuanced to appeal to local markets. We have highly skilled translators who are well-versed in industry-specific terminology and possess a deep understanding of the cultural nuances of different markets. With our expertise in localization and transcreation, we help clients tailor their messaging to resonate with local audiences while maintaining brand consistency.",
    img: TranslationImage,
    reverse: false,
  },
];

function ServiceCard({ svc }) {
  return (
    <div className={`service-card${svc.reverse ? " reverse" : ""}`}>
      <div className="service-card-bg">
        <img src="/assets/service-lines.svg" alt="" className="service-lines-bg" />
      </div>
      <div className="service-img">
        <img src={svc.img} alt={svc.title} />
      </div>
      <div className="service-text">
        <h3 className="service-title">{svc.title}</h3>
        <p className="service-desc">{svc.desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <h2 className="services-label">
            How We Help Our Clients
          </h2>
          <p className="services-sublabel">Specialized Digital Communication Solutions</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {services.map((svc) => (
            <ServiceCard key={svc.title} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
