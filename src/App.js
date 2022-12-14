// src/App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Header from "./components/Header.js";
import FilteredPosts from "./views/FilteredPosts.js"
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <div>
      <Routes>
	 	   <Route element={<AllPosts />} path="/" />
       
       <Route element={<OnePost />} path="/:slug" />

       <Route element={<FilteredPosts />} path="/FilteredPosts/:title" />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;