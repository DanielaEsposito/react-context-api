import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { PostContextProvider } from "./assets/context/postsContext";

//PAGES
import HomePage from "./assets/pages/HomePage";
import About from "./assets/pages/About";
import PostsList from "./assets/pages/posts/PostsList";
import NotFound from "./assets/pages/NotFound";
import Show from "./assets/pages/posts/Show";
//LAYOUTS
import DefaultLayout from "./assets/layouts/DefaultLayout";

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/posts">
              <Route index Component={PostsList}></Route>
              <Route path=":id" Component={Show}></Route>
            </Route>
            <Route path="*" Component={NotFound}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
