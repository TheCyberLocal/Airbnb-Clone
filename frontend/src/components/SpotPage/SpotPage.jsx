import "./SpotPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpot } from "../../store/spots";
import { fetchReviews } from "../../store/reviews";
import { FaStar } from "react-icons/fa";
import ReviewCard from "../ReviewCard";
import { useModal } from "../../context/Modal";
import SpotReviewModal from "./ReviewFormModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import BookSpotModal from "../BookSpotModal";

function formatStarString({ avgStarRating, numReviews }) {
  // Example Outputs
  // " New" for 0 reviews
  // " 4.0 • 1 Review" for 1 review
  // " 4.0 • 2 Reviews" for 2+ reviews
  if (typeof avgStarRating !== "number") return " New";
  const stars = avgStarRating.toFixed(1);
  const reviewCountText = numReviews === 1 ? "Review" : "Reviews";
  return ` ${stars} • ${numReviews} ${reviewCountText}`;
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

function SpotPage() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots[spotId]);
  const reviews = useSelector((state) => state.reviews[spotId]);
  const user = useSelector((state) => state.session.user);
  const [starString, setStarString] = useState("");
  const [userBooking, setUserBooking] = useState(null);
  const { setModalContent, closeMenu } = useModal();

  useEffect(() => {
    dispatch(fetchSpot(spotId));
    dispatch(fetchReviews(spotId));
  }, [dispatch, spotId]);

  useEffect(() => {
    if (spot) {
      const fetchBooking = async () => {
        const response = await csrfFetch(`/api/spots/${spotId}/bookings`);
        const data = await response.json();
        const myBooking = data?.Bookings.find(
          (e) => e.userId === user?.id && new Date(e.startDate) > new Date(),
        );
        setUserBooking(myBooking);
      };
      fetchBooking();
    }
  }, [spot, user]);

  useEffect(() => {
    setStarString(
      formatStarString({
        avgStarRating: spot?.avgStarRating,
        numReviews: spot?.numReviews,
      }),
    );
  }, [spot]);

  const reviewsArr = Object.values(reviews || {});
  reviewsArr.sort(newestReviewDate);

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

  useEffect(() => {
    dispatch(fetchSpot(spotId));
    dispatch(fetchReviews(spotId));
  }, [dispatch, spotId]);

  useEffect(() => {
    dispatch(fetchSpot(spotId));
  }, [reviews]);

  useEffect(() => {
    setStarString(formatStarString({ avgStarRating, numReviews }));
  }, [avgStarRating, numReviews]);

  // Ensure preview and side images are displayed
  const imagesArr = Object.values(SpotImages || {});
  const previewImage = imagesArr.find((e) => e.preview === true)?.url;
  const sideImages = imagesArr.filter((e) => e.preview === false) || [];

  // Use placeholders when less than 4 side images

  function createReviewsElement({ Owner, reviewsArr, user }) {
    // If user is logged in and isn't owner and hasn't posted, show button.
    // If user is logged in and isn't owner and no reviews, show "be the first".
    // If reviews, show them.
    // If nothing else, return null.

    const e = {};
    if (user && Owner?.id !== user?.id) {
      if (!reviewsArr.find((rev) => rev?.userId === user?.id)) {
        e.button = (
          <button onClick={() => setModalContent(<SpotReviewModal />)}>
            Post Your Review
          </button>
        );
      }
      if (!reviewsArr.length) {
        e.text = <p>Be the first to post a review!</p>;
      }
    }

    if (reviewsArr.length) {
      e.reviews = reviewsArr.map((review, i) => (
        <ReviewCard key={i} review={review} spotId={spotId} user={user} />
      ));
    }

    if (Object.keys(e).length) {
      return (
        <>
          {e.button}
          {e.text}
          {e.reviews}
        </>
      );
    } else return null;
  }

  const reviewsElement = createReviewsElement({ Owner, reviewsArr, user });

  return (
    spot && (
      <div id="spot-page">
        <div id="title">{name}</div>
        <div id="location">{`${city}, ${state}, ${country}`}</div>
        <div id="images">
          <div id="preview">
            <img src={previewImage} alt="Preview Image" />
          </div>
          <div id="sideImages">
            {sideImages.map((e) => (
              <div key={e.id} className="sideImages">
                <img key={e.id} src={e.url} alt="Spot Image" />
              </div>
            ))}
          </div>
        </div>
        <div id="details">
          <div id="hostedBy">
            <div id="title">{`Hosted by ${Owner?.firstName} ${Owner?.lastName}`}</div>
            <div id="description">{`${description}`}</div>
          </div>
          <div id="reserve">
            <div id="reserve-card">
              <div id="reserve-card-head">
                <div id="reserve-card-price">${price}</div>
                <div id="reserve-card-text">
                  <span>night</span>
                  <span>
                    <FaStar />
                    {starString}
                  </span>
                </div>
              </div>
              {user ? (
                user?.id !== spot.ownerId ? (
                  <button
                    onClick={() =>
                      setModalContent(<BookSpotModal booking={userBooking} />)
                    }
                  >
                    {userBooking ? "Update Reservation" : "Reserve"}
                  </button>
                ) : (
                  <h3>Welcome to your spot</h3>
                )
              ) : (
                <button>
                  <OpenModalMenuItem
                    itemText="Log In to Reserve"
                    onItemClick={closeMenu}
                    modalComponent={<LoginFormModal />}
                  />
                </button>
              )}
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
