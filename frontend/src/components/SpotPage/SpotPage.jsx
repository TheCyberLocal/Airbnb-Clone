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

  const { name, city, state, country, description, numReviews, SpotImages } =
    spot;

  const images = Object.values(SpotImages || {});
  const previewImage =
    images.find((e) => e.preview === true)?.url || "/noPreviewImg.png";
  const sideImages = images.filter((e) => e.preview === false) || [];

  while (sideImages.length < 4) {
    sideImages.push({ url: "/noMedia.png", id: sideImages.length });
  }
  console.log("finished loading images", sideImages);

  return (
    <div id="spotPage">
      <div id="title">{name}</div>
      <div id="location">{`${city}, ${state}, ${country}`}</div>
      <div id="images">
        <img id="preview" src={previewImage} alt="Preview Image" />
        <div id="sideImages">
          {sideImages.map((e) => (
            <img
              className="sideImages"
              key={e.id}
              src={e.url}
              alt="Spot Image"
            />
          ))}
        </div>
      </div>
      <div id="details">
        <span>
          <div id="details-title">{`Hosted by Firstname Lastname`}</div>
          <div id="description">{`${description}`}</div>
        </span>
        <span id="reserve">Reservations</span>
      </div>
      <div id="reviews">All Reviews Below - count {numReviews}</div>
    </div>
  );
}

export default SpotPage;
