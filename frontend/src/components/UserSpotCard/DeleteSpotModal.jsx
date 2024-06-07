import "./DeleteSpotModal.css";
import { useModal } from "../../context/Modal";

function DeleteSpotModal() {
  const { closeModal } = useModal();

  return (
    <div id="delete-spot-modal">
      <h1 className="delete-spot-modal">Confirm Delete</h1>
      <h2 className="delete-spot-modal">
        Are you sure you want to remove this spot?
      </h2>
      <button
        onClick={() => alert("feature coming soon...")}
        id="yes"
        className="delete-spot-modal clickable"
      >
        Yes (Delete Spot)
      </button>
      <button
        onClick={() => closeModal()}
        id="no"
        className="delete-spot-modal clickable"
      >
        No (Keep Spot)
      </button>
    </div>
  );
}

export default DeleteSpotModal;
