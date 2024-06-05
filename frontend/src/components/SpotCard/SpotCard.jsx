import "./SpotCard.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

function SpotCard({ spot }) {
  const nav = useNavigate();

  const { id, name, city, state, previewImage, price, avgRating } = spot;

  const starString = ` ${
    avgRating === "no reviews" ? "New" : avgRating?.toFixed(1)
  }`;

  return (
    <div
      className="spotCard clickable"
      data-tooltip-id={`my-tooltip-${id}`}
      data-tooltip-float="true"
      onClick={() => nav(`/spots/${id}`)}
    >
      <Tooltip className="my-tooltip" id={`my-tooltip-${id}`} content={name} />
      <img
        src={previewImage === "no preview" ? "/noPreviewImg.png" : previewImage}
        alt="Preview Image"
      />
      <div className="description">
        <div className="title">
          <span className="city-state">{`${city}, ${state}`}</span>
          <span className="avgRating">
            <FaStar />
            {starString}
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
