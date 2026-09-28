export default function AboutSection() {
  return (
    <section className="about test">
      <div className="about-img test">
        <img src={`${import.meta.env.BASE_URL}assets/profile.jpg`} alt="Jovan Ong" />
      </div>
      <div className="about-text" id="about">
        <h2 className="test">About<span className="test"> Me</span></h2>
        <h4 className="test">Web Developer</h4>
        <p className="test">
          I have some basic experience in web development. I’ve worked with HTML, CSS, and a bit of JavaScript to create simple web pages and understand how websites are structured. While I’m still learning, I enjoy experimenting with layouts and interactive elements, and I’m looking forward to improving my skills and taking on more complex projects in the future.
        </p>
        <a href={`${import.meta.env.BASE_URL}assets/JovanCV.pdf`} className="btn-box liquid" target="_blank" rel="noopener noreferrer">
          <span className="button">My Resume</span>
        </a>
      </div>
    </section>
  );
}
