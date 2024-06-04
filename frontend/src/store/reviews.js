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
