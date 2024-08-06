import "./BookSpotModal.css";
import "../../../node_modules/react-date-range/dist/styles.css";
import "../../../node_modules/react-date-range/dist/theme/default.css"; // Theme CSS file
import { Calendar } from "react-date-range";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { useState, useEffect } from "react";
import { csrfFetch } from "../../store/csrf";

function BookSpotModal({ booking }) {
  const { closeModal } = useModal();
  const { spotId } = useParams();
  const [error, setError] = useState("");
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(new Date().getTime() + 86400000),
    endDate: new Date(new Date().getTime() + 172800000),
    key: "selection",
  });

  useEffect(() => {
    if (booking) {
      setSelectionRange({
        startDate: new Date(booking.startDate),
        endDate: new Date(booking.endDate),
        key: "selection",
      });
    }
  }, [booking]);

  const handleSelect = (ranges) => setSelectionRange(ranges.selection);

  const handleBookingClick = async () => {
    const url = booking
      ? `/api/bookings/${booking.id}`
      : `/api/spots/${spotId}/bookings`;
    const method = booking ? "PUT" : "POST";

    try {
      const response = await csrfFetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: selectionRange.startDate.toISOString(),
          endDate: selectionRange.endDate.toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.errors.startDate || data.errors.endDate);
      } else {
        closeModal();
      }
    } catch (err) {
      setError("An error occurred. Please choose a date after today.");
    }
  };

  return (
    <div className="book-spot-modal">
      <h1 className="book-spot-modal-title">
        {booking ? "Update your booking" : "Book this spot"}
      </h1>
      <div className="book-spot-modal-content">
        <Calendar
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date(new Date().getTime() + 86400000)}
        />
      </div>
      <div className="book-spot-modal-errors">
        {error && <div>{error}</div>}
      </div>
      <button id="book-spot" className="clickable" onClick={handleBookingClick}>
        {`Book ${selectionRange.startDate.toISOString().split("T")[0]} - ${
          selectionRange.endDate.toISOString().split("T")[0]
        }`}
      </button>
      <button className="clickable" onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
}

export default BookSpotModal;
