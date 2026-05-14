"use client";
import { useState } from "react";
import FadeIn from "./animations/FadeIn";

const Phone = "/assets/Phone.svg";
const Email = "/assets/Email.svg";
const Map = "/assets/MapPin.svg";
const Send = "/assets/PaperPlaneRight.svg";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "8f785619-3cf4-43e1-8d63-821bbdb92632");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <FadeIn direction="right">
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-subheading">Let's start a conversation.</p>
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
        </FadeIn>
        <FadeIn direction="left" delay={0.2}>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input name="name" className="form-input" type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input name="email" className="form-input" type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-field">
                <label className="form-label">Organization</label>
                <input name="organization" className="form-input" type="text" placeholder="Enter your organization" />
              </div>
              <div className="form-field">
                <label className="form-label">Subject</label>
                <input name="subject" className="form-input" type="text" placeholder="e.g. Pricing" />
              </div>
              <div className="form-field full">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-textarea" placeholder="Type Your Message" rows={5} required />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "20px", marginTop: "10px" }}>
              {submitStatus === "success" && (
                <span style={{ color: "#4ade80", fontSize: "14px", textAlign: "right" }}>
                  Message Submitted Successfully
                </span>
              )}
              {submitStatus === "error" && (
                <span style={{ color: "#f87171", fontSize: "14px" }}>Something went wrong. Please try again.</span>
              )}

              <button type="submit " className="btn-submit items-baseline" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
                {!isSubmitting && (
                  <span>
                    <img src={Send} alt="" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
