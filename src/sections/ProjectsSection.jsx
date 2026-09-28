const projects = [
  {
    title: "SDTH Garudians",
    category: "Counter-drone simulation",
    description:
      "A team-built urban counter-drone simulator for SDTH 2026. Autonomous interceptors use their own sensors and a signed radio mesh to coordinate launches and assign targets across a 3D Singapore city model.",
    image: "assets/sdth-docker-simulation.png",
    imageAlt: "SDTH simulator running in Docker, showing the Toa Payoh map, interceptor tracks, and exercise results",
    imageNote: "Screenshot of the simulator running in Docker",
    repo: "https://github.com/tommyquak/SDTH-Garudians",
  },
  {
    title: "CAPT Open House 2026",
    category: "Event website",
    description:
      "A responsive React website for the CAPT Open House, bringing together event details, tours, sample classes, directions and admissions information for visitors.",
    image: "assets/capt-open-house-live.png",
    imageAlt: "Live CAPT Open House homepage showing its welcome message, mascot, and event details",
    imageNote: "Screenshot of the live Vercel website",
    liveUrl: "https://openhouse.captlife.com/",
    repo: "https://github.com/CAPT-OpenHouse-2026/website2026",
  },
];

export default function ProjectsSection() {
  return (
    <section className="serviceTest">
      <div className="services test" id="services">
        <h1 className="sub-title test">My past <span className="test">Projects</span></h1>
        <div className="project-list test">
          {projects.map((project) => (
            <article className="project-card test" key={project.title}>
              <div className="project-image-wrap">
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} loading="lazy" />
              </div>
              <div className="project-card-content">
                <span className="project-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className="project-image-note">{project.imageNote}</span>
                <div className="project-card-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="read" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live website`}>
                      View live site <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a href={project.repo} className="read" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository on GitHub`}>
                    View GitHub repo <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
