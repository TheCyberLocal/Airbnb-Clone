import "./BookSpotModal.css";
import "../../../node_modules/react-date-range/dist/styles.css";
import "../../../node_modules/react-date-range/dist/theme/default.css"; // Theme CSS file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";

export default function BookSpotModal() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 86400000),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  return (
    <div className="book-spot-modal">
      <h1 className="book-spot-modal-title">Book Spot</h1>
      <div className="book-spot-modal-content">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date()} // Restrict selection to dates from today onwards
        />
        <p>
          Selected Start Date: {selectionRange.startDate.toLocaleDateString()}
        </p>
        <p>Selected End Date: {selectionRange.endDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
