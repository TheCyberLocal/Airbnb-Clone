import { csrfFetch } from "./csrf";

// Asynchronous helper functions
const postSpotImages = async ({ spotId, previewImageURL, sideImageURLs }) => {
  // post preview image
  await csrfFetch(`/api/spots/${spotId}/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: previewImageURL, preview: true }),
  });

  // post side images
  for (let url of sideImageURLs) {
    if (!url) continue;
    await csrfFetch(`/api/spots/${spotId}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, preview: false }),
    });
  }
};

export const postSpot = async ({ body, previewImageURL, sideImageURLs }) => {
  // post spot details
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  await postSpotImages({ spotId: data.id, previewImageURL, sideImageURLs });
  return data.id;
};

const updateSpotImages = async ({
  spotId,
  previewImageURL,
  currentSpotImages,
  sideImageURLs,
}) => {
  // Update preview image
  const currentPreviewImage = currentSpotImages.find((e) => e.preview === true);
  if (currentPreviewImage.url !== previewImageURL) {
    // Delete preview image
    await csrfFetch(`/api/spot-images/${currentPreviewImage.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Post new preview image
    await csrfFetch(`/api/spots/${spotId}/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: previewImageURL, preview: true }),
    });
  }

  // Update side images
  const currentSideImages = currentSpotImages.filter(
    (e) => e.preview === false
  );
  for (let i = 0; i < 5; i++) {
    if (currentSideImages[i]?.url === sideImageURLs[i]) continue;
    // Delete side image
    if (currentSideImages[i]) {
      await csrfFetch(`/api/spot-images/${currentSideImages[i].id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Post new side image
    if (sideImageURLs[i]) {
      await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: sideImageURLs[i], preview: false }),
      });
    }
  }
};

export const updateSpot = async ({
  body,
  previewImageURL,
  sideImageURLs,
  spotId,
  currentSpotImages,
}) => {
  // post spot details
  const response = await csrfFetch(`/api/spots/${spotId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  await updateSpotImages({
    spotId: data.id,
    previewImageURL,
    sideImageURLs,
    currentSpotImages,
  });
  return data.id;
};

// Action Types
const LOAD_SPOTS = "spots/loadSpots";
const LOAD_SPOT = "spots/loadSpot";
const MY_SPOTS = "spots/mySpots";

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

export const mySpots = (data) => {
  return {
    type: MY_SPOTS,
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

export const fetchMySpots = () => async (dispatch) => {
  const response = await fetch("/api/spots/current");
  const data = await response.json();
  const processed = {};
  for (let key in data.Spots) {
    key = Number(key);
    processed[key + 1] = data.Spots[key];
  }
  dispatch(mySpots(processed));
};

// Reducer
const spotsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      return { ...state, ...action.data };
    case LOAD_SPOT:
      return { ...state, [action.data.id]: action.data };
    case MY_SPOTS:
      return { ...state, mySpots: action.data };
    default:
      return state;
  }
};

export default spotsReducer;
