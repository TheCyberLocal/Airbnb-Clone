import { useNavigate } from "react-router-dom";

function CreateSpotButton() {
  const nav = useNavigate();

  function handleClick() {
    nav("/spots/new");
  }

  return (
    <button onClick={handleClick} id="create-spot-button">
      Create a New Spot
    </button>
  );
}

export default CreateSpotButton;
