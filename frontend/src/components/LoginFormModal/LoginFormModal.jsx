import { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const [validForm, setValidForm] = useState(false);
  useEffect(() => {
    setValidForm(credential.length > 3 && password.length > 5);
  }, [credential, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        setErrors({
          ...data.errors,
          credential: "The provided credentials were invalid",
        });
      });
  };

  const demoLogin = () => {
    setCredential("elonmusk");
    setPassword("Mars2024!");
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).then(
      closeModal
    );
  };

  return (
    <form id="login-form-modal" onSubmit={handleSubmit}>
      <h1>Log In</h1>
      {errors.credential && <p className="error">{errors.credential}</p>}
      <input
        type="text"
        value={credential}
        placeholder="Username or Email"
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button id="login" disabled={!validForm} type="submit">
        Log In
      </button>
      <p id="or">or</p>
      <button onClick={demoLogin}>Log in as Demo User</button>
    </form>
  );
}

export default LoginFormModal;
