import React from "react";
import './rippled.css';
import LandingPage from "./pages/landingpage";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/loginpage";
import ForGotPwd from './pages/forgotpwd';
import SentACode from "./pages/sentacode";
import{ BrowserRouter, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="loginpage" element={<SignInPage />}></Route>
      <Route path="forgotpwd" element={<ForGotPwd />}></Route>
      <Route path="sentacode" element={<SentACode />}></Route>
    </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <SignUpPage />
    //   <SignInPage />
      
    // </div>
  );
}

export default App;
