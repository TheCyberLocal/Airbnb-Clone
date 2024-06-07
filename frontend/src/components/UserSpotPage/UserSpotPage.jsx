import "./UserSpotPage.css";
import UserSpotCard from "../UserSpotCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMySpots } from "../../store/spots";

function UserSpotPage() {
  const dispatch = useDispatch();
  const mySpots = useSelector((state) => state.spots.mySpots);
  const mySpotsArr = Object.values(mySpots || {});

  useEffect(() => {
    dispatch(fetchMySpots());
  }, [dispatch]);

  return (
    <div id="user-spot-page">
      <h1>Manage Spots</h1>
      <div id="user-spot-container">
        {mySpotsArr.map((spot, i) => (
          <UserSpotCard key={i} spot={spot} />
        ))}
      </div>
    </div>
  );
}

export default UserSpotPage;
