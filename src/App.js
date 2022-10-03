import React from "react";
import LandingPage from "./landingpage";
import SignUpPage from "./signup";
import SignInPage from "./loginpage";
import ForGotPwd from './forgotpwd';
import SentACode from "./sentacode";
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
