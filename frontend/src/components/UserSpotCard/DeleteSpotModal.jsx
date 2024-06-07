import { deleteSpot, fetchMySpots } from "../../store/spots";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import "./DeleteSpotModal.css";

function DeleteSpotModal({ spotId }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteSpot(spotId).then(() => dispatch(fetchMySpots()));
    closeModal();
  };

  return (
    <div id="delete-spot-modal">
      <h1 className="delete-spot-modal">Confirm Delete</h1>
      <h2 className="delete-spot-modal">
        Are you sure you want to remove this spot?
      </h2>
      <button
        onClick={handleDelete}
        id="yes"
        className="delete-spot-modal clickable"
      >
        Yes (Delete Spot)
      </button>
      <button
        onClick={closeModal}
        id="no"
        className="delete-spot-modal clickable"
      >
        No (Keep Spot)
      </button>
    </div>
  );
}

export default DeleteSpotModal;
