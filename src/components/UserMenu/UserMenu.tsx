import {useState, useEffect} from "react";
import classNames from "classnames";
import "./UserMenu.scss";

type UserMenuProps = {
  germanLabel: string;
  englishLabel: string;
  logoutLabel: string;
};

const UserMenu = ({germanLabel, englishLabel, logoutLabel}: UserMenuProps) => {

  const serverUrl = "http://localhost:8080";

  const [isActive, setIsActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`${serverUrl}/user`, {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  const handleLogout = () => {
    fetch(`${serverUrl}/login`, {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      document.location.reload();
    });
  }

  return (
    <div className={classNames("user-menu", {"user-menu--active": isActive})}>
      <button id="user-menu__avatar" className="user-menu__avatar" onClick={() => setIsActive(curr => !curr)}>
        <img src="/assets/images/Stan.png" alt="Stan Scrumlr" />
      </button>
      <div id="user-menu__dropdown" className="user-menu__dropdown">
        <ul>
          <li>
            <a href="/de">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_5171_55845" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_5171_55845)">
                  <path d="M0 21.5625L16.0438 19.9688L32 21.5625V32H0V21.5625Z" fill="#FFDA44"/>
                  <path d="M0 10.4375L15.9375 9L32 10.4375V21.5625H0V10.4375Z" fill="#D80027"/>
                  <path d="M0 0H32V10.4375H0V0Z" fill="#333333"/>
                </g>
              </svg>
              <span>{germanLabel}</span>
            </a>
          </li>
          <li>
            <a href="/en">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_5171_55862" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                  <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_5171_55862)">
                  <path d="M0 16L16 0H32V3.48125L30.7062 5.6375L32 7.65V11.825L30.675 13.8687L32 16V20.175L30.5 22.1562L32 24.35V28.5187L15.8062 30.2875L0 28.5187V24.35L1.69375 22.2687L0 20.175V16Z" fill="#EEEEEE"/>
                  <path d="M16 16.0031H32V11.8281H14.8062L16 16.0031ZM14.8062 7.65312H32V3.48438H14.8062V7.65312ZM32 32.0031V28.5219H0V32.0031H32ZM0 24.3531H32V20.1781H0V24.3531Z" fill="#D80027"/>
                  <path d="M0 0H16V16H0V0Z" fill="#0052B4"/>
                  <path d="M0.9375 0.90625L0.43125 2.5H-1.25L0.10625 3.4875L-0.4125 5.08125L0.9375 4.09375L2.2875 5.08125L1.775 3.49375L3.1375 2.5H1.4625L0.9375 0.90625ZM6.675 0.90625L6.15625 2.5H4.48125L5.8375 3.4875L5.31875 5.08125L6.675 4.09375L8.03125 5.08125L7.5125 3.49375L8.875 2.5H7.2L6.675 0.90625ZM12.4187 0.90625L11.9 2.50625H10.225L11.5813 3.49375L11.0625 5.0875L12.4187 4.1L13.7688 5.08125L13.2563 3.5L14.6125 2.5H12.9375L12.4187 0.90625ZM0.9375 5.575L0.41875 7.16875H-1.25L0.10625 8.15625L-0.4125 9.75L0.9375 8.75L2.2875 9.73125L1.775 8.15L3.13125 7.15H1.4625L0.9375 5.575ZM6.675 5.575L6.15625 7.16875H4.4875L5.84375 8.15625L5.325 9.75L6.68125 8.7625L8.03125 9.74375L7.51875 8.1625L8.875 7.1625H7.2L6.675 5.575ZM12.4125 5.575L11.8938 7.16875H10.2188L11.575 8.15625L11.0562 9.75L12.4125 8.7625L13.7625 9.74375L13.25 8.1625L14.6062 7.1625H12.9375L12.4125 5.575ZM0.9375 10.225L0.41875 11.8188H-1.25L0.1 12.8125L-0.41875 14.4062L0.9375 13.4125L2.29375 14.4L1.775 12.8125L3.13125 11.8188H1.45625L0.9375 10.225ZM6.675 10.225L6.15625 11.8188H4.48125L5.8375 12.8125L5.31875 14.4062L6.675 13.4187L8.03125 14.4062L7.5125 12.8188L8.86875 11.825H7.19375L6.675 10.225ZM12.4125 10.225L11.8938 11.8188H10.2188L11.575 12.8062L11.0562 14.4L12.4125 13.4125L13.7688 14.4L13.25 12.8125L14.6062 11.8188H12.9375L12.4125 10.225Z" fill="#EEEEEE"/>
                </g>
              </svg>
              <span>{englishLabel}</span>
            </a>
          </li>
          {isAuthenticated && (<li>
            <button id="user-menu__logout-button" onClick={() => handleLogout()}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7969 9.79688C11.7969 8.45275 11.7969 8.62042 12.0585 8.10703C12.2886 7.65544 12.6554 7.28856 13.107 7.05846C13.6204 6.79688 14.293 6.79688 15.6371 6.79688H21.1571C22.5012 6.79688 23.1724 6.79688 23.6857 7.05846C24.1373 7.28856 24.5055 7.65544 24.7355 8.10703C24.9969 8.61992 24.9969 9.29167 24.9969 10.6332V22.1612C24.9969 23.5027 24.9969 24.1734 24.7355 24.6863C24.5055 25.1379 24.1373 25.5055 23.6857 25.7355C23.1729 25.9969 22.5021 25.9969 21.1606 25.9969H15.6332C14.2917 25.9969 13.6199 25.9969 13.107 25.7355C12.6554 25.5055 12.2886 25.1376 12.0585 24.686C11.7969 24.1726 11.7969 24.341 11.7969 22.9969" stroke="#333948" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5859 14L18.1315 16.5456" stroke="#313949" stroke-width="2" stroke-linecap="square"/>
                <path d="M18.1406 16.5469L15.595 19.0925" stroke="#313949" stroke-width="2" stroke-linecap="square"/>
                <path d="M7 16.5938H16.5868" stroke="#313949" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>{logoutLabel}</span>
            </button>
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default UserMenu;
