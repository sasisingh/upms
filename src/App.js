import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetailsPage from "./pages/UserDetailsPage";
import AddUserPage from "./pages/AddUserpage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersPage />}></Route>
          <Route path="/user-details/:userId" element={<UserDetailsPage />}></Route>
          <Route path="/add-user" element={<AddUserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
