const socialIcons = {
  LinkedIn: "bxl-linkedin",
  Instagram: "bxl-instagram",
  GitHub: "bxl-github",
};

export default function SocialLinks() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jovan-ong-427450304", className: "linkedin", index: 1 },
    { label: "Instagram", href: "https://www.instagram.com/papa.ong/", className: "instagram", index: 2 },
    { label: "GitHub", href: "https://github.com/WatsUrProb", className: "github", index: 3 },
  ];

  return (
    <section className="home-science">
      {socials.map(({ label, href, className, index }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ "--i": index }} className={className} title={`go to Jovan's ${label}`}>
          <i className={`bx ${socialIcons[label]}`} aria-hidden="true" />
        </a>
      ))}
    </section>
  );
}
