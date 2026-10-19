import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Gamepad2,
  Layers3,
  Sparkles,
  Terminal,
  GraduationCap,
  Box,
  Filter,
} from "lucide-react";

import {
  MentionsLegales,
  Confidentialite,
  Cookies,
} from "./LegalPages";

type Project = {
  number: string;
  slug: string;
  title: string;
  category: "Web" | "Jeu vidéo" | "Modélisation 3D";
  year: string;
  description: string;
  technologies: string[];
  visual: string;
  image: string;
  visualLabel: string;
  role: string;
  details: string[];
  browserBuildPath?: string;
  windowsUrl?: string;
  macosUrl?: string;
  buildStatus?: string;
  itchUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    slug: "thierry-lam-portfolio",
    title: "Thierry Lam — Portfolio",
    category: "Web",
    year: "2026",
    description:
      "Conception et développement de mon CV-portfolio interactif pour présenter mon parcours, mes compétences, mes formations et mes projets en développement web et en programmation de jeux vidéo. Son interface rétro-futuriste inspirée des bornes d’arcade met en valeur mon identité professionnelle et mes réalisations.",
    technologies: ["React", "TypeScript", "Vite", "HTML5", "CSS3"],
    visual: "visual-memory",
    image: "/Portfolio/projects/memories-of-yesteryears.jpg",
    visualLabel: "Aperçu du CV-portfolio Thierry Lam",
    role: "Conception et développement front-end",
    details: [
      "Conception d’une interface de portfolio à l’identité visuelle rétro-futuriste inspirée des bornes d’arcade.",
      "Création de sections pour présenter mon profil, mes compétences, mon parcours et mes projets.",
      "Développement de l’interface avec React et TypeScript, avec Vite pour l’environnement de développement.",
      "Mise en forme en CSS avec une attention portée à la lisibilité et à l’adaptation aux différentes tailles d’écran.",
    ],
  },
  {
    number: "02",
    slug: "alien-puzzle",
    title: "Alien Puzzle",
    itchUrl: "https://jimmy-lambourion.itch.io/alien-puzzle",
    category: "Jeu vidéo",
    year: "2020",
    description:
      "Jeu de puzzle développé avec Unity et C#, avec des mécaniques de gameplay, des interactions et une intégration d’assets 3D.",
    technologies: ["Unity", "C#", "Gameplay", "UI"],
    visual: "visual-puzzle",
    image: "/Portfolio/projects/alien-puzzle.jpg",
    visualLabel: "Formes géométriques colorées en trois dimensions",
    role: "Développement de jeu vidéo",
    details: [
      "Mise en place de mécaniques de puzzle et d’interactions.",
      "Utilisation de Unity et C#.",
      "Intégration d’assets 3D dans le projet.",
    ],
    buildStatus: "Les versions navigateur et les téléchargements sont en préparation.",
  },
  {
    number: "03",
    slug: "planet-prospector",
    title: "Planet Prospector",
    itchUrl: "https://thierry-lam.itch.io/planet-prospector",
    category: "Jeu vidéo",
    year: "2018",
    description:
      "Projet de jeu de survie avec un système d’inventaire et une intégration d’assets et de textures.",
    technologies: ["Unity", "C#", "Système d’inventaire"],
    visual: "visual-planet",
    image: "/Portfolio/projects/planet-prospector.jpg",
    visualLabel: "Planète stylisée dans un univers spatial",
    role: "Développement de jeu vidéo",
    details: [
      "Conception d’éléments d’un jeu de survie.",
      "Travail autour d’un système d’inventaire.",
      "Intégration d’assets et de textures.",
    ],
    buildStatus: "Les versions navigateur et les téléchargements sont en préparation.",
  },
  {
    number: "04",
    slug: "docus",
    title: "Docus",
    category: "Jeu vidéo",
    year: "À préciser",
    description:
      "Projet de shoot’em up comprenant notamment un menu, le comportement des ennemis et le contrôle du joueur.",
    technologies: ["Unity", "C#", "Gameplay", "UI"],
    visual: "visual-docus",
    image: "/Portfolio/projects/docus.jpg",
    visualLabel: "Univers de science-fiction sombre et lumineux",
    role: "Développement de jeu vidéo",
    details: [
      "Développement du contrôle du joueur.",
      "Travail sur le comportement des ennemis.",
      "Création ou intégration d’un menu de jeu.",
    ],
  },
  {
    number: "05",
    slug: "sorcerers-ring",
    title: "Sorcerer's Ring",
    itchUrl: "https://thierry-lam.itch.io/sorcerers-ring",
    category: "Jeu vidéo",
    year: "À préciser",
    description:
      "Projet de jeu vidéo. Cette page sera complétée avec sa présentation détaillée, les éléments de gameplay et les informations techniques confirmées.",
    technologies: ["À préciser"],
    visual: "visual-sorcerers-ring",
    image: "/Portfolio/projects/sorcerers-ring.jpg",
    visualLabel: "Visuel de Sorcerer's Ring",
    role: "À préciser",
    details: [
      "La présentation du projet sera complétée à partir des informations confirmées sur le jeu.",
      "Les détails de gameplay et les contributions techniques seront ajoutés après validation.",
    ],
    buildStatus: "Les versions navigateur et les téléchargements sont en préparation.",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Développement web",
    text: "HTML, CSS, JavaScript, React, TypeScript, Node.js, PHP",
  },
  {
    icon: Terminal,
    title: "Données & outils",
    text: "MySQL, MongoDB, Git, GitHub, Docker",
  },
  {
    icon: Gamepad2,
    title: "Création interactive",
    text: "Unity, C#, Unreal Engine, game design",
  },
  {
    icon: Layers3,
    title: "Conception visuelle",
    text: "Figma, Photoshop, interfaces et prototypage",
  },
];

