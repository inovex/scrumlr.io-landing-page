import {useState, useEffect} from 'react';
import classNames from 'classnames';
import './Navbar.scss';
import { Button } from './Button/Button';
import { Logo } from './Logo';

export default function Navbar() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsNavbarTransparent(false);
      } else {
        setIsNavbarTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={classNames('navbar', {'navbar--opaque': !isNavbarTransparent})}>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <a href="">
            Startseite
          </a>
        </li>
        <li>
          <a href="">
            Funktionen
          </a>
        </li>
        <li>
          <a href="">
            Über uns
          </a>
        </li>
        <li>
          <Button>
            Board erstellen +
          </Button>
        </li>
      </ul>
    </nav>
  );
}
