import "./BookSpotModal.css";
import "../../../node_modules/react-date-range/dist/styles.css";
import "../../../node_modules/react-date-range/dist/theme/default.css"; // Theme CSS file
import { DateRangePicker } from "react-date-range";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { useState } from "react";
import { useEffect } from "react";
import { csrfFetch } from "../../store/csrf";

export default function BookSpotModal() {
  const { closeModal } = useModal();
  const { spotId } = useParams();
  const [error, setError] = useState("");
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(new Date().getTime() + 86400000),
    endDate: new Date(new Date().getTime() + 172800000),
    key: "selection",
  });

  useEffect(() => {
    csrfFetch(`/api/spots/${spotId}/bookings`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const myBooking = data?.Bookings.find(
          (e) => "id" in e && e.startDate > new Date()
        );
        if (myBooking) {
          setSelectionRange({
            startDate: new Date(myBooking.startDate),
            endDate: new Date(myBooking.endDate),
            key: "selection",
          });
        } else {
          setSelectionRange({
            startDate: new Date(new Date().getTime() + 86400000),
            endDate: new Date(new Date().getTime() + 172800000),
            key: "selection",
          });
        }
      });
  }, []);

  const handleSelect = (ranges) => setSelectionRange(ranges.selection);

  const handleBookingClick = () => {
    csrfFetch(`/api/spots/${spotId}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: selectionRange.startDate,
        endDate: selectionRange.endDate,
      }),
    }).then((res) => {
      console.log(res);
      setError(res.error);
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
      <div className="book-spot-modal-errors">{error && { errors }}</div>
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
