import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreateSpotButton from "./CreateSpotButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const nav = useNavigate();

  return (
    <nav id="nav-bar">
      <img
        src="/logo.png"
        className="clickable"
        id="nav-logo"
        alt="Airbnb Logo"
        onClick={() => nav("/")}
      />
      <div id="nav-bar-right">
        {sessionUser && <CreateSpotButton />}
        {isLoaded && <ProfileButton user={sessionUser} />}
      </div>
    </nav>
  );
}

export default Navigation;
