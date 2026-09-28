import { useState } from "react";

function EducationCard({ school, year, items, tone }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={`card${revealed ? " card--revealed" : ""}`}>
      <div className="face face1">
        <div className="content">{items.map((item) => <a key={item}>{item}</a>)}</div>
      </div>
      <button type="button" className="face face2" style={{ background: tone }} aria-label={`${school}: ${revealed ? "hide" : "show"} details`} aria-expanded={revealed} onClick={() => setRevealed(!revealed)}>
        <h2>{school}</h2>
        <span className="year">{year}</span>
      </button>
    </div>
  );
}

function WorkCard({ className, title, role, period, children }) {
  const prefix = className === "NUS" ? "one" : "two";
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={`${className}${revealed ? " work--revealed" : ""}`}>
      <div className={prefix}>
        <button type="button" className={`${prefix}-front`} aria-label={`${title}: ${revealed ? "hide" : "show"} details`} aria-expanded={revealed} onClick={() => setRevealed(!revealed)}>
          <h2>{title}</h2>
          <h3>{role}</h3>
          <span className="year">{period}</span>
        </button>
        <button type="button" className={`${prefix}-back`} aria-label={`${title}: hide details`} onClick={() => setRevealed(false)}><p>{children}</p></button>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="experience test" id="experience">
      <h1 className="expHeader test">My Experience</h1>
      <div className="exp">
        <h1 className="test">Education <i className="bx bx-book-open" aria-hidden="true" /></h1>
        <div className="container test">
          <EducationCard school="National University of Singapore" year="Currently matriculated" items={["Computer Science and Statistics Double Major"]} tone="linear-gradient(45deg, orange, blue)" />
          <EducationCard school="Victoria Junior College" year="2021 - 2022" items={["Track and Field Sprints", "Singapore Schools Sports Council Color", "A Level [Biology Chemistry Math Economics] 88.875"]} tone="linear-gradient(45deg, #B3150C, #FFD97A)" />
          <EducationCard school="Victoria School" year="2017 - 2020" items={["Victoria School Distinguished Award", "Victoria School Junior Leader", "Edusave Award for Achievement, Good Leadership and Service"]} tone="linear-gradient(45deg, #e91e63, #ffeb3b)" />
        </div>
        <h1 className="test">Recent Work <i className="bx bx-briefcase-alt-2" aria-hidden="true" /></h1>
        <section className="Work test">
          <WorkCard className="NUS" title="NUS School of Computing Summer Workshop" role="Student Facilatator" period="July 2025">As a Student Facilitator, I assisted in guiding and supporting participants throughout the program. My role involved helping students with accomodations, providing clarifications during technical sessions, and ensuring a smooth and engaging learning experience.</WorkCard>
          <WorkCard className="TTAcad" title="Tinkeracademy" role="Part-Time Teacher" period="Feb 2025 - Current">At Tinkercademy under Tinkertanker, I support tech educators in guiding students through hands-on digital design workshops, with a primary focus on teaching Figma for UI/UX and prototyping. I assist in lesson delivery, and help prepare students for Tinkercademy's design-application competition.</WorkCard>
        </section>
        <div><h1 className="test">Extracurricular <i className="bx bx-globe" aria-hidden="true" /></h1></div>
      </div>
    </section>
  );
}
