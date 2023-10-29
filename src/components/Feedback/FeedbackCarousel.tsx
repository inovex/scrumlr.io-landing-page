import { useMemo, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import type { FeedbackItem } from "./Feedback.astro";
import useElementSize from "../../hooks/useElementSize";
import "./FeedbackCarousel.scss";
import { useInterval } from "../../hooks/useInterval";
import FeedbackCard from "./FeedbackCard";

type FeedbackCarouselProps = {
  items: FeedbackItem[];
};

type CarouselEvent = {
  eventName: string;
  // Indicates where you're sliding to
  slideActionType: "prev" | "next";
  // Props of the next active item
  nextItem: {
    id: string;
    index: number;
  };
};

const groupArrayIntoChunks = (
  inputArray: FeedbackItem[],
  chunkSize: number,
): FeedbackItem[][] => {
  if (chunkSize <= 0) return [];

  const groupedArray: FeedbackItem[][] = [];
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    const endIndex = Math.min(i + chunkSize, inputArray.length);
    const chunk = inputArray.slice(i, endIndex);
    groupedArray.push(chunk);
  }

  return groupedArray;
};

const FeedbackCarousel = ({ items }: FeedbackCarouselProps) => {
  const [groupedFeedback, setGroupedFeedback] = useState<FeedbackItem[][]>(
    groupArrayIntoChunks(items, 4),
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const size = useElementSize("feedback-carousel");
  const availableSpace = size ? Math.floor(size.width / 400) : 1;
  const itemsPerSlide = availableSpace > 4 ? 4 : availableSpace;
  const [intervalDelay, setIntervalDelay] = useState<number | null>(8000);

  const { carouselFragment, useListenToCustomEvent, slideToItem } =
    useSpringCarousel({
      draggingSlideTreshold: 16,
      items: groupedFeedback.map((group, index) => ({
        id: index,
        renderItem: (
          <ul className="feedback-carousel_group">
            {group.map((item, index) =>
              FeedbackCard(item, index / (group.length - 1)),
            )}
          </ul>
        ),
      })),
    });

  useMemo(() => {
    setGroupedFeedback(groupArrayIntoChunks(items, itemsPerSlide || 1));
    setIntervalDelay(8000 * itemsPerSlide); // Time per slide = 8s * items per slide
  }, [items, itemsPerSlide]);

  useInterval(() => {
    if (activeSlide === groupedFeedback.length - 1) slideTo(0);
    else slideTo(activeSlide + 1);
  }, intervalDelay);

  useListenToCustomEvent((event: CarouselEvent) => {
    if (event.eventName === "onSlideStartChange")
      return setActiveSlide(event.nextItem.index);
    else if (event.eventName === "onDrag") setIntervalDelay(null); // Stop the interval
  });

  const slideTo = (index: number, clearInterval?: boolean) => {
    if (clearInterval) setIntervalDelay(null); // Stop the interval
    slideToItem(index);
    setActiveSlide(index);
  };

  return (
    <div id="feedback-carousel">
      {groupedFeedback?.length && carouselFragment}
      <div className="feedback-carousel_controls">
        {groupedFeedback.map((_, index) => {
          const distance = Math.abs(activeSlide - index);
          let dotState = "";
          if (activeSlide === index) dotState = "active";
          else if (
            distance === 3 &&
            index !== 0 &&
            index !== groupedFeedback.length - 1
          )
            dotState = "small";
          else if (distance > 3) dotState = "hidden";

          return (
            <button
              key={index}
              className={`feedback-carousel__button ${dotState}`}
              onClick={() => slideTo(index, true)}
            >
              <div className="feedback-carousel__dot" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
