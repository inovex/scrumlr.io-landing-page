import { Facebook } from "../../icons/Facebook";
import { Github } from "../../icons/Github";
import { Instagram } from "../../icons/Instagram";
import { Linkedin } from "../../icons/Linkedin";
import { Podcast } from "../../icons/Podcast";
import { X } from "../../icons/X";
import { Xing } from "../../icons/Xing";
import { Inovex } from "../../icons/Inovex";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <img
          src="icons/inovex-outline.svg"
          alt="inovex"
          className="footer__logo"
        />
        <div className="footer__left">
          <h2 className="footer__heading">inovex GmbH</h2>
          <p className="footer__inovex-description">
            inovex entwickelt kreative und individuelle
            <br /> Lösungen für die digitale Welt.
          </p>
          <ul className="footer__external-links">
            <li>
              <a href="https://inovex.de" target="_blank" aria-label="inovex">
                <Inovex />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/inovex"
                target="_blank"
                aria-label="github"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/inovex/"
                target="_blank"
                aria-label="linkedin"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.xing.com/companies/inovexgmbh"
                target="_blank"
                aria-label="xing"
              >
                <Xing />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/inovexgmbh"
                target="_blank"
                aria-label="X"
              >
                <X />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/inovexlife/"
                target="_blank"
                aria-label="instagram"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/inovexde"
                target="_blank"
                aria-label="facebook"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://digital-future.podigee.io/"
                target="_blank"
                aria-label="Podcast"
              >
                <Podcast />
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
              <a href="/Legal/Privacy">Datenschutz</a>
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
