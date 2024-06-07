import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews, postReview } from "../../store/reviews";
import { fetchSpot } from "../../store/spots";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useModal } from "../../context/Modal";
import "./ReviewFormModal.css";

function ReviewFormModal() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);

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

    if (!Object.keys(errors).length) {
      const submit = async () => {
        const res = await postReview({
          body: { review, stars: rating },
          spotId,
        });
        if (res) {
          setErrors({ msg: res.message, errArr: res.errors });
        } else {
          closeModal();
          dispatch(fetchSpot(spotId));
          dispatch(fetchReviews(spotId));
        }
      };
      submit();
    }
  }

  return (
    <div id="review-form-modal">
      <h1 className="review-form-modal">How was your stay?</h1>
      {errors.msg && <p className="errors">{errors.msg}</p>}
      {errors.errArr?.length &&
        errors.errArr.map((e, i) => {
          return (
            <p key={i} className="errors">
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
