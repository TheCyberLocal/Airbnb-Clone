import { deleteSpot, fetchMySpots } from "../../store/spots";
import { deleteReview, fetchReviews } from "../../store/reviews";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ reviewId, spotId, itemText }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleDelete = () => {
    closeModal();
    if (itemText === "Spot") {
      deleteSpot(spotId).then(() => dispatch(fetchMySpots()));
    } else if (itemText === "Review") {
      deleteReview(reviewId).then(() => dispatch(fetchReviews(spotId)));
    } else if (itemText === "Booking") {
      // TODO
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
