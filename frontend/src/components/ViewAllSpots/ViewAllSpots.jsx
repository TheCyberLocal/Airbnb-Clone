import "./ViewAllSpots.css";
import SpotCard from "../SpotCard";

function ViewAllSpots() {
  const page = [];
  for (let i = 0; i < 6; i++) {
    page.push(<SpotCard />);
  }
  return <div className="homeBody">{page}</div>;
}

export default ViewAllSpots;
