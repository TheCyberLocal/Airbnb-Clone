import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { useModal } from "../../context/Modal";
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

function ReviewCard({ review, user, spotId }) {
  const { setModalContent } = useModal();

  const UserReviewButtons = () => {
    return (
      <>
        <button
          className="clickable"
          onClick={() => alert("Feature Coming Soon...")}
        >
          Update
        </button>
        <button
          className="clickable"
          onClick={() =>
            setModalContent(
              <ConfirmDeleteModal
                reviewId={review.id}
                spotId={spotId}
                itemText={"Review"}
              />
            )
          }
        >
          Delete
        </button>
      </>
    );
  };

  return (
    <div className="review-card">
      <div className="review-name">
        {review.User.firstName} {review.User.lastName}
      </div>
      <div className="review-date">{formatDate(review.createdAt)}</div>
      <div>{review.review}</div>
      {user?.id === review.User.id && <UserReviewButtons />}
    </div>
  );
}

export default ReviewCard;
