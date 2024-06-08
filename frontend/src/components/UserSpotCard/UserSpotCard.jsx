import { useNavigate } from "react-router-dom";
import SpotCard from "../SpotCard";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { useModal } from "../../context/Modal";
import "./UserSpotCard.css";

function UserSpotCard({ spot }) {
  const nav = useNavigate();
  const { setModalContent } = useModal();

  return (
    <div id="user-spot-card">
      <SpotCard spot={spot} />
      <div>
        <span>
          <button
            onClick={() => nav(`/spots/${spot.id}/edit`)}
            className="user-spot-card clickable"
          >
            Update
          </button>
        </span>
        <span>
          <button
            onClick={() =>
              setModalContent(
                <ConfirmDeleteModal spotId={spot.id} itemText={"Spot"} />,
              )
            }
            className="clickable"
          >
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default UserSpotCard;
