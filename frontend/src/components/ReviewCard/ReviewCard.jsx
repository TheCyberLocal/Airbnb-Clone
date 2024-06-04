import "./ReviewCard.css";

function ReviewCard({ review }) {
  const dateCreated = review.createdAt.split("T")[0];

  return (
    <div className="review-card">
      <div className="review-name">{review.User.firstName}</div>
      <div className="review-date">{dateCreated}</div>
      <div className="review-text">{review.review}</div>
    </div>
  );
}

export default ReviewCard;
