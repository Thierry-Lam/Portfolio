import type { ReactNode } from "react";
import "./legal-pages.css";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="legal-section" aria-labelledby={`legal-${slugify(title)}`}>
      <h2 id={`legal-${slugify(title)}`}>{title}</h2>
      {children}
    </section>
  );
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type LegalPageProps = {
  title: string;
  eyebrow: string;
  intro: string;
  children: ReactNode;
};

function LegalPage({ title, eyebrow, intro, children }: LegalPageProps) {
  return (
    <main id="contenu-principal" tabIndex={-1} className="legal-page section-wrap">
      <header className="legal-page__header">
        <span className="section-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="legal-page__intro">{intro}</p>
      </header>

      <div className="legal-page__content">{children}</div>

      <nav className="legal-page__navigation" aria-label="Pages légales">
        <a href="/Portfolio/mentions-legales">Mentions légales</a>
        <a href="/Portfolio/confidentialite">Confidentialité</a>
        <a href="/Portfolio/cookies">Cookies et traceurs</a>
      </nav>

      <p className="legal-page__back">
        <a href="/Portfolio/">← Retour à l’accueil</a>
      </p>
    </main>
  );
}

/**
 * Brouillon à valider avant publication : les informations sur l'éditeur,
 * l'hébergeur et les traitements doivent être confirmées.
 */
