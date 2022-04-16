import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPass, setloginPass] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const getloginEmail = (e) => {
    setloginEmail(e.target.value);
  };

  const getloginPass = (e) => {
    setloginPass(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginEmail, loginPass);
  };
  if (user) {
    return navigate("/profile");
  }
  return (
    <div>
      <h3>Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={getloginEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={getloginPass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
<p>{error?.message}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
