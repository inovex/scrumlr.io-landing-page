import type { FeedbackItem } from "./Feedback.astro";

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

export default FeedbackCard;