export function MentionsLegales() {
  return (
    <LegalPage
      eyebrow="INFORMATIONS DU SITE"
      title="Mentions légales"
      intro="Les informations relatives à l’édition, à l’hébergement et à l’utilisation de ce portfolio personnel."
    >
      <LegalSection title="Édition du site">
        <p>
          Ce site est un portfolio personnel présentant le parcours, les compétences
          et les projets de Thierry Lam. Il est édité à titre personnel et n’a pas
          vocation à proposer une activité commerciale via ce site.
        </p>
        <p>
          <strong>Éditeur :</strong> Thierry Lam
          <br />
          <strong>Contact :</strong>{" "}
          <a href="mailto:thierry-lam@hotmail.fr">thierry-lam@hotmail.fr</a>
        </p>
        <p className="legal-note">
          À vérifier avant publication : le régime applicable aux éditeurs non
          professionnels permet, sous certaines conditions, de préserver certaines
          informations personnelles. Confirmer les mentions requises et les
          informations déjà communiquées à l’hébergeur. Ne pas ajouter une adresse
          personnelle sans avoir vérifié qu’elle est nécessaire.
        </p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Le site est hébergé par le service GitHub Pages :</p>
        <address>
          GitHub, Inc.
          <br />
          88 Colin P. Kelly Jr. Street
          <br />
          San Francisco, CA 94107
          <br />
          États-Unis
        </address>
        <p>
          Site de l’hébergeur :{" "}
          <a href="https://pages.github.com/" target="_blank" rel="noreferrer">
            GitHub Pages
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Sauf mention contraire, les textes et éléments originaux réalisés pour ce
          portfolio sont présentés par leur auteur. Les noms, marques, jeux,
          captures, illustrations et autres ressources appartenant à des tiers
          restent la propriété de leurs titulaires respectifs.
        </p>
        <p>
          Pour toute question concernant un contenu publié sur ce site, vous pouvez
          contacter l’éditeur par e-mail.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export function Confidentialite() {
  return (
    <LegalPage
      eyebrow="DONNÉES PERSONNELLES"
      title="Politique de confidentialité"
      intro="Comment les informations peuvent être traitées lorsque vous consultez ce portfolio ou contactez son éditeur."
    >
      <LegalSection title="Responsable et contact">
        <p>
          Pour les traitements dont il détermine les finalités et les moyens,
          le responsable est Thierry Lam. Pour toute question relative aux données
          personnelles, vous pouvez écrire à{" "}
          <a href="mailto:thierry-lam@hotmail.fr">thierry-lam@hotmail.fr</a>.
        </p>
      </LegalSection>

      <LegalSection title="Messages envoyés par e-mail">
        <p>
          Le site ne comporte pas de formulaire de contact : le lien de contact ouvre
          votre application de messagerie. Si vous choisissez d’envoyer un message,
          les informations que vous fournissez seront utilisées pour en prendre
          connaissance et vous répondre, le cas échéant.
        </p>
        <p>
          Les modalités de conservation dépendent notamment du contenu et du suivi de
          l’échange. Elles doivent être limitées à ce qui est nécessaire à la gestion
          de la demande et aux obligations applicables.
        </p>
      </LegalSection>

      <LegalSection title="Hébergement et journaux techniques">
        <p>
          Le site est hébergé par GitHub Pages. L’hébergeur indique que des données
          techniques, dont des adresses IP, peuvent être enregistrées dans des
          journaux à des fins de sécurité et de fonctionnement du service. Ces
          traitements relèvent également des conditions et politiques de GitHub.
        </p>
        <p>
          Pour en savoir plus, consultez la{" "}
          <a
            href="https://docs.github.com/fr/pages/getting-started-with-github-pages/what-is-github-pages"
            target="_blank"
            rel="noreferrer"
          >
            documentation GitHub Pages
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Polices de caractères externes">
        <p>
          Le site charge les polices Audiowide et Press Start 2P depuis Google Fonts.
          Le chargement de ces ressources provoque une requête vers les serveurs de
          Google, qui peuvent recevoir des informations techniques comme l’adresse IP
          et des données liées à la requête.
        </p>
        <p>
          Consultez la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            politique de confidentialité de Google
          </a>{" "}
          pour les informations relatives aux services Google.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Selon la situation et les traitements concernés, vous pouvez disposer de
          droits d’accès, de rectification, d’effacement, de limitation ou d’opposition.
          Pour exercer une demande, contactez l’éditeur par e-mail en précisant votre
          demande. Vous pouvez également consulter le site de la{" "}
          <a href="https://www.cnil.fr/" target="_blank" rel="noreferrer">
            CNIL
          </a>
          .
        </p>
      </LegalSection>

      <p className="legal-note">
        À vérifier avant publication : compléter cette page après un contrôle réel des
        requêtes réseau, cookies, stockages du navigateur et éventuels services tiers.
        Ne pas ajouter de durée de conservation ou de garantie d’absence de collecte
        sans éléments vérifiés.
      </p>
    </LegalPage>
  );
}

export function Cookies() {
  return (
    <LegalPage
      eyebrow="TRACEURS ET STOCKAGE"
      title="Cookies et traceurs"
      intro="Informations sur les cookies et autres technologies susceptibles d’être utilisés pendant la navigation."
    >
      <LegalSection title="État des vérifications">
        <p>
          Le code et les dépendances consultés ne font pas apparaître de solution
          d’analyse d’audience ou de formulaire de contact. Cette observation ne
          constitue toutefois pas une vérification exhaustive des cookies et des
          requêtes réellement effectuées par le site publié.
        </p>
      </LegalSection>

      <LegalSection title="Polices externes">
        <p>
          Le site charge des polices via Google Fonts. Une requête externe ne signifie
          pas, à elle seule, qu’un cookie est déposé. Le comportement exact doit être
          contrôlé dans le navigateur, notamment les cookies, le stockage local et les
          requêtes réseau associés au chargement de la page.
        </p>
      </LegalSection>

      <LegalSection title="Consentement et réglages">
        <p>
          Certains traceurs nécessitent un consentement préalable ; d’autres peuvent
          bénéficier d’une exemption selon leur finalité et leurs conditions
          d’utilisation. La nécessité d’un bandeau de consentement doit donc être
          déterminée à partir des traceurs réellement utilisés, et non supposée.
        </p>
        <p>
          Vous pouvez gérer ou supprimer les cookies depuis les paramètres de votre
          navigateur. Le blocage de certaines ressources peut toutefois modifier le
          rendu ou le fonctionnement du site.
        </p>
        <p>
          Pour les règles applicables, consultez la page de la{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies"
            target="_blank"
            rel="noreferrer"
          >
            CNIL consacrée aux cookies et autres traceurs
          </a>
          .
        </p>
      </LegalSection>

      <p className="legal-note">
        Brouillon à confirmer avant publication : effectuer un contrôle dans un
        navigateur propre et mettre à jour cette page si des outils, intégrations ou
        traceurs sont ajoutés au portfolio.
      </p>
    </LegalPage>
  );
}
