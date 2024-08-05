import "./BookSpotModal.css";
import "../../../node_modules/react-date-range/dist/styles.css";
import "../../../node_modules/react-date-range/dist/theme/default.css"; // Theme CSS file
import { DateRangePicker } from "react-date-range";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { useState } from "react";
import { useEffect } from "react";
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

  const handleBookingClick = () => {
    const url = booking
      ? `/api/spots/${spotId}/bookings/${booking.id}`
      : `/api/spots/${spotId}/bookings`;
    const method = booking ? "PUT" : "POST";

    csrfFetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: selectionRange.startDate,
        endDate: selectionRange.endDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          closeModal();
        }
      });
  };

  return (
    <div className="book-spot-modal">
      <h1 className="book-spot-modal-title">Book this spot</h1>
      <div className="book-spot-modal-content">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date(new Date().getTime() + 86400000)}
        />
      </div>
      <div className="book-spot-modal-errors">
        {error && <div>{error}</div>}
      </div>
      <div className="book-spot-modal-buttons">
        <button
          id="book-spot"
          className="clickable"
          onClick={handleBookingClick}
        >
          {`Book ${selectionRange.startDate.toLocaleDateString()} - ${selectionRange.endDate.toLocaleDateString()}`}
        </button>
        <button className="clickable" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BookSpotModal;
