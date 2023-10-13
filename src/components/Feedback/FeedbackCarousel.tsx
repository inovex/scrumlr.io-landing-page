import { useSpringCarousel } from "react-spring-carousel";
import type { FeedbackItem } from "./Feedback.astro";
import "./FeedbackCarousel.scss";

type FeedbackCarouselProps = {
  items: FeedbackItem[];
};

const FeedbackCard = (item: FeedbackItem) => (
    <div className="feedback_card">
        <p className="feedback_card-text">
            {item.feedback}
        </p>
        <div className="feedback_card-author">
            <img src={item.image} alt={item.name} />
            <div className="feedback_card-author-info">
                <h4 className="feedback_card-author-name">
                    {item.name}
                </h4>
                <span className="feedback_card-author-position">
                    {item.role}, {item.company}
                </span>
            </div>
        </div>
    </div>
)

const FeedbackCarousel = ({ items }: FeedbackCarouselProps) => {
  const {
        carouselFragment,
        slideToPrevItem, 
        slideToNextItem, 
        useListenToCustomEvent
    } = useSpringCarousel({
            withLoop: true,
            itemsPerSlide: 4,
            items: items.map((item) => ({
                id: item.id,
                renderItem: <FeedbackCard {...item} />,
            })),
    });

  return <div>{carouselFragment}</div>;
};

export default FeedbackCarousel;
