import { useEffect, useState } from "react";
import "./Choices.scss";
import ProgressButton from "./ProgressButton";
import useMediaQuery from "../hooks/useMediaQuery";
import Video from "./Video";
import Icon from "./Icon";

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
    setPosition(0);
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
    <section className="choices" id="features">
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
        <div className="choices__image-wrapper">
          {!isMobile && (
            <picture>
              <source
                srcSet={`assets/choices/choices_${theme}_${position}.webp`}
                type="image/webp"
              />
              <img
                src={`assets/choices/choices_${theme}_${position}.png`}
                height="290"
                width="680"
                alt={`scrumlr screenshot ${position + 1}`}
              />
            </picture>
          )}
        </div>
        <div className="choices__video-wrapper">
          <button
            className="choices__video-button choices__video-button--left"
            disabled={position === 0}
            onClick={() => setPosition(position - 1)}
            aria-label="Vorheriges Video"
          >
            <Icon name="Chevron" />
          </button>
          {isMobile && (
            <Video
              className="choices__video"
              video={`assets/choices/videos/choices_${theme}_${position}`}
              handleLoadedMetadata={setVideoDuration}
            />
          )}
          <button
            className="choices__video-button choices__video-button--right"
            disabled={position === 2}
            onClick={() => setPosition(position + 1)}
            aria-label="Nächstes Video"
          >
            <Icon name="Chevron" />
          </button>
          <ul className="choices__video-position-buttons">
            <li>
              <button
                className="choices__video-position-button--0"
                disabled={position === 0}
                onClick={() => setPosition(0)}
                aria-label="Erstes Video"
              />
            </li>

            <li>
              <button
                className="choices__video-position-button--1"
                disabled={position === 1}
                onClick={() => setPosition(1)}
                aria-label="Zweites Video"
              />
            </li>
            <li>
              <button
                className="choices__video-position-button--2"
                disabled={position === 2}
                onClick={() => setPosition(2)}
                aria-label="Drittes Video"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choices;
