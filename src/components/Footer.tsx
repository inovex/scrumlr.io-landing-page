import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <img src="icons/inovex.svg" alt="inovex" className="footer__logo" />
        <div className="footer__left">
          <h2>inovex GmbH</h2>
          <p className="footer__inovex-description">
            inovex entwickelt kreative und individuelle
            <br /> Lösungen für die digitale Welt.
          </p>
          <ul className="footer__external-links">
            <li>
              <a href="https://github.com/inovex" target="_blank">
                <img src="icons/github.svg" alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/inovex/"
                target="_blank"
              >
                <img src="icons/linkedin.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.xing.com/companies/inovexgmbh"
                target="_blank"
              >
                <img src="icons/xing.svg" alt="xing" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/inovexgmbh" target="_blank">
                <img src="icons/twitter.svg" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/inovexlife/" target="_blank">
                <img src="icons/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/inovexde" target="_blank">
                <img src="icons/facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://digital-future.podigee.io/" target="_blank">
                <img src="icons/podcast.svg" alt="podcast" />
              </a>
            </li>
          </ul>
        </div>
        <nav className="footer__right">
          <ul className="footer__internal-links">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#GetStarted">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="footer__bottom">
        <div className="footer__bottom-content">
          <ul className="footer__legal-links">
            <li>
              <a href="#Data">Datenschutz</a>
            </li>
            <li>
              <a href="#Cookies">Cookie-Richtlinien</a>
            </li>
            <li>
              <a href="#Terms">Geschäftsbedingungen</a>
            </li>
          </ul>
          <span>©2023 inovex GmbH. Alle Rechte vorbehalten.</span>
        </div>
      </nav>
    </footer>
  );
};
