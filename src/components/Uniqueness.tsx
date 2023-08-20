import "./Uniqueness.scss";

export const Uniqueness = () => {
  return (
    <section className="uniqueness__wrapper">
      <h2>Was macht Scrumlr so besonders?</h2>
      <p>
        Scrumlr fördert eine ausgewogene Zusammenarbeit innerhalb jedes Teams.{" "}
      </p>
      <div className="uniqueness__section">
        <div className="uniqueness__image">
          <img
            src="assets/uniqueness/uniqueness_light_0.webp"
            className="uniqueness__image-0"
            alt="uniqueness"
          />
        </div>
        <div className="uniqueness__text">
          <h3>Schnellstart: ohne Registrierung und kostenlos</h3>
          <p>
            Starte direkt und unverbindlich, ohne aufwändige Registrierung oder
            Anmeldung. Scrumlr ist außerdem kostenlos – für immer!
          </p>
          <img
            src="assets/uniqueness/dots_light_0.svg"
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
            src="assets/uniqueness/dots_light_1.svg"
            alt=""
            className="uniqueness__section-dots--1"
          />
        </div>
        <div className="uniqueness__image">
          <img
            src="assets/uniqueness/uniqueness_light_1.webp"
            className="uniqueness__image-1"
            alt="uniqueness"
          />
        </div>
      </div>
      <div className="uniqueness__section">
        <div className="uniqueness__image">
          <img
            src="assets/uniqueness/uniqueness_light_2.webp"
            className="uniqueness__image-2"
            alt="uniqueness"
          />
        </div>
        <div className="uniqueness__text">
          <h3>Meinungen und Gedanken übersichtlich sammeln</h3>
          <p>
            Transparente Kommunikation ist wichtig. Mit Scrumlr könnt ihr
            Meinungen, Gedanken und Ideen miteinander verknüpfen.
          </p>
          <img
            src="assets/uniqueness/dots_light_2.svg"
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
            src="assets/uniqueness/dots_light_3.svg"
            alt=""
            className="uniqueness__section-dots--3"
          />
        </div>
        <div className="uniqueness__image">
          <img
            src="assets/uniqueness/uniqueness_light_3.webp"
            className="uniqueness__image-3"
            alt="uniqueness"
          />
        </div>
      </div>
    </section>
  );
};
