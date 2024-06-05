import "./ReviewCard.css";

const MONTHS = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

function formatDate(dateTime) {
  // Examples
  // "2024-01-01" => "January 2024"
  // "2024-06-01" => "June 2024"
  // "2024-12-01" => "December 2024"
  const year = dateTime.slice(0, 4);
  const month = +dateTime.slice(5, 7);
  const monthName = MONTHS[month];
  return `${monthName} ${year}`;
}

function ReviewCard({ review }) {
  const formattedDate = formatDate(review.createdAt);

  return (
    <div className="review-card">
      <div className="review-name">{review.User.firstName}</div>
      <div className="review-date">{formattedDate}</div>
      <div className="review-text">{review.review}</div>
    </div>
  );
}

export default ReviewCard;
