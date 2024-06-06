import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSpot } from "../../store/spots";
import "./NewSpotForm.css";

function NewSpotForm() {
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
  const [previewImage, setPreviewImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [errors, setErrors] = useState({});

  const invalidURL = "Image URL must end in .png, .jpg, or .jpeg";
  const imageExtList = [".png", ".jpg", ".jpeg"];

  const validateImg = (url) => {
    for (let ext of imageExtList) {
      if (url.endsWith(ext)) return true;
    }
    return false;
  };

  // const postSpotImages = async (spotId) => {
  //   // post preview image
  //   const response = await fetch(`/api/spots/${spotId}/images`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: { url: previewImage, preview: true },
  //   });
  //   console.log("response =>", response);
  //   const data = await response.json();
  //   console.log("data =>", data);

  //   // post side images
  //   for (let url of [image1, image2, image3, image4]) {
  //     if (!url) continue;
  //     const imageResponse = await fetch(`/api/spots/${spotId}/images`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: { url, preview: false },
  //     });
  //     console.log("url =>", url);
  //     const data = await imageResponse.json();
  //     console.log("data =>", data);
  //   }
  // };

  // const postSpot = async (body) => {
  //   const response = await fetch("/api/spots", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });
  //   console.log("body =>", body);
  //   const data = await response.json();
  //   console.log("data =>", data);
  //   await postSpotImages(data.id);
  //   nav(`/spots/${data.id}`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let errorsCollector = {};
    if (!country) errorsCollector.country = true;
    if (!address) errorsCollector.address = true;
    if (!city) errorsCollector.city = true;
    if (!state) errorsCollector.state = true;
    if (!lat) errorsCollector.lat = true;
    if (isNaN(+lat) || +lat > 90 || +lat < -90) errorsCollector.latNaN = true;
    if (!lng) errorsCollector.lng = true;
    if (isNaN(+lng) || +lng > 180 || +lng < -180) errorsCollector.lngNaN = true;
    if (description.length < 30) errorsCollector.description = true;
    if (!name) errorsCollector.name = true;
    if (!price) errorsCollector.price = true;
    if (price && (isNaN(parseFloat(price)) || parseFloat(price) < 0)) errorsCollector.priceNaN = true;
    if (!previewImage) errorsCollector.preview = true;
    if (previewImage && !validateImg(previewImage))
      errorsCollector.image0 = true;
    if (image1 && !validateImg(image1)) errorsCollector.image1 = true;
    if (image2 && !validateImg(image2)) errorsCollector.image2 = true;
    if (image3 && !validateImg(image3)) errorsCollector.image3 = true;
    if (image4 && !validateImg(image4)) errorsCollector.image4 = true;
    setErrors(errorsCollector);

    if (!Object.keys(errorsCollector).length) {
      console.log("submitted", errorsCollector);

      const sideImages = [image1, image2, image3, image4];
      const body = {
        address,
        city,
        state,
        country,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        name,
        description,
        price: parseFloat(price),
      };
      console.log('body =>', body);
      console.log('previewImage =>', previewImage);
      console.log('sideImages =>', sideImages);

      const submit = async () => {
        const newSpotId = await postSpot({
          body,
          previewImage,
          sideImages,
        });
        console.log('newSpotId =>', newSpotId);
        nav(`/spots/${newSpotId}`);
      };
      submit();
    } else {
      console.log("rejected", errorsCollector);
    }
  };

  return (
    <form>
      <h1>Create a New Spot</h1>
      {/* Section 1 */}
      <h2>Where&apos;s your place located?</h2>
      <p>
        Guests will only get your exact address once they booked a reservation.
      </p>
      <label>
        Country{" "}
        {errors.country && <span className="errors">Country is required</span>}
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label>
        Street Address{" "}
        {errors.address && <span className="errors">Address is required</span>}
        <input
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <div id="city-state">
        <label>
          City {errors.city && <span className="errors">City is required</span>}
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          State{" "}
          {errors.state && <span className="errors">State is required</span>}
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
      </div>
      <div id="coordinates">
        <label>
          Latitude{" "}
          {errors.lat && <span className="errors">Latitude is required</span>}
          {errors.latNaN && <span className="errors">Latitude must be within -90 and 90</span>}
          <input
            type="text"
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </label>
        <label>
          Longitude{" "}
          {errors.lng && <span className="errors">Longitude is required</span>}
          {errors.lngNaN && <span className="errors">Longitude must be within -180 and 180</span>}
          <input
            type="text"
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
        </label>
      </div>
      {/* Section 2 */}
      <h2>Describe your place to guests</h2>
      <p>
        Mention the best features of your space, any special amenities like fast
        wifi or parking, and what you love about the neighborhood.
      </p>
      <textarea
        name="Description"
        id="spot-description"
        rows="5"
        cols="33"
        placeholder="Please write at least 30 characters"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {errors.description && (
        <span className="errors">Description needs 30 or more characters</span>
      )}
      {/* Section 3 */}
      <h2>Create a title for your spot</h2>
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
      {errors.name && <span className="errors">Name is required</span>}
      {/* Section 4 */}
      <h2>Set a base price for your spot</h2>
      <p>
        Competitive pricing can help your listing stand out and rank higher in
        search results.
      </p>
      ${" "}
      <input
        type="text"
        placeholder="Price per night (USD)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {errors.price && <div className="errors">Price is required</div>}
      {errors.priceNaN && <div className="errors">Price per day must be a positive number</div>}
      {/* Section 5 */}
      <h2>Liven up your spot with photos</h2>
      <p>Submit a link to at least one photo to publish your spot</p>
      <input
        type="text"
        placeholder="Preview Image URL"
        value={previewImage}
        onChange={(e) => setPreviewImage(e.target.value)}
      />
      {errors.preview && (
        <span className="errors">Preview image is required</span>
      )}
      {errors.image0 && <span className="errors">{invalidURL}</span>}
      <input
        type="text"
        id="image1"
        placeholder="Image URL"
        value={image1}
        onChange={(e) => setImage1(e.target.value)}
      />
      {errors.image1 && <span className="errors">{invalidURL}</span>}
      <input
        type="text"
        id="image2"
        placeholder="Image URL"
        value={image2}
        onChange={(e) => setImage2(e.target.value)}
      />
      {errors.image2 && <span className="errors">{invalidURL}</span>}
      <input
        type="text"
        id="image3"
        placeholder="Image URL"
        value={image3}
        onChange={(e) => setImage3(e.target.value)}
      />
      {errors.image3 && <span className="errors">{invalidURL}</span>}
      <input
        type="text"
        id="image4"
        placeholder="Image URL"
        value={image4}
        onChange={(e) => setImage4(e.target.value)}
      />
      {errors.image4 && <span className="errors">{invalidURL}</span>}
      <button onClick={(e) => handleSubmit(e)}>Create Spot</button>
    </form>
  );
}

export default NewSpotForm;
