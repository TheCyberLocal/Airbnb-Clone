import "./BookSpotModal.css";
import "../../../node_modules/react-date-range/dist/styles.css";
import "../../../node_modules/react-date-range/dist/theme/default.css"; // Theme CSS file
import { DateRange } from "react-date-range";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { useState, useEffect } from "react";
import { csrfFetch } from "../../store/csrf";
import { addDays, format, parseISO } from "date-fns";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import { useDispatch } from "react-redux";
import { fetchSpot } from "../../store/spots";

function BookSpotModal({ booking }) {
  const { closeModal, setModalContent } = useModal();
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const [error, setError] = useState("");
  const [selectionRange, setSelectionRange] = useState({
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 2),
    key: "selection",
  });

  useEffect(() => {
    if (booking) {
      setSelectionRange({
        startDate: parseISO(booking.startDate),
        endDate: parseISO(booking.endDate),
        key: "selection",
      });
    }
  }, [booking]);

  const handleSelect = (ranges) => {
    setSelectionRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  const handleDeleteClick = () => {
    setModalContent(
      <ConfirmDeleteModal
        spotId={spotId}
        bookingId={booking.id}
        itemText={"Booking"}
      />
    );
  };

  const handleBookingClick = async () => {
    const url = booking
      ? `/api/bookings/${booking.id}`
      : `/api/spots/${spotId}/bookings`;
    const method = booking ? "PUT" : "POST";

    try {
      await csrfFetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: format(selectionRange.startDate, "MM-dd-yyyy"),
          endDate: format(selectionRange.endDate, "MM-dd-yyyy"),
        }),
      });

      if (!response.ok) {
        setError("An error occurred. Please choose a date after today.");
      } else {
        closeModal();
      }
    } catch (err) {
      setError("An error occurred. Please choose a date after today.");
    }

    dispatch(fetchSpot(spotId));
  };

  return (
    <div className="book-spot-modal">
      <h1 className="book-spot-modal-title">
        {booking ? "Update your booking" : "Book this spot"}
      </h1>
      <div className="book-spot-modal-content">
        <DateRange
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={addDays(new Date(), 1)}
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
          {`Book ${format(selectionRange.startDate, "MM-dd-yyyy")} to ${format(
            selectionRange.endDate,
            "MM-dd-yyyy"
          )}`}
        </button>
        <div id="cancel-delete">
          {booking && (
            <button
              id="delete"
              className="clickable half-width"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          )}
          <button
            className={`clickable ${booking ? "half-width" : ""}`}
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookSpotModal;
