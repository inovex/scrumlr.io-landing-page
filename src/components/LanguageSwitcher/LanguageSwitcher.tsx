
function LanguageSwitcher({ lang }: { lang: string }) {

  return (
    <div className="language-switcher__container">
      <button className="language-switcher__button">
        {lang === 'de' ? <German /> : <English />}
      </button>

      <menu className="language-switcher__dropdown">
        <li className="language-switcher__dropdown-item">
          <a href="/en">
            <English />
            <span>English</span>
          </a>
        </li>
        <li className="language-switcher__dropdown-item">
          <a href="/de">
            <German />
            <span>Deutsch</span>
          </a>
        </li>
      </menu>
    </div>
  );

}
