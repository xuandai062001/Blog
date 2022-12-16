// src/App.js

import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import Header from "./components/Header.js";
import FilteredPosts from "./views/FilteredPosts.js"
// import Pagination from "./components/Pagination.js--";
import "./App.css";

function App() {
  return (
    <HashRouter>

      <Header />
      <div>
      <Routes>
	 	   <Route element={<AllPosts />} path="/" />
       
       <Route element={<OnePost />} path="/:slug" />

       <Route element={<FilteredPosts />} path="/FilteredPosts/:title" />

      </Routes>
      </div>
      {/* <Pagination /> */}
      </HashRouter>
      
  );
}
export default App;