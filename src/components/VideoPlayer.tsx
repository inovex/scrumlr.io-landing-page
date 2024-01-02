import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import ProgressButton from "./ProgressButton";
import useMediaQuery from "../hooks/useMediaQuery";
import Video from "./Video";
import Icon from "./Icon";
import "../views/Choices/Choices.scss";

type Props = {
  textContent: {
    buttonCollab: string;
    buttonModerate: string;
    buttonCustomize: string;
    screenshotAlt: string;
    buttonPrevVidLabel: string;
    buttonNextVidLabel: string;
    buttonFirstVidLabel: string;
    buttonSecondVidLabel: string;
    buttonThirdVidLabel: string;
  };
};

const VideoPlayer = (props: Props) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.75,
    rootMargin: "0px",
  });

  const [position, setPosition] = useState(0);
  const theme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const [duration, setDuration] = useState(4000);
  const isMobile = useMediaQuery("(max-width: 850px)") ?? true;

  const setVideoDuration = (duration: number) =>
    isMobile && setDuration(duration * 1000);

  useEffect(() => {
    setPosition(0);
    if (isMobile) setDuration(12012);
    else setDuration(4000);
  }, [isMobile]);

  useEffect(() => {
    if (!entry?.isIntersecting) return;
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (!isMobile ? prevPosition === 8 : prevPosition === 2) {
          return 0;
        }

        return prevPosition + 1;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [position, duration, isMobile, entry?.isIntersecting]);

  return (
    <div className="choices__content" ref={ref}>
      <div className="choices__buttons">
        <ProgressButton
          icon="Edit"
          onClick={() => setPosition(0)}
          active={!isMobile ? position <= 2 : position === 0}
          paused={!entry?.isIntersecting}
          duration={!isMobile ? duration * 3 : duration}
        >
          {props.textContent.buttonCollab}
        </ProgressButton>
        <ProgressButton
          icon="Vote"
          onClick={() => setPosition(3)}
          active={!isMobile ? position > 2 && position <= 5 : position === 1}
          paused={!entry?.isIntersecting}
          duration={!isMobile ? duration * 3 : duration}
        >
          {props.textContent.buttonModerate}
        </ProgressButton>
        <ProgressButton
          icon="Columns"
          onClick={() => setPosition(6)}
          active={!isMobile ? position > 5 && position <= 8 : position === 2}
          paused={!entry?.isIntersecting}
          duration={!isMobile ? duration * 3 : duration}
        >
          {props.textContent.buttonCustomize}
        </ProgressButton>
      </div>
      <div className="choices__image-wrapper">
        {!isMobile && (
          <picture>
            <source
              srcSet={`/assets/choices/choices_${theme}_${position}.webp`}
              type="image/webp"
            />
            <img
              src={`/assets/choices/choices_${theme}_${position}.png`}
              height="290"
              width="680"
              className="choices__image"
              alt={`${props.textContent.screenshotAlt} ${position + 1}`}
            />
          </picture>
        )}
      </div>
      <div className="choices__video-wrapper">
        <button
          className="choices__video-button choices__video-button--left"
          disabled={position === 0}
          onClick={() => setPosition(position - 1)}
          aria-label={props.textContent.buttonPrevVidLabel}
        >
          <Icon name="Chevron" />
        </button>
        {isMobile && (
          <Video
            className="choices__video"
            paused={!entry?.isIntersecting}
            video={`/assets/choices/videos/choices_${theme}_${position}`}
            handleLoadedMetadata={setVideoDuration}
          />
        )}
        <button
          className="choices__video-button choices__video-button--right"
          disabled={position === 2}
          onClick={() => setPosition(position + 1)}
          aria-label={props.textContent.buttonNextVidLabel}
        >
          <Icon name="Chevron" />
        </button>
        <ul className="choices__video-position-buttons">
          <li>
            <button
              className="choices__video-position-button--0"
              disabled={position === 0}
              onClick={() => setPosition(0)}
              aria-label={props.textContent.buttonFirstVidLabel}
            />
          </li>

          <li>
            <button
              className="choices__video-position-button--1"
              disabled={position === 1}
              onClick={() => setPosition(1)}
              aria-label={props.textContent.buttonSecondVidLabel}
            />
          </li>
          <li>
            <button
              className="choices__video-position-button--2"
              disabled={position === 2}
              onClick={() => setPosition(2)}
              aria-label={props.textContent.buttonThirdVidLabel}
            />
          </li>
        </ul>
      </div>
      <img
        src="/assets/backgrounds/bg_cloud_light--left.svg"
        alt=""
        className="choices__cloud choices__cloud--left"
      />
      <img
        src="/assets/backgrounds/bg_cloud_light--right.svg"
        alt=""
        className="choices__cloud choices__cloud--right"
      />
    </div>
  );
};

export default VideoPlayer;
