import "./App.css";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import AccountSelection from "./Components/AccountSelection";
import AccountCreate from "./Components/AccountCreate";
import Guest from "./Components/GuestUser";
import PaidUser from "./Components/PaidUser";
import PaidUserLinkShow from "./Components/PaidUserLinkShow";
import GuestLinkShow from "./Components/GuestLinkShow";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <div className="bgimage"></div>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-selection" element={<AccountSelection />} />
          <Route path="/account-create" element={<AccountCreate />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/paid-user" element={<PaidUser />} />
          <Route path="/paid-user-link-show" element={<PaidUserLinkShow />} />
          <Route path="/guest-link-show" element={<GuestLinkShow />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
