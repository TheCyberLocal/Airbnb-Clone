import { deleteSpot, fetchMySpots } from "../../store/spots";
import { deleteReview, fetchReviews } from "../../store/reviews";
import { useModal } from "../../context/Modal";
import { csrfFetch } from "../../store/csrf";
import { useDispatch } from "react-redux";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ reviewId, spotId, bookingId, itemText }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleDelete = () => {
    closeModal();
    if (itemText === "Spot") {
      deleteSpot(spotId).then(() => dispatch(fetchMySpots()));
    } else if (itemText === "Review") {
      deleteReview(reviewId).then(() => dispatch(fetchReviews(spotId)));
    } else if (itemText === "Booking") {
      csrfFetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => dispatch(fetchReviews(spotId)));
    }
  };

  return (
    <div id="confirm-delete-modal">
      <h1>Confirm Delete</h1>
      <h2>Are you sure you want to remove this {itemText.toLowerCase()}?</h2>
      <button onClick={handleDelete} id="yes" className="clickable">
        Yes (Delete {itemText})
      </button>
      <button onClick={closeModal} id="no" className="clickable">
        No (Keep {itemText})
      </button>
    </div>
  );
}

export default ConfirmDeleteModal;
