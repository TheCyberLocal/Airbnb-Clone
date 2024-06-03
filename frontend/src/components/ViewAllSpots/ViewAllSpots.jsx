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
    <div id="homePage">
      {spotsArr.map((spot, i) => (
        <SpotCard key={i} spot={spot} />
      ))}
    </div>
  );
}

export default ViewAllSpots;
