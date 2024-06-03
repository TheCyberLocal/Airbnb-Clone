// Action Types
const LOAD_SPOTS = "spots/loadSpots";
const LOAD_SPOT = "spots/loadSpot";

// Actions
export const loadSpots = (data) => {
  return {
    type: LOAD_SPOTS,
    data,
  };
};

export const loadSpot = (data) => {
  return {
    type: LOAD_SPOT,
    data,
  };
};

// Thunks
export const fetchSpots = () => async (dispatch) => {
  const response = await fetch("/api/spots");
  const data = await response.json();
  const processed = {};
  for (let key in data.Spots) {
    key = Number(key);
    processed[key + 1] = data.Spots[key];
  }
  console.log("processed", processed);
  dispatch(loadSpots(processed));
};

export const fetchSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);
  const data = await response.json();
  dispatch(loadSpot(data));
};

// Reducer
const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      return { ...state, ...action.data };
    case LOAD_SPOT:
      return { ...state, [action.data.id]: action.data };
    default:
      return state;
  }
};

export default spotsReducer;
