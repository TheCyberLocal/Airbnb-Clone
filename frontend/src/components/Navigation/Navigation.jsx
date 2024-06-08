import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const nav = useNavigate();

  const CreateSpotButton = () => {
    return (
      <button
        className="clickable"
        onClick={() => nav("/spots/new")}
        id="create-spot"
      >
        Create a New Spot
      </button>
    );
  };

  return (
    <nav id="navigation">
      <img
        src="/logo.png"
        className="clickable"
        id="logo"
        alt="Airbnb Logo"
        onClick={() => nav("/")}
      />
      <div id="right-container">
        {sessionUser && <CreateSpotButton />}
        {isLoaded && <ProfileButton user={sessionUser} />}
      </div>
    </nav>
  );
}

export default Navigation;
