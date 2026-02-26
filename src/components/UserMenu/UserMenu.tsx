import { useState, useEffect } from "react";
import classNames from "classnames";
import ChangeLanguageIcon from "@icons/change-language.svg?react"
import DE from "@icons/flags/DE.svg?react";
import FR from "@icons/flags/FR.svg?react";
import US from "@icons/flags/US.svg?react";
import "./UserMenu.scss";

type UserMenuProps = {
  germanLabel: string;
  englishLabel: string;
  frenchLabel: string;
};

const UserMenu = ({
  germanLabel,
  englishLabel,
  frenchLabel
}: UserMenuProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!(event.target as HTMLElement).closest(".user-menu")) {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <div className={classNames("user-menu", { "user-menu--active": isActive })}>
      <button
        id="user-menu__change-language-button"
        className="user-menu__change-language-button"
        onClick={() => setIsActive((curr) => !curr)}
      >
        <div className="user-menu__icon-container">
          <ChangeLanguageIcon className="user-menu__icon"/>
        </div>
      </button>
      <div id="user-menu__dropdown" className="user-menu__dropdown">
        <ul>
          <li>
            <a href="/de">
              <DE className="user-menu__flag" aria-label={germanLabel} />
              <span>{germanLabel}</span>
            </a>
          </li>
          <li>
            <a href="/">
              <US className="user-menu__flag" aria-label={englishLabel} />
              <span>{englishLabel}</span>
            </a>
          </li>
          <li>
            <a href="/fr">
              <FR className="user-menu__flag" aria-label={frenchLabel} />
              <span>{frenchLabel}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
