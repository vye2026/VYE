const LOGO = "/assets/FooterLogo.svg";
const Facebook = "/assets/facebook.svg";
const Insta = "/assets/instagramLogo.svg"
const Linkedin = "/assets/linkedin.svg"
const X = "/assets/XLogo.svg"

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <img src={LOGO} alt="VYE Comms" />
          </div>
          <p className="footer-tagline">
            At VYE, we offer you a wide range of digital communications solutions
          </p>
        </div>
        <nav className="footer-nav">
          <a href="#about">About VYE</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact Us</a>
          <a href="#about">Our Partners</a>
        </nav>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 VYE. All rights reserved.</p>
        <div className="social-icons">
          <div className="bg-[#022140]/70 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#022140]">
            <a href="https://www.facebook.com/profile.php?id=61573027712409" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-[#022140]/70 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#022140]">
            <a href="https://www.instagram.com/vye.comms/" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-[#022140]/70 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#022140]">
            <a href="https://www.linkedin.com/company/vyecomms" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin" className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-[#022140]/70 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#022140]">
            <a href="https://x.com/vyecomms?s=21" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="X" className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
