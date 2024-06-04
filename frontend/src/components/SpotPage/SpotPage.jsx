import "./SpotPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpot } from "../../store/spots";
import { fetchReviews } from "../../store/reviews";
import { FaStar } from "react-icons/fa";
import ReviewCard from "../ReviewCard";

function SpotPage() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots[spotId]);
  const reviews = useSelector((state) => state.reviews[spotId]);
  const reviewsArr = Object.values(reviews || {});

  useEffect(() => {
    dispatch(fetchSpot(spotId));
    dispatch(fetchReviews(spotId));
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
  const stars =
    avgStarRating === "no reviews" ? "New" : avgStarRating?.toFixed(1);

  const imagesArr = Object.values(SpotImages || {});
  const previewImage =
    imagesArr.find((e) => e.preview === true)?.url || "/noPreviewImg.png";
  const sideImages = imagesArr.filter((e) => e.preview === false) || [];

  while (sideImages.length < 4) {
    sideImages.push({ url: "/noMedia.png", id: `demo${sideImages.length}` });
  }

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
                    <FaStar />
                    {stars === "New"
                      ? " New"
                      : ` ${stars} • ${numReviews} reviews`}
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
        <div id="reviews-head">
          <FaStar />
          {stars === "New" ? " New" : ` ${stars} • ${numReviews} reviews`}
        </div>
        {reviewsArr.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    )
  );
}

export default SpotPage;
