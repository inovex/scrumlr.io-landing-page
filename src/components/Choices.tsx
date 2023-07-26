import { useEffect, useState } from "react";
import "./Choices.scss";
import ProgressButton from "./ProgressButton";

const Choices = () => {
  const [position, setPosition] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === 8) {
          return 0;
        }

        return prevPosition + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="choices" id="Features">
      <h2>Your board - your choices.</h2>
      <p>Choose any type of retrospective that suits your team.</p>
      <div className="choices__content">
        <div className="choices__buttons">
          <ProgressButton
            icon="Edit"
            onClick={() => setPosition(0)}
            active={position <= 2}
          >
            Collaborate on notes
          </ProgressButton>
          <ProgressButton
            icon="Vote"
            onClick={() => setPosition(3)}
            active={position > 2 && position <= 5}
          >
            Moderate your session
          </ProgressButton>
          <ProgressButton
            icon="Columns"
            onClick={() => setPosition(6)}
            active={position > 5 && position <= 8}
          >
            Customize your board
          </ProgressButton>
        </div>
        <img
          src={`assets/choices/choices_${theme}_${position}.png`}
          alt={`scrumlr screenshot ${position + 1}`}
        />
      </div>
    </div>
  );
};

export default Choices;
