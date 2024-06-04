import "./SpotPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpot } from "../../store/spots";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

function SpotPage() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots[spotId]);
  console.log("spot", spot);

  useEffect(() => {
    dispatch(fetchSpot(spotId));
  }, [dispatch, spotId]);

  const {
    name,
    city,
    state,
    country,
    description,
    avgStarRating,
    price,
    numReviews,
    SpotImages,
  } = spot || {};

  const images = Object.values(SpotImages || {});
  const previewImage =
    images.find((e) => e.preview === true)?.url || "/noPreviewImg.png";
  const sideImages = images.filter((e) => e.preview === false) || [];

  while (sideImages.length < 4) {
    sideImages.push({ url: "/noMedia.png", id: sideImages.length });
  }
  console.log("finished loading images", sideImages);

  return (
    spot && (
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
          <div id="hostedBy">
            <div id="title">{`Hosted by Firstname Lastname`}</div>
            <div id="description">{`${description}`}</div>
          </div>
          <div id="reserve">
            <div id="reserve-card">
              <div id="reserve-card-head">
                <div id="reserve-card-price">${price}</div>
                <div id="reserve-card-text">
                  <span id="reserve-card-text1">night</span>
                  <span id="reserve-card-text2">
                    <FaStar /> {avgStarRating?.toFixed(1) || "N/A"}
                    <LuDot />
                    {numReviews} reviews
                  </span>
                </div>
              </div>
              <button
                onClick={() => alert("Feature Coming Soon...")}
                className="clickable"
                id="reserve-card-button"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
        <div id="reviews">All Reviews Below - count {numReviews}</div>
      </div>
    )
  );
}

export default SpotPage;
