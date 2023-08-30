import { Button } from "../../components/Button/Button";
import "./AboutUs.scss";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__scrumlr">
        <div className="about-us__scrumlr-text">
          <h2>Wir sind Scrumlr</h2>
          <p>
            Mit dem Scruml-Tool geben wir jedem Team die Möglichkeit einer
            zielgerichteten Retrospektive. Wir streben danach, Kommunikation,
            agile Vorgehensweisen und fachspezifische Expertise
            zusammenzubringen. Jedes einzelne Teammitglied und dessen Meinung
            zählt – denn nur so kann allgemeine Zufriedenheit erreicht werden.
            <br />
            <br />
            <span className="bold">Seid auch dabei</span> und ermöglicht eurem
            Team einen wirkungsvollen Rückblick auf bereits Erlebtes!
          </p>
        </div>
        <div className="about-us__scrumlr-image">
          <img
            src="/assets/about/stan.webp"
            alt="Das Faultier Stan mit einer Kaffeetasse und einem Stift"
          />
        </div>
        <img
          className="about-us__background"
          src="/assets/about/background_light.svg"
          alt=""
        />
        <img
          className="about-us__background-details"
          src="/assets/about/background_details_light.svg"
          alt=""
        />
      </div>
      <div className="about-us__cta">
        <h2>Selber loslegen und überzeugen lassen.</h2>
        <p>
          Startet noch heute und ermöglicht euch eine einwandfreie
          Retrospektive.
        </p>
        <Button ariaLabel="Jetzt loslegen" className="about-us__cta-button">
          Jetzt loslegen
        </Button>
      </div>
    </section>
  );
};
