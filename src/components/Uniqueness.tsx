import { useEffect, useState } from "react";
import "./Uniqueness.scss";

export const Uniqueness = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <section className="uniqueness__wrapper">
      <h2>Was macht Scrumlr so besonders?</h2>
      <p>
        Scrumlr fördert eine ausgewogene Zusammenarbeit innerhalb jedes Teams.
      </p>
      <div className="uniqueness__section uniqueness__section--left">
        <div className="uniqueness__image">
          <img
            src={`assets/uniqueness/uniqueness_${theme}_0.webp`}
            className="uniqueness__image-0"
            alt="Ein Beispiel für die Auswahl unterschiedlicher Templates"
          />
        </div>
        <div className="uniqueness__text">
          <h3>Schnellstart: ohne Registrierung und kostenlos</h3>
          <p>
            Starte direkt und unverbindlich, ohne aufwändige Registrierung oder
            Anmeldung. Scrumlr ist außerdem kostenlos – für immer!
          </p>
          <img
            src={`assets/uniqueness/dots_${theme}_0.svg`}
            alt=""
            className="uniqueness__section-dots--0"
          />
        </div>
      </div>
      <div className="uniqueness__section uniqueness__section--right">
        <div className="uniqueness__text">
          <h3>Individuelle Denkweisen mit dem Team teilen</h3>
          <p>
            Dieses Tool ist der beste Weg, Ideen miteinander auszutauschen und
            sich als Team weiterzuentwickeln.
          </p>
          <img
            src={`assets/uniqueness/dots_${theme}_1.svg`}
            alt=""
            className="uniqueness__section-dots--1"
          />
        </div>
        <div className="uniqueness__image">
          <img
            src={`assets/uniqueness/uniqueness_${theme}_1.webp`}
            className="uniqueness__image-1"
            alt="Mehrere User auf einem Scrumlr-Board, die einzelne Karten erstellt und Votes hinterlassen haben"
          />
        </div>
      </div>
      <div className="uniqueness__section uniqueness__section--left">
        <div className="uniqueness__image">
          <img
            src={`assets/uniqueness/uniqueness_${theme}_2.webp`}
            className="uniqueness__image-2"
            alt="Ein Beispiel dafür, dass User-generierte Notes in Spalten organisiert und aufeinander gestapelt werden können"
          />
        </div>
        <div className="uniqueness__text">
          <h3>Meinungen und Gedanken übersichtlich sammeln</h3>
          <p>
            Transparente Kommunikation ist wichtig. Mit Scrumlr könnt ihr
            Meinungen, Gedanken und Ideen miteinander verknüpfen.
          </p>
          <img
            src={`assets/uniqueness/dots_${theme}_2.svg`}
            alt=""
            className="uniqueness__section-dots--2"
          />
        </div>
      </div>
      <div className="uniqueness__section uniqueness__section--right">
        <div className="uniqueness__text">
          <h3>Open Source & sicher gehostet in Deutschland</h3>
          <p>
            Scrumlr ist ein Open-Source-Software, deren Quelldaten eingesehen,
            geändert und von Dritten verwendet werden können.
          </p>
          <img
            src={`assets/uniqueness/dots_${theme}_3.svg`}
            alt=""
            className="uniqueness__section-dots--3"
          />
        </div>
        <div className="uniqueness__image">
          <img
            src={`assets/uniqueness/uniqueness_${theme}_3.webp`}
            className="uniqueness__image-3"
            alt="Open-Source, Security und das Hosting in Deutschland stehen bei Scrumlr im Mittelpunkt"
          />
        </div>
      </div>
    </section>
  );
};
