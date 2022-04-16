import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <section style={{padding: '80px 0'}}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </Container>
      </section>
    </div>
  );
}

export default App;