const formations = [
  {
    year: "2026",
    title: "Piscine · École 42",
    text: "Initiation intensive au langage C et à PowerShell.",
  },
  {
    year: "2025",
    title: "Piscine · École 42",
    text: "Initiation intensive au langage C et à PowerShell.",
  },
  {
    year: "2024",
    title: "Développeur Web et Web Mobile · Simplon",
    text: "Formation et titre professionnel ; stage en développement web chez Ytreza-IO.",
  },
  {
    year: "2024",
    title: "SAS Testeur de Jeu Vidéo · Simplon",
    text: "Formation au métier de testeur de jeu vidéo",
  },
  {
    year: "2022 - 2023",
    title: "Formation Python · M2I",
    text: "Formation orientée web ; stage en développement jeu vidéo frontend chez Disruptive AI.",
  },
  {
    year: "2017 - 2020",
    title: "Bachelor Game Design & Creative Coding · e-artsup",
    text: "Formation orientée création numérique et projets interactifs.",
  },
  {
    year: "2016 - 2017",
    title:
      "Licence Professionnelle Informatique Industrielle, Automatisme et Productique · IUT Ville d’Avray",
    text: "Formation orientée informatique industrielle.",
  },
  {
    year: "2013 - 2015",
    title:
      "BTS Conception et Réalisation de systèmes automatiques · Lycée Technique Privé Saint-Nicolas",
    text: "Formation orientée système automatique.",
  },
  {
    year: "2010 - 2013",
    title:
      "Baccalauréat Professionnel Electrotechnique · Lycée Technique Privé Saint-Nicolas",
    text: "Formation orientée électricité.",
  },
];

