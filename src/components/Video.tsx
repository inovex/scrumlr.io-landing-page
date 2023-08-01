// needed so that the video automatically starts on iOS
// see more here: https://github.com/facebook/react/issues/10389
import { useRef, useEffect, useMemo } from "react";

type Props = {
  className?: string;
  handleLoadedMetadata?: (duration: number) => void;
  video: string;
};

export default function Video({
  className,
  video,
  handleLoadedMetadata,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.defaultMuted = true;
  }, []);

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
      <source src={video} type="video/mp4" />
    </video>
  );
}
