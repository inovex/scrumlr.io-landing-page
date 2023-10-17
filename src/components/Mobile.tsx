import "./Mobile.scss";

export const Mobile = () => (
  <section className="mobile__section">
    <div className="mobile__image">
      <img
        className="mobile__stan"
        src={`assets/mobile/mobile_light.webp`}
        alt="Das Maskottchen Stan zeigt einen Screenshot der mobilen Version von Scrumlr"
      />
      <img
        className="mobile__background"
        src={`assets/mobile/mobile_background_light.svg`}
        alt=""
      />
    </div>
    <div className="mobile__text">
      <h2>
        Verwende Scrumlr überall und zu jeder Zeit- auch auf deinem Smartphone!
      </h2>
      <p>
        Verpasse unterwegs keine Retrospektive mehr! Verwende dazu einfach
        Scrumlr auf deinem Smartphone.
      </p>
      <img
        className="mobile__dots"
        src="assets/mobile/mobile_dots.svg"
        alt=""
      />
    </div>
  </section>
);
