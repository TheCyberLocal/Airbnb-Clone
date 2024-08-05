import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews, postReview, updateReview } from "../../store/reviews";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useModal } from "../../context/Modal";
import "./ReviewFormModal.css";

function ReviewFormModal({ reviewId = null }) {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);

  const reviews = useSelector((state) => state.reviews[spotId]);

  useEffect(() => {
    if (reviewId) {
      const review = reviews.find((r) => r.id === reviewId);
      setReview(review.review);
      setRating(review.stars);
    }
  }, [dispatch, reviewId]);

  useEffect(() => {
    setValidForm(review.length > 9 && rating);
  }, [review, rating]);

  const stars = Array(5)
    .fill(0)
    .map((_, index) => {
      const currentRating = hoverRating || rating;
      return (
        <span
          key={index}
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHoverRating(index + 1)}
          onMouseLeave={() => setHoverRating(0)}
        >
          {currentRating > index ? <FaStar /> : <FaRegStar />}
        </span>
      );
    });

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    let errorsCollector = {};
    errorsCollector.review = review.length < 10;
    errorsCollector.rating = rating === 0;
    setErrors(errorsCollector);

    if (!Object.values(errorsCollector).includes(true)) {
      const request = reviewId ? updateReview : postReview;
      request({
        body: { review, stars: rating },
        spotId,
      })
        .then(() => {
          closeModal();
          dispatch(fetchReviews(spotId));
        })
        .catch((e) => {
          setErrors({ msg: e.message, errArr: e.errors });
        });
    }
  }

  return (
    <div id="review-form-modal">
      <h1 className="review-form-modal">How was your stay?</h1>
      {errors.msg && <p className="error">{errors.msg}</p>}
      {errors.errArr?.length &&
        errors.errArr.map((e, i) => {
          return (
            <p key={i} className="error">
              {e}
            </p>
          );
        })}
      <textarea
        className="review-form-modal"
        placeholder="Leave your review here..."
        rows={8}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <div className="review-form-modal">
        <span id="review-stars-rating">{stars}</span>
        <span id="review-stars-text">Stars</span>
      </div>
      <button
        disabled={!validForm}
        className="review-form-modal"
        onClick={handleSubmit}
      >
        Submit Your Review
      </button>
    </div>
  );
}

export default ReviewFormModal;
