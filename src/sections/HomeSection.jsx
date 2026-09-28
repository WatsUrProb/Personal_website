import SocialLinks from "../components/SocialLinks";
import { useTypingEffect } from "../hooks/useOriginalInteractions";

const typedWords = ["NUS Student", "Learner", "Ponderer", "Hardworker"];

export default function HomeSection() {
  const typedText = useTypingEffect(typedWords);

  return (
    <section className="home test">
      <div className="home-content test">
        <h3>Hello there, I am</h3>
        <h1>Jovan</h1>
        <h3>and I am a ...<span className="text">{typedText}</span></h3>
        <p>
          I am currently in NUS Computer Science. This is a mini website I built to
          experience familiarising with front-end development and web designing.
        </p>
        <SocialLinks />
        <a href={`${import.meta.env.BASE_URL}assets/JovanCV.pdf`} className="btn-box liquid" target="_blank" rel="noopener noreferrer">
          More About Me
        </a>
      </div>
    </section>
  );
}
