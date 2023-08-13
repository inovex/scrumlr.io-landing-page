import {useState, useEffect} from 'react';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { Logo } from '../Logo';
import './Navbar.scss';

export const Navbar = () => {
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
          <a aria-label='Startseite' href=''>
            <Logo />
          </a>
        </li>
        <li>
          <a href='#home'>
            Startseite
          </a>
        </li>
        <li>
          <a href='#functions'>
            Funktionen
          </a>
        </li>
        <li>
          <a href='#about'>
            Über uns
          </a>
        </li>
        <li>
          <Button
            ariaLabel='Board erstellen'
            className='navbar__button'
            icon={<img src='/assets/icons/icon-plus.svg' alt="Plus" />}
          >
            Board erstellen
          </Button>
        </li>
      </ul>
    </nav>
  );
}
