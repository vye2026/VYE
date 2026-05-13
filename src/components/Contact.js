"use client";

const Phone = "/assets/phone.svg";
const Email = "/assets/Email.svg";
const Map = "/assets/MapPin.svg";
const Send = "/assets/PaperPlaneRight.svg";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div>
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-subheading">We are always listening to our clients</p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <img src={Phone} alt="" />
              <span>+971 555013274</span>
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="" />
              <span>INFO@VYECOMMS.COM</span>
            </div>
            <div className="contact-info-item">
              <img src={Map} alt="" />
              <span>Address: Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" placeholder="Enter your name" />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="Enter phone email" />
            </div>
            <div className="form-field">
              <label className="form-label">Organization</label>
              <input className="form-input" type="text" placeholder="Enter your organization" />
            </div>
            <div className="form-field">
              <label className="form-label">Subject</label>
              <input className="form-input" type="text" placeholder="e.g. Pricing" />
            </div>
            <div className="form-field full">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Type Your Message" rows={5} />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className="btn-submit">
              Submit
              <span>
                <img src={Send} alt="" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
