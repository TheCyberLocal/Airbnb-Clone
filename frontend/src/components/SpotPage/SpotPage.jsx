import "./SpotPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpot } from "../../store/spots";
import { fetchReviews } from "../../store/reviews";
import { FaStar } from "react-icons/fa";
import ReviewCard from "../ReviewCard";
import PageNotFound from "../PageNotFound";

function formatStarString({ avgStarRating, numReviews }) {
  // Example Outputs
  // " New" for 0 reviews
  // " 4.0 • 1 Review" for 1 review
  // " 4.0 • 2 Reviews" for 2+ reviews
  const stars = avgStarRating?.toFixed(1);
  const reviewCountText = numReviews === 1 ? "Review" : "Reviews";
  const reviewString = ` ${stars} • ${numReviews} ${reviewCountText}`;
  return stars ? reviewString : " New";
}

function newestReviewDate(reviewA, reviewB) {
  // Example for exampleArr.sort(newestReviewDate)
  // const exampleArr = [
  //   { createdAt: "2024-07-02T18:56:46.336Z" },
  //   { createdAt: "2024-07-03T10:15:00.000Z" },
  //   { createdAt: "2024-07-02T12:30:21.123Z" },
  // ];
  // Output Below
  // [
  //   { createdAt: "2024-07-03T10:15:00.000Z", },
  //   { createdAt: "2024-07-02T18:56:46.336Z", },
  //   { createdAt: "2024-07-02T12:30:21.123Z", },
  // ];
  const dateA = new Date(reviewA.createdAt);
  const dateB = new Date(reviewB.createdAt);
  return dateB - dateA;
}

function createReviewsElement({ Owner, reviewsArr, user }) {
  // Return review elements if they exist
  // Else return string if user logged in and isn't the owner
  // Else return null
  if (reviewsArr.length) {
    return reviewsArr.map((review, i) => (
      <ReviewCard key={i} review={review} />
    ));
  } else if (Owner?.id !== user?.id) {
    return <div>Be the first to post a review!</div>;
  } else return null;
}

function SpotPage() {
  const { spotId } = useParams();

  // If url has non numeric spotId
  if (isNaN(+spotId)) return <PageNotFound />;

  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots[spotId]);
  const reviews = useSelector((state) => state.reviews[spotId]);
  const user = useSelector((state) => state.session.user);

  const reviewsArr = Object.values(reviews || {});
  reviewsArr.sort(newestReviewDate);

  useEffect(() => {
    dispatch(fetchSpot(spotId));
    dispatch(fetchReviews(spotId));
  }, [dispatch, spotId]);

  // Destructure spot properties without referencing undefined
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
    Owner,
  } = spot || {};

  const starString = formatStarString({ avgStarRating, numReviews });

  // Ensure preview and side images are displayed
  const imagesArr = Object.values(SpotImages || {});
  const previewImage =
    imagesArr.find((e) => e.preview === true)?.url || "/noPreviewImg.png";
  const sideImages = imagesArr.filter((e) => e.preview === false) || [];

  // Use placeholders when less than 4 side images
  while (sideImages.length < 4) {
    sideImages.push({ url: "/noMedia.png", id: `demo${sideImages.length}` });
  }

  const reviewsElement = createReviewsElement({ Owner, reviewsArr, user });

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
                    {starString}
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
          {starString}
        </div>
        <div id="reviews-element">{reviewsElement}</div>
      </div>
    )
  );
}

export default SpotPage;
