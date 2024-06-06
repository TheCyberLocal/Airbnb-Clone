import { csrfFetch } from "./csrf";

// Asynchronous helper functions
const postSpotImages = async ({ spotId, previewImage, sideImages }) => {
  // post preview image
  try {
    await csrfFetch(`/api/spots/${spotId}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: previewImage, preview: true }),
    });
  } catch (e) {
    console.errors(e);
  }

  // post side images
  for (let url of sideImages) {
    if (!url) continue;
    try {
      await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, preview: false }),
      });
    } catch (e) {
      console.errors(e);
    }
  }
};

export const postSpot = async ({ body, previewImage, sideImages }) => {
  // post spot details
  try {
    const response = await csrfFetch("/api/spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    await postSpotImages({ spotId: data.id, previewImage, sideImages });
    return data.id;
  } catch (e) {
    console.errors(e);
  }
};

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
