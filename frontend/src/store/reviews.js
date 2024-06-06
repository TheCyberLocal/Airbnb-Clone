import { csrfFetch } from "./csrf";

// Asynchronous helper functions
export const postReview = async ({ body, spotId }) => {
  try {
    await csrfFetch(`/api/spots/${spotId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.log("Failed to postSpot");
    console.errors("errors =>", e);
    return e;
  }
};

// Action Types
const LOAD_REVIEWS = "reviews/loadReviews";

// Actions
export const loadReviews = (data) => {
  return {
    type: LOAD_REVIEWS,
    data,
  };
};

// Thunks
export const fetchReviews = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}/reviews`);
  const data = await response.json();
  const processed = {};
  processed[spotId] = data.Reviews;
  dispatch(loadReviews(processed));
};

// Reducer
const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default reviewsReducer;
