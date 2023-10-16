import { useEffect, useMemo, useState } from "react";
import { useTransitionCarousel } from "react-spring-carousel";
import type { FeedbackItem } from "./Feedback.astro";
import useElementSize from "../../hooks/useElementSize";
import "./FeedbackCarousel.scss";

type FeedbackCarouselProps = {
  items: FeedbackItem[];
};

const FeedbackCard = (item: FeedbackItem) => (
  <div className="feedback_card" key={item.id}>
    <p className="feedback_card-text">{item.feedback}</p>
    <div className="feedback_card-author">
      <img src={item.image} alt={item.name} />
      <div className="feedback_card-author-info">
        <h4 className="feedback_card-author-name">{item.name}</h4>
        <span className="feedback_card-author-position">
          {item.role}, {item.company}
        </span>
      </div>
    </div>
  </div>
);

const groupArrayIntoChunks = (
  inputArray: FeedbackItem[],
  chunkSize: number,
): FeedbackItem[][] => {
  if (chunkSize <= 0) {
    // Handle invalid chunk size (zero or negative value)
    console.error("Invalid chunk size");
    return [];
  }

  const groupedArray: FeedbackItem[][] = [];
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    // Calculate the end index for the current chunk
    const endIndex = Math.min(i + chunkSize, inputArray.length);
    // Slice the input array to create a chunk
    const chunk = inputArray.slice(i, endIndex);
    // Push the chunk to the grouped array
    groupedArray.push(chunk);
  }

  console.log(groupedArray);
  return groupedArray;
};

const FeedbackCarousel = ({ items }: FeedbackCarouselProps) => {
  const [groupedFeedback, setGroupedFeedback] = useState<FeedbackItem[][]>(
    groupArrayIntoChunks(items, 4),
  );
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
  } = useTransitionCarousel({
    items: groupedFeedback.map((group, index) => ({
      id: index,
      renderItem: group.map((item) => FeedbackCard(item)),
    })),
  });

  return (
    <div id="feedback-carousel">
      {groupedFeedback?.length && carouselFragment}
      {groupedFeedback?.length}
      <div className="feedback-carousel_controls">
        {Array.from({ length: items.length }).map((_, index) => (
          <button
            key={index}
            className="feedback-carousel_dot"
            onClick={() => slideToItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
