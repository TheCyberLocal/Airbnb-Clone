import "./ViewAllSpots.css";
import SpotCard from "../SpotCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSpots } from "../../store/spots";

function ViewAllSpots() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots);
  const spotsArr = Object.values(spots);

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  const validateSpot = (spot) => {
    const properties = [
      "id",
      "name",
      "city",
      "state",
      "previewImage",
      "price",
      "avgRating",
    ];
    return properties.every((prop) => spot[prop] !== undefined);
  };

  return (
    <div id="view-all-spots">
      {spotsArr.map((spot, i) => {
        return validateSpot(spot) ? <SpotCard key={i} spot={spot} /> : null;
      })}
    </div>
  );
}

export default ViewAllSpots;
