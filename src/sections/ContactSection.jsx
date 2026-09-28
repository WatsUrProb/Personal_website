export default function ContactSection() {
  return (
    <section className="contact test" id="contact">
      <div className="contact-text test">
        <h2 className="test">Contact <span>Me</span></h2>
        <h4 className="test">Let's work <span className="together test">together!</span></h4>
        <p className="test">Though I am still developing as a computer scientist, I bring strong fundamentals, eagerness to learn, and a drive to grow, qualities I hope align with your vision in hiring future potential.</p>
        <ul className="contact-list test">
          <li><i className="bx bx-send test" style={{ color: "#92a9e0" }} aria-hidden="true" />jovanong04@yahoo.com.sg</li>
          <li><i className="bx bxs-phone-call test" style={{ color: "#92a9e0" }} aria-hidden="true" />+65 9298 2715</li>
        </ul>
      </div>
      <div className="contact-form test">
        <form action="" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your Email" required />
          <input type="text" placeholder="Enter your Subject" />
          <textarea name="message" id="message" cols="40" rows="10" placeholder="Enter your message!" />
          <input type="submit" value="submit" className="send" />
        </form>
      </div>
    </section>
  );
}
