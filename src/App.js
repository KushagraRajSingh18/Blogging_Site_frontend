import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Root from "./pages/Root";
import "./App.css";
import BlogDetail from "./pages/BlogDetail";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
