const LOAD_SPOTS = "spots/loadSpots";

// Actions
export const loadSpots = (data) => {
  return {
    type: LOAD_SPOTS,
    data,
  };
};

// Thunks
export const fetchSpots = () => async (dispatch) => {
  const response = await fetch("/api/spots");
  const spots = await response.json();
  dispatch(loadSpots(spots));
};

// Reducer
const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      return { ...state, ...action.data.Spots };
    default:
      return state;
  }
};

export default spotsReducer;
