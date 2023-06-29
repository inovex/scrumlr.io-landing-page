import {useState, useEffect} from 'react';
import classNames from 'classnames';
import './Navbar.scss';

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
        <li>Scrumlr</li>
        <li>Startseite</li>
        <li>Funktionen</li>
        <li>Über uns</li>
        <li>Board erstellen +</li>
      </ul>
    </nav>
  );
}
