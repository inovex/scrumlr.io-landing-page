import { useState, useEffect } from "react";
import classNames from "classnames";
import ChangeLanguageIcon from "@icons/change-language.svg?react"
import DE from "@icons/flags/DE.svg?react";
import US from "@icons/flags/US.svg?react";
import "./UserMenu.scss";

type UserMenuProps = {
  germanLabel: string;
  englishLabel: string;
  loginLabel: string;
  logoutLabel: string;
};

const UserMenu = ({
  germanLabel,
  englishLabel,
  loginLabel,
  logoutLabel,
}: UserMenuProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`api/user`, {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!(event.target as HTMLElement).closest(".user-menu")) {
        setIsActive(false);
      }
    });
  }, []);

  const handleLogout = () => {
    fetch(`api/login`, {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      document.location.reload();
    });
  };

  return (
    <div className={classNames("user-menu", { "user-menu--active": isActive })}>
      <button
        id="user-menu__avatar"
        className="user-menu__avatar"
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
          {isAuthenticated ? (
            <li>
              <button
                id="user-menu__logout-button"
                onClick={() => handleLogout()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeOpacity=".5"
                    strokeWidth="1.5"
                    d="M11.797 9.797c0-1.344 0-1.177.261-1.69a2.4 2.4 0 0 1 1.049-1.049c.513-.261 1.186-.261 2.53-.261h5.52c1.344 0 2.015 0 2.529.261.451.23.82.597 1.05 1.049.26.513.26 1.185.26 2.526v11.528c0 1.342 0 2.012-.26 2.525-.23.452-.599.82-1.05 1.05-.513.26-1.184.26-2.525.26h-5.528c-1.341 0-2.013 0-2.526-.26a2.4 2.4 0 0 1-1.048-1.05c-.262-.513-.262-.345-.262-1.69"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="2"
                    d="m15.586 14 2.545 2.546m.009.001-2.545 2.546"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M7 16.594h9.587"
                  />
                </svg>
                <span>{logoutLabel}</span>
              </button>
            </li>
          ) : (
            <a id="user-menu__logout-button" href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity=".5"
                  strokeWidth="1.5"
                  d="M11.797 9.797c0-1.344 0-1.177.261-1.69a2.4 2.4 0 0 1 1.049-1.049c.513-.261 1.186-.261 2.53-.261h5.52c1.344 0 2.015 0 2.529.261.451.23.82.597 1.05 1.049.26.513.26 1.185.26 2.526v11.528c0 1.342 0 2.012-.26 2.525-.23.452-.599.82-1.05 1.05-.513.26-1.184.26-2.525.26h-5.528c-1.341 0-2.013 0-2.526-.26a2.4 2.4 0 0 1-1.048-1.05c-.262-.513-.262-.345-.262-1.69"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeWidth="2"
                  d="m15.586 14 2.545 2.546m.009.001-2.545 2.546"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M7 16.594h9.587"
                />
              </svg>
              <span>{loginLabel}</span>
            </a>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
