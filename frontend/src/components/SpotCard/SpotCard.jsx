import "./SpotCard.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function SpotCard({ spot }) {
  const nav = useNavigate();
  const { id, city, state, previewImage, price, avgRating } = spot;

  return (
    <div className="spotCard clickable" onClick={() => nav(`/spots/${id}`)}>
      <img
        src={previewImage === "no preview" ? "/noPreviewImg.png" : previewImage}
        alt="Preview Image"
      />
      <div className="description">
        <div className="title">
          <span className="city-state">{`${city}, ${state}`}</span>
          <span className="avgRating">
            <FaStar />
            {" " + avgRating?.toFixed(1)}
          </span>
        </div>
        <div className="details">
          <b>${price}</b> night
        </div>
      </div>
    </div>
  );
}

export default SpotCard;
