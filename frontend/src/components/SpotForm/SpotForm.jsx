import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postSpot, updateSpot, fetchSpot } from "../../store/spots";
import "./SpotForm.css";

function SpotForm() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const updating = window.location.href.endsWith("edit");
  const spot = useSelector((state) => state.spots[spotId]);
  const nav = useNavigate();

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [previewImageURL, setPreviewImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isNaN(parseInt(spotId))) {
      dispatch(fetchSpot(spotId));
    }
  }, [dispatch, spotId]);

  useEffect(() => {
    // Set imported numeric values to strings for consistent datatype
    setCountry(spot?.country ?? "");
    setAddress(spot?.address ?? "");
    setCity(spot?.city ?? "");
    setState(spot?.state ?? "");
    setLat(String(spot?.lat ?? ""));
    setLng(String(spot?.lng ?? ""));
    setDescription(spot?.description ?? "");
    setName(spot?.name ?? "");
    setPrice(String(spot?.price ?? ""));
    setPreviewImage(
      spot?.SpotImages?.find((e) => e.preview === true)?.url || "",
    );
    const sideImageURLs = spot?.SpotImages?.filter((e) => e.preview === false);
    if (sideImageURLs?.length) {
      setImage1(sideImageURLs[0]?.url || "");
      setImage2(sideImageURLs[1]?.url || "");
      setImage3(sideImageURLs[2]?.url || "");
      setImage4(sideImageURLs[3]?.url || "");
    }
  }, [spot]);

  const invalidURL = "Image URL must end in .png, .jpg, or .jpeg";
  const imageExtList = [".png", ".jpg", ".jpeg"];

  const validateImg = (url) => {
    for (let ext of imageExtList) {
      if (url.endsWith(ext)) return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let errorsCollector = {};
    errorsCollector.country = !country;
    errorsCollector.address = !address;
    errorsCollector.city = !city;
    errorsCollector.state = !state;
    errorsCollector.lat = !lat;
    errorsCollector.latNaN = isNaN(+lat) || +lat > 90 || +lat < -90;
    errorsCollector.lng = !lng;
    errorsCollector.lngNaN = isNaN(+lng) || +lng > 180 || +lng < -180;
    errorsCollector.description = description.length < 30;
    errorsCollector.name = !name;
    errorsCollector.price = !price;
    errorsCollector.priceNaN =
      price && (isNaN(parseFloat(price)) || parseFloat(price) < 0);
    errorsCollector.preview = !previewImageURL;
    errorsCollector.image0 = previewImageURL && !validateImg(previewImageURL);
    errorsCollector.image1 = image1 && !validateImg(image1);
    errorsCollector.image2 = image2 && !validateImg(image2);
    errorsCollector.image3 = image3 && !validateImg(image3);
    errorsCollector.image4 = image4 && !validateImg(image4);
    setErrors(errorsCollector);

    // Don't submit if errors are collected
    if (Object.values(errorsCollector).includes(true)) return;

    // Prepare the submitted data
    const sideImageURLs = [image1, image2, image3, image4];
    const body = {
      address,
      city,
      state,
      country,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      name,
      description,
      price: parseInt(price),
    };

    const submit = async () => {
      if (updating) {
        await updateSpot({
          body,
          previewImageURL,
          sideImageURLs,
          spotId,
          currentSpotImages: spot.SpotImages,
        });
        nav(`/spots/${spotId}`);
      } else {
        const newSpotId = await postSpot({
          body,
          previewImageURL,
          sideImageURLs,
        });
        nav(`/spots/${newSpotId}`);
      }
    };
    submit();
  };

  return (
    <form id="spot-form">
      <h1>{updating ? "Update your Spot" : "Create a New Spot"}</h1>
      <h2>Where&apos;s your place located?</h2>
      <p>
        Guests will only get your exact address once they booked a reservation.
      </p>
      <label>
        Country{" "}
        {errors.country && <span className="error">Country is required</span>}
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label>
        Street Address{" "}
        {errors.address && <span className="error">Address is required</span>}
        <input
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <div>
        <label id="city">
          City {errors.city && <span className="error">City is required</span>}
          <br />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <b>{" , "}</b>
        </label>
        <label id="state">
          State{" "}
          {errors.state && <span className="error">State is required</span>}
          <br />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label id="lat">
          Latitude{" "}
          {errors.lat && <span className="error">Latitude is required</span>}
          {errors.latNaN && (
            <span className="error">Latitude must be within -90 and 90</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <b>{" , "}</b>
        </label>
        <label id="lng">
          Longitude{" "}
          {errors.lng && <span className="error">Longitude is required</span>}
          {errors.lngNaN && (
            <span className="error">Longitude must be within -180 and 180</span>
          )}
          <br />
          <input
            type="text"
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
      </div>
      <h2 className="new-section">Describe your place to guests</h2>
      <p>
        Mention the best features of your space, any special amenities like fast
        wifi or parking, and what you love about the neighborhood.
      </p>
      <textarea
        placeholder="Please write at least 30 characters"
        rows={8}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <span className="error">Description needs 30 or more characters</span>
      )}
      <h2 className="new-section">Create a title for your spot</h2>
      <p>
        Catch guests&apos; attention with a spot title that highlights what
        makes your place special.
      </p>
      <input
        type="text"
        placeholder="Name of your spot"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <span className="error">Name is required</span>}
      <h2 className="new-section">Set a base price for your spot</h2>
      <p>
        Competitive pricing can help your listing stand out and rank higher in
        search results.
      </p>
      <div id="price-input">
        {"$"}
        <input
          type="text"
          placeholder="Price per night (USD)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      {errors.price && <div className="error">Price is required</div>}
      {errors.priceNaN && (
        <div className="error">Price per day must be a positive number</div>
      )}
      <h2 className="new-section">Liven up your spot with photos</h2>
      <p>Submit a link to at least one photo to publish your spot</p>
      <input
        type="text"
        placeholder="Preview Image URL"
        value={previewImageURL}
        onChange={(e) => setPreviewImage(e.target.value)}
      />
      {errors.preview && (
        <span className="error">Preview image is required</span>
      )}
      {errors.image0 && <span className="error">{invalidURL}</span>}
      <input
        type="text"
        placeholder="Image URL"
        value={image1}
        onChange={(e) => setImage1(e.target.value)}
      />
      {errors.image1 && <span className="error">{invalidURL}</span>}
      <input
        type="text"
        placeholder="Image URL"
        value={image2}
        onChange={(e) => setImage2(e.target.value)}
      />
      {errors.image2 && <span className="error">{invalidURL}</span>}
      <input
        type="text"
        placeholder="Image URL"
        value={image3}
        onChange={(e) => setImage3(e.target.value)}
      />
      {errors.image3 && <span className="error">{invalidURL}</span>}
      <input
        type="text"
        placeholder="Image URL"
        value={image4}
        onChange={(e) => setImage4(e.target.value)}
      />
      {errors.image4 && <span className="error">{invalidURL}</span>}
      <div id="submit-button">
        <button onClick={handleSubmit}>
          {updating ? "Update your Spot" : "Create Spot"}
        </button>
      </div>
    </form>
  );
}

export default SpotForm;
