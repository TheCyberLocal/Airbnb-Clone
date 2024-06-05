import "./ReviewCard.css";

// const MONTHS = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// function formatDate(dateTimeString) {
//   // Examples
//   // "2024-01-01" => "January 2024"
//   // "2024-06-01" => "June 2024"
//   // "2024-12-01" => "December 2024"
//   const dateString = dateTimeString.split("T")[0];
//   const [year, month, day] = dateString.split("-");
//   const date = new Date(Date.UTC(year, month - 1, day));
//   const monthName = MONTHS[date.getMonth()];
//   return `${monthName} ${year}`;
// }

function ReviewCard({ review }) {
  // const formattedDate = formatDate(review.createdAt);
  // console.log("date =>", review.createdAt, "formatted =>", formattedDate);

  // console.log(formatDate("2024-01-01T")); // January 2024
  // console.log(formatDate("2024-06-02T")); // June 2024
  // console.log(formatDate("2024-12-01T")); // December 2024
  // console.log(
  //   "2024-06-02T17:56:46.336Z =>",
  //   formatDate("2024-06-02T17:56:46.336Z")
  // ); // July 2024

  return (
    <div className="review-card">
      <div className="review-name">{review.User.firstName}</div>
      {/* <div className="review-date">{formattedDate}</div> */}
      <div className="review-text">{review.review}</div>
    </div>
  );
}

export default ReviewCard;
