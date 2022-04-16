import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Registration = () => {
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const getRegEmail = e => {
    setRegEmail(e.target.value);
  };

  const getRegPass = e => {
    setRegPass(e.target.value);
  };
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleRegistration = e => {
    e.preventDefault();
    // event.preventDefault()
    createUserWithEmailAndPassword(regEmail, regPass);
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    //   console.log(user.user.email);
    return (
      <div>
        <p>Signed In User: {user.user.email}</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Registration</h3>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={getRegEmail}
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
            onBlur={getRegPass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
