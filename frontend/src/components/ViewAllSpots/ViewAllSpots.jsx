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
  return (
    <div id="view-all-spots">
      {spotsArr.map((spot, i) => {
        const properties = [
          "id",
          "name",
          "city",
          "state",
          "previewImage",
          "price",
          "avgRating",
        ];
        const validSpot = properties.every((prop) => spot[prop] !== undefined);
        return validSpot ? <SpotCard key={i} spot={spot} /> : null;
      })}
    </div>
  );
}

export default ViewAllSpots;
