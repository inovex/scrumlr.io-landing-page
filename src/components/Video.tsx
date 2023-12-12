// needed so that the video automatically starts on iOS
// see more here: https://github.com/facebook/react/issues/10389
import { useRef, useEffect, useMemo } from "react";

type Props = {
  className?: string;
  video: string;
  paused: boolean;
  handleLoadedMetadata?: (duration: number) => void;
};

export default function Video({
  className,
  video,
  paused,
  handleLoadedMetadata,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.defaultMuted = true;
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (paused) videoRef.current.pause();
      else videoRef.current.play();
    }
  }, [paused]);

  const key = useMemo(() => video, [video]);

  return (
    <video
      key={key}
      className={className}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
      onLoadedMetadata={() => {
        if (videoRef.current && handleLoadedMetadata)
          handleLoadedMetadata(videoRef.current.duration);
      }}
      height="100%"
      width="80%"
    >
      <source src={`${video}.webm`} type="video/webm" />
      <source src={`${video}.mp4`} type="video/mp4" />
    </video>
  );
}
