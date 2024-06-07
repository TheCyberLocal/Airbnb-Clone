import { useNavigate } from "react-router-dom";
import SpotCard from "../SpotCard";
import "./UserSpotCard.css";

function UserSpotCard({ spot }) {
  const nav = useNavigate();

  return (
    <div id="user-spot-card">
      <SpotCard spot={spot} />
      <div>
        <span>
          <button
            onClick={() => nav(`/spots/${spot.id}/edit`)}
            className="user-spot-card"
          >
            Update
          </button>
        </span>
        <span>
          <button className="user-spot-card">Delete</button>
        </span>
      </div>
    </div>
  );
}

export default UserSpotCard;
