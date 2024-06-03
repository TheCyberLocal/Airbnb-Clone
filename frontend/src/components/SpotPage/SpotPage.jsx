import "./SpotPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpot } from "../../store/spots";

function SpotPage() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots[spotId]);

  useEffect(() => {
    dispatch(fetchSpot(spotId));
  }, [dispatch, spotId]);

  const { name, city, state, country, description, numReviews } = spot;

  return (
    <main>
      <div className="title">{name}</div>
      <div className="location">{`${city}, ${state}, ${country}`}</div>
      <div className="images">images</div>
      <div className="details">
        <span>
          <div className="details-title">{`Hosted by Firstname Lastname`}</div>
          <div className="description">{`${description}`}</div>
        </span>
        <span className="reserve">Reservations</span>
      </div>
      <div className="reviews">All Reviews Below - count {numReviews}</div>
    </main>
  );
}

export default SpotPage;