const experiences = [
  {
    period: "01—05.2026",
    title: "Hôte de caisse",
    company: "Carrefour Market · CDI",
    text: "Accueil des clients, orientation vers les services appropriés, transmission d’informations claires et précises, et mise en rayon.",
    tags: ["Accueil client", "Information client", "Mise en rayon", "CDI"],
  },
  {
    period: "09—10.2024",
    title: "Développeur web",
    company: "Ytreza-IO",
    text: "Conception d’un site e-commerce dynamique avec WordPress, développement d’un site associatif en HTML5, CSS et PHP, et collaboration avec l’équipe pour améliorer l’expérience utilisateur.",
    tags: ["WordPress", "HTML5", "CSS", "PHP"],
  },
  {
    period: "02.2023",
    title: "Développeur jeu vidéo front-end",
    company: "Disruptive AI",
    text: "Développement de composants de framework en JavaScript, HTML5 et CSS pour le jeu Exode, et création/intégration de scènes immersives.",
    tags: ["JavaScript", "HTML5", "CSS", "Jeu vidéo"],
  },
  {
    period: "09.2021—10.2022",
    title: "Hôte de caisse",
    company: "Carrefour Market · CDI",
    text: "Accueil des clients, orientation vers les services appropriés, transmission d’informations claires et précises, et mise en rayon.",
    tags: ["Accueil client", "Information client", "Mise en rayon", "CDI"],
  },
  {
    period: "07—12.2020",
    title: "Développeur VR/AR",
    company: "Prodware",
    text: "Conception d’éléments graphiques pour des plateformes immersives intégrant 3D, VR, AR et IoT. Travail sur la modélisation 3D temps réel et l’optimisation des interfaces.",
    tags: ["3D", "VR/AR", "IoT", "Interfaces"],
  },
  {
    period: "03—11.2016",
    title: "Hôte de caisse",
    company: "Auchan Bagnolet · CDI",
    text: "Accueil des clients, orientation vers les services appropriés, transmission d’informations claires et précises, et mise en rayon.",
    tags: ["Accueil client", "Information client", "Mise en rayon", "CDI"],
  },
  {
    period: "05—06.2014",
    title: "Stagiaire technicien de maintenance",
    company: "Fransor Industrie",
    text: "Maintenance de systèmes automatisés, fabrication de pièces mécaniques sur mesure et résolution de problèmes avec l’équipe technique.",
    tags: ["Maintenance", "Automatisme"],
  },
  {
    period: "10.2012—03.2013",
    title: "Stagiaire technicien de maintenance",
    company: "Groupe TSF",
    text: "Diagnostic de pannes sur des dispositifs électriques, gestion des pièces de rechange et organisation des tâches de maintenance.",
    tags: ["Électricité", "Diagnostic"],
  },
  {
    period: "02.2012",
    title: "Stagiaire technicien de maintenance",
    company: "Dalkia",
    text: "Entretien et remplacement d’installations d’éclairage et de sécurité, en veillant à la conformité des systèmes.",
    tags: ["Maintenance", "Sécurité"],
  },
];

