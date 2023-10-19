import { useEffect, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import type { FeedbackItem } from "./Feedback.astro";
import useElementSize from "../../hooks/useElementSize";
import "./FeedbackCarousel.scss";

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

const FeedbackCard = (item: FeedbackItem, posistionPercentage: number) => {
  const shadowOffset = !isNaN(posistionPercentage)
    ? posistionPercentage * -32 + 16
    : 0;

  return (
    <li
      className="feedback_card"
      key={item.name + item.company}
      style={{
        filter: `drop-shadow(${shadowOffset}px 30px 15px rgba(0, 0, 0, 0.07))`,
      }}
    >
      <p className="feedback_card-text">{item.feedback}</p>
      <div className="feedback_card-author">
        {item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <img src="favicon.svg" alt={item.name} />
        )}
        <div className="feedback_card-author-info">
          <h4 className="feedback_card-author-name">{item.name}</h4>
          <span className="feedback_card-author-position">
            {item.role}
            {item.role && item.company && ", "}
            {item.company}
          </span>
        </div>
      </div>
    </li>
  );
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
  const availableSpace = size ? Math.floor(size.width / 365) : 1;
  const itemsPerSlide = availableSpace > 4 ? 4 : availableSpace;

  useEffect(() => {
    setGroupedFeedback(groupArrayIntoChunks(items, 4));
  }, [items, itemsPerSlide]);

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
    slideToItem,
  } = useSpringCarousel({
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

  useListenToCustomEvent((event: CarouselEvent) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveSlide(event.nextItem.index);
    }
  });

  return (
    <div id="feedback-carousel">
      {groupedFeedback?.length && carouselFragment}
      <div className="feedback-carousel_controls">
        {groupedFeedback.map((_, index) => (
          <button
            key={index}
            className={`feedback-carousel_dot ${
              activeSlide === index ? "active" : ""
            }`}
            onClick={() => {
              slideToItem(index);
              setActiveSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
