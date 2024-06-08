import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const [validForm, setValidForm] = useState(false);
  useEffect(() => {
    setValidForm(
      username.length > 3 &&
        password.length > 5 &&
        confirmPassword.length > 5 &&
        email.length &&
        firstName.length &&
        lastName.length,
    );
  }, [email, username, firstName, lastName, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        }),
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword:
        "Confirm Password field must be the same as the Password field",
    });
  };

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      {errors.username && <p className="error">{errors.username}</p>}
      <input
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      <input
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errors.password && <p className="error">{errors.password}</p>}
      <input
        type="password"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button disabled={!validForm} type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupFormModal;