function ProjectVisual({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`project-visual ${project.visual}${
        imageFailed ? " project-visual-fallback" : ""
      }`}
    >
      <img
        className="project-visual-image"
        src={project.image}
        alt={project.visualLabel}
        loading="lazy"
        decoding="async"
        onError={() => setImageFailed(true)}
        onLoad={() => setImageFailed(false)}
      />
      <span className="project-number">{project.number}</span>
      <span className="visual-caption">
        {project.category.toUpperCase()} <ArrowUpRight size={13} />
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />

      <div className="project-content">
        <div className="project-category">
          {project.category} · {project.year}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tag-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a
          className="project-link"
          href={`/Portfolio/projets/${project.slug}`}
        >
          Découvrir le projet <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [filter, setFilter] = useState("Tous");

  // Préfixe utilisé par GitHub Pages pour ce portfolio.
  const basePath = "/Portfolio";

  // On retire /Portfolio pour comparer les routes de manière cohérente.
  const pathname = decodeURI(window.location.pathname);

  const path = (
    pathname.startsWith(`${basePath}/`) || pathname === basePath
      ? pathname.slice(basePath.length)
      : pathname
  ).replace(/\/$/, "") || "/";

  // Détection des pages de détail des projets.
  const currentProject = projects.find(
    (project) => path === `/projets/${project.slug}`
  );
  const currentGame = projects.find(
    (project) => project.category === "Jeu vidéo" && path === `/jouer/${project.slug}`
  );

  const Footer = (
    <footer className="site-footer section-wrap">
      <a
        className="wordmark"
        href="/Portfolio/"
        aria-label="Thierry Lam — accueil"
      >
        TL <span>★</span>
      </a>

      <p>Conçu avec curiosité et beaucoup de café.</p>

      <a href="/Portfolio/projets">Explorer les projets ↑</a>

      {/* Liens vers les trois pages légales */}
      <nav className="footer-legal-links" aria-label="Informations légales">
        <a href="/Portfolio/mentions-legales">Mentions légales</a>
        <a href="/Portfolio/confidentialite">Confidentialité</a>
        <a href="/Portfolio/cookies">Cookies et traceurs</a>
      </nav>

      <span className="footer-copy">
        © {new Date().getFullYear()} Thierry Lam
      </span>
    </footer>
  );

  let content;

  // Pages légales
  if (path === "/mentions-legales") {
    content = <MentionsLegales />;
  } else if (path === "/confidentialite") {
    content = <Confidentialite />;
  } else if (path === "/cookies") {
    content = <Cookies />;
  } else if (path === "/projets") {
    const categories = [
      "Tous",
      "Web",
      "Jeu vidéo",
      "Modélisation 3D",
    ];

    const visibleProjects = projects.filter(
      (project) =>
        filter === "Tous" || project.category === filter
    );

    content = (
      <main id="contenu-principal" tabIndex={-1} className="page-main section-wrap">
        <div className="page-intro">
          <span className="section-kicker">
            GALERIE · PROJETS PERSONNELS
          </span>

          <h1>
            Des projets, <span className="gradient-text">des idées.</span>
          </h1>

          <p>
            Du développement web aux expériences interactives,
            découvre les projets qui composent mon parcours créatif.
          </p>
        </div>

        <div className="filter-bar" role="group" aria-label="Filtrer les projets par catégorie">
          <Filter size={16} />

          {categories.map((category) => (
            <button
              key={category}
              className={
                filter === category
                  ? "filter-chip active"
                  : "filter-chip"
              }
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {visibleProjects.length} projet{visibleProjects.length > 1 ? "s" : ""} affiché{visibleProjects.length > 1 ? "s" : ""}.
        </p>

        <div
          className="project-grid horizontal-carousel"
          role="region"
          tabIndex={0}
          aria-label="Carrousel horizontal des projets"
        >
          {visibleProjects.length ? (
            visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <div className="empty-category">
              <Box size={28} />
              <h3>Les projets 3D arrivent bientôt</h3>
              <p>
                Cette catégorie est prête à accueillir tes créations
                de modélisation.
              </p>
            </div>
          )}
        </div>

        <p className="content-note">
          <Sparkles size={15} /> Les visuels sont provisoires et
          seront remplacés par tes captures réelles.
        </p>
      </main>
    );
  } else if (path === "/formations") {
    content = (
      <main id="contenu-principal" tabIndex={-1} className="page-main section-wrap">
        <div className="page-intro">
          <span className="section-kicker">
            PARCOURS & APPRENTISSAGE
          </span>

          <h1>
            Apprendre, créer,{" "}
            <span className="gradient-text">progresser.</span>
          </h1>

          <p>
            Un parcours entre développement web, programmation de jeux
            vidéo et création numérique.
          </p>
        </div>

        <section className="formation-panel">
          <div className="formation-icon">
            <GraduationCap size={25} />
          </div>

          <div
            className="timeline formation-carousel"
            role="region"
            tabIndex={0}
            aria-label="Carrousel horizontal des formations"
          >
            {formations.map((formation, index) => (
              <div
                className="timeline-item"
                key={`${formation.year}-${formation.title}-${index}`}
              >
                <span className="timeline-year">{formation.year}</span>

                <div>
                  <strong>{formation.title}</strong>
                  <p>{formation.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  } else if (path === "/experiences") {
    content = (
      <main id="contenu-principal" tabIndex={-1} className="page-main section-wrap">
        <div className="page-intro">
          <span className="section-kicker">
            EXPÉRIENCES · MISSIONS & SAVOIR-FAIRE
          </span>

          <h1>
            Du terrain aux{" "}
            <span className="gradient-text">
              expériences numériques.
            </span>
          </h1>

          <p>
            Un aperçu de mes expériences professionnelles, du
            développement web aux environnements immersifs, en passant
            par la maintenance technique.
          </p>
        </div>

        <section className="formation-panel experience-panel">
          <div className="formation-icon">
            <Terminal size={25} />
          </div>

          <div
            className="timeline experience-carousel"
            role="region"
            tabIndex={0}
            aria-label="Carrousel horizontal des expériences"
          >
            {experiences.map((experience) => (
              <article
                className="timeline-item experience-item"
                key={`${experience.company}-${experience.period}`}
              >
                <span className="timeline-year">
                  {experience.period}
                </span>

                <div>
                  <strong>{experience.title}</strong>

                  <div className="experience-company">
                    {experience.company}
                  </div>

                  <p>{experience.text}</p>

                  <div className="tag-list">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  } else if (path === "/contact") {
    content = (
      <main id="contenu-principal" tabIndex={-1} className="page-main section-wrap">
        <div className="contact-panel contact-page-panel">
          <div className="contact-orb" />

          <span className="section-kicker">CONTACT</span>

          <h1>
            Et si on construisait
            <br />
            <span className="gradient-text">quelque chose ?</span>
          </h1>

          <p>
            Je recherche un CDI en développement web Full Stack.
            Je serais ravi d’échanger sur une opportunité, une
            collaboration ou un projet.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:thierry-lam@hotmail.fr"
            >
              M’écrire un e-mail <Mail size={17} />
            </a>

            <a
              className="button button-outline"
              href="https://github.com/KiryuZero1992"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> GitHub <ExternalLink size={13} />
            </a>

            <a
              className="button button-outline"
              href="https://www.linkedin.com/in/thierry-lam-018306155/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} /> LinkedIn{" "}
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </main>
    );
  } else if (currentGame) {
    content = (
      <main id="contenu-principal" tabIndex={-1} className="page-main section-wrap game-player-page">
        <div className="page-intro game-player-intro">
          <h1><span className="gradient-text">{currentGame.title}</span></h1>
        </div>
        {currentGame.browserBuildPath ? (
          <section className="game-frame-wrap" aria-label={`Jeu ${currentGame.title}`}>
            <iframe
              className="game-frame"
              src={currentGame.browserBuildPath}
              title={`Jouer à ${currentGame.title}`}
              allow="fullscreen; gamepad"
              allowFullScreen
            />
          </section>
        ) : (
          <section className="game-player-placeholder" aria-live="polite">
            <Gamepad2 size={42} aria-hidden="true" />
            <h2>Version navigateur en préparation</h2>
            <p>Le jeu apparaîtra ici dès que son export web sera prêt et intégré au portfolio.</p>
          </section>
        )}
        <div className="game-player-footer">
          <a className="text-link" href={`/Portfolio/projets/${currentGame.slug}`}>
            <ArrowRight size={15} /> Retour à la présentation du projet
          </a>
          <a className="text-link" href="/Portfolio/projets">Tous les projets <ArrowRight size={15} /></a>
        </div>
      </main>
    );
  } else if (currentProject) {
    const titleWords = currentProject.title.split(" ");

    content = (
      <main id="contenu-principal" tabIndex={-1} className="page-main section-wrap project-detail">
        <a className="back-link" href="/Portfolio/projets">
          <ArrowRight size={15} /> Tous les projets
        </a>

        <div className="detail-hero">
          <div>
            <span className="section-kicker">
              {currentProject.category.toUpperCase()} ·{" "}
              {currentProject.year}
            </span>

            <h1>
              {titleWords.slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">
                {titleWords.slice(-1).join(" ")}
              </span>
            </h1>

            <p>{currentProject.description}</p>

            <div className="tag-list">
              {currentProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {currentProject.category === "Jeu vidéo" && (
              <div className="game-action-list" aria-label="Jouer et télécharger le jeu">
                <a className="button button-primary browser-play-button" href={`/Portfolio/jouer/${currentProject.slug}`}>
                  <Gamepad2 size={17} /> Jouer dans le navigateur <ArrowUpRight size={13} />
                </a>
                {currentProject.itchUrl && (
                  <a className="button button-outline" href={currentProject.itchUrl} target="_blank" rel="noopener noreferrer">
                    Voir sur itch.io <ExternalLink size={13} />
                  </a>
                )}
                {currentProject.windowsUrl ? (
                  <a className="button button-outline" href={currentProject.windowsUrl} download>
                    Télécharger pour Windows <ArrowDownRight size={16} />
                  </a>
                ) : (
                  <span className="game-action-disabled" aria-disabled="true">Windows : téléchargement en préparation</span>
                )}
                {currentProject.macosUrl ? (
                  <a className="button button-outline" href={currentProject.macosUrl} download>
                    Télécharger pour macOS <ArrowDownRight size={16} />
                  </a>
                ) : (
                  <span className="game-action-disabled" aria-disabled="true">macOS : téléchargement en préparation</span>
                )}
              </div>
            )}

            {currentProject.category === "Jeu vidéo" && currentProject.buildStatus && (
              <p className="game-build-status">
                <span className="status-dot" />
                {currentProject.buildStatus}
              </p>
            )}
          </div>

          <ProjectVisual project={currentProject} />
        </div>

        <div className="detail-columns">
          <section>
            <span className="section-kicker">APERÇU DU PROJET</span>

            <h2>
              À propos de <span>ce projet.</span>
            </h2>

            {currentProject.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </section>

          <aside className="detail-aside">
            <span className="section-kicker">RÔLE</span>

            <h3>{currentProject.role}</h3>

            <span className="section-kicker">TECHNOLOGIES</span>

            <div className="tag-list">
              {currentProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <p className="content-note">
              Les captures supplémentaires, les informations techniques validées
              et les détails de développement seront ajoutés progressivement.
            </p>
          </aside>
        </div>

        <div className="detail-pagination">
          {projects
            .filter((project) => project.slug !== currentProject.slug)
            .slice(0, 2)
            .map((project) => (
              <a
                key={project.slug}
                href={`/Portfolio/projets/${project.slug}`}
              >
                Découvrir aussi : {project.title}{" "}
                <ArrowUpRight size={15} />
              </a>
            ))}
        </div>
      </main>
    );
  } else {
    content = (
      <main id="contenu-principal" tabIndex={-1}>
        <section className="hero section-wrap" id="accueil">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              PLAYER 01 · WEB & GAME DEVELOPER
            </div>

            <h1>
              Je transforme
              <br />
              les idées en{" "}
              <span className="gradient-text">expériences</span>
              <br />
              numériques.
            </h1>

            <p className="hero-intro">
              Je suis Thierry Lam, développeur web et développeur de
              jeux vidéo. Je conçois des interfaces web et des
              expériences interactives en alliant programmation,
              créativité et sens du détail.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="/Portfolio/projets"
              >
                Jouer / Explorer <ArrowDownRight size={17} />
              </a>

              <a
                className="text-link"
                href="/Portfolio/formations"
              >
                Découvrir mon parcours <ArrowRight size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <span className="meta-line" /> Ouvert aux opportunités
                en CDI
              </span>
              <span>France · disponibilité à préciser</span>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="Illustration abstraite d’un univers numérique"
            role="img"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-glow" />

            <div className="art-planet">
              <div className="planet-shine" />
            </div>

            <div className="art-ring" />
            <div className="art-grid" />

            <div className="art-label label-top">
              CREATIVE DEVELOPMENT <span>✳</span>
            </div>

            <div className="art-label label-bottom">
              <span className="label-square" />
              BUILDING DIGITAL WORLDS <ArrowUpRight size={13} />
            </div>

            <div className="art-index">
              01 <span>/</span> 04
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-space">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                OUTILS & SAVOIR-FAIRE
              </span>

              <h2>
                La technique au service <span>des idées.</span>
              </h2>
            </div>

            <p>
              Un aperçu des technologies et outils mentionnés dans mon
              parcours.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, text }, index) => (
              <article className="skill-card" key={title}>
                <div className={`skill-icon skill-icon-${index}`}>
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>

                <span className="skill-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap section-space">
          <div className="about-stamp">
            <span>WEB</span>
            <span>×</span>
            <span>CREATIVE</span>
            <span>×</span>
            <span>CODE</span>
          </div>

          <div className="about-copy">
            <span className="section-kicker">MON PARCOURS</span>

            <h2>
              Entre logique, <span>design</span> et interaction.
            </h2>

            <p>
              Mon parcours associe le développement web et la
              programmation de jeux vidéo. Je souhaite mettre mes
              compétences techniques, ma créativité et mon goût pour
              les expériences interactives au service de projets
              concrets au sein d’une équipe.
            </p>

            <div
              className="timeline formation-carousel"
              role="region"
              tabIndex={0}
              aria-label="Carrousel horizontal des formations"
            >
              {formations.map((formation, index) => (
                <div
                  className="timeline-item"
                  key={`${formation.year}-${formation.title}-${index}`}
                >
                  <span className="timeline-year">
                    {formation.year}
                  </span>

                  <div>
                    <strong>{formation.title}</strong>
                    <p>{formation.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              className="text-link"
              href="/Portfolio/formations"
            >
              Voir toutes mes formations <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <a className="skip-link" href="#contenu-principal">Aller au contenu principal</a>
      <div className="site-shell">
        <a
          className="arcade-marquee"
          href="/Portfolio/"
          aria-label="Thierry Lam · Portfolio — retour à l’accueil"
        >
          <span className="arcade-marquee-logo">
            TL <span>★</span>
          </span>

          <span className="arcade-marquee-title">
            Thierry Lam · Portfolio
          </span>
        </a>

        {content}

        <div
          className="arcade-controls"
          aria-label="Commandes physiques de navigation"
        >
          <div className="arcade-joystick" aria-hidden="true">
            <span className="joystick-ball" />
            <span className="joystick-stick" />
            <span className="joystick-base" />
          </div>

          <nav
            className="arcade-control-buttons"
            aria-label="Navigation par boutons"
          >
            <a
              className="arcade-button button-a"
              href="/Portfolio/"
              aria-current={path === "/" ? "page" : undefined}
            >
              Accueil
            </a>

            <a
              className="arcade-button button-b"
              href="/Portfolio/projets"
              aria-current={path === "/projets" ? "page" : undefined}
            >
              Projets
            </a>

            <a
              className="arcade-button button-c"
              href="/Portfolio/formations"
              aria-current={path === "/formations" ? "page" : undefined}
            >
              Formations
            </a>

            <a
              className="arcade-button button-d"
              href="/Portfolio/experiences"
              aria-current={path === "/experiences" ? "page" : undefined}
            >
              Expériences
            </a>

            <a
              className="arcade-button button-e"
              href="/Portfolio/contact"
              aria-current={path === "/contact" ? "page" : undefined}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {Footer}
    </>
  );
}

export default App;
