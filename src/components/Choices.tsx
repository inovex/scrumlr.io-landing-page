import { useEffect, useState } from "react";
import "./Choices.scss";
import ProgressButton from "./ProgressButton";
import useMediaQuery from "../hooks/useMediaQuery";
import Video from "./Video";

const Choices = () => {
  const [position, setPosition] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [duration, setDuration] = useState(4000);
  const isMobile = useMediaQuery("(max-width: 850px)") ?? true;

  const setVideoDuration = (duration: number) =>
    isMobile && setDuration(duration * 1000);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  useEffect(() => {
    if (isMobile) setDuration(12012);
    else setDuration(4000);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (!isMobile ? prevPosition === 8 : prevPosition === 2) {
          return 0;
        }

        return prevPosition + 1;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [position, duration, isMobile]);

  return (
    <div className="choices" id="Features">
      <h2>Euer Board – Eure Entscheidungen.</h2>
      <p>Wählt eine beliebige Retrospektive, die zu eurem Team passt.</p>
      <div className="choices__content">
        <div className="choices__buttons">
          <ProgressButton
            icon="Edit"
            onClick={() => setPosition(0)}
            active={!isMobile ? position <= 2 : position === 0}
            duration={!isMobile ? duration * 3 : duration}
          >
            Collaborate on notes
          </ProgressButton>
          <ProgressButton
            icon="Vote"
            onClick={() => setPosition(3)}
            active={!isMobile ? position > 2 && position <= 5 : position === 1}
            duration={!isMobile ? duration * 3 : duration}
          >
            Moderate your session
          </ProgressButton>
          <ProgressButton
            icon="Columns"
            onClick={() => setPosition(6)}
            active={!isMobile ? position > 5 && position <= 8 : position === 2}
            duration={!isMobile ? duration * 3 : duration}
          >
            Customize your board
          </ProgressButton>
        </div>
        {!isMobile ? (
          <img
            src={`assets/choices/choices_${theme}_${position}.png`}
            alt={`scrumlr screenshot ${position + 1}`}
          />
        ) : (
          <Video
            className="choices__video"
            video={`assets/choices/videos/choices_${theme}_${position}.mp4`}
            handleLoadedMetadata={setVideoDuration}
          />
        )}
      </div>
    </div>
  );
};

export default Choices;
