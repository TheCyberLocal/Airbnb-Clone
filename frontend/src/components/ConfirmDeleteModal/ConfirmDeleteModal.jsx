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
      console.log("trying to delete review");
      deleteReview(reviewId).then(() => dispatch(fetchReviews(spotId)));
      console.log("review deleted successfully");
    }
  };

  return (
    <div id="delete-spot-modal">
      <h1 className="delete-spot-modal">Confirm Delete</h1>
      <h2 className="delete-spot-modal">
        Are you sure you want to remove this {itemText.toLowerCase()}?
      </h2>
      <button
        onClick={handleDelete}
        id="yes"
        className="delete-spot-modal clickable"
      >
        Yes (Delete {itemText})
      </button>
      <button
        onClick={closeModal}
        id="no"
        className="delete-spot-modal clickable"
      >
        No (Keep {itemText})
      </button>
    </div>
  );
}

export default ConfirmDeleteModal;