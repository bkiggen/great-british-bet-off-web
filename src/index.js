import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Bakers } from "./containers/Bakers";
import { Welcome } from "./containers/Welcome";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Rankings } from "containers/Rankings";
import { Login } from "containers/Login";
import { Nav } from "components/Nav";

const ElementWrapper = (element) => (
  <>
    <Nav />
    {element}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: ElementWrapper(<Welcome />),
  },
  {
    path: "/login",
    element: ElementWrapper(<Login />),
  },
  {
    path: "/bakers",
    element: ElementWrapper(<Bakers />),
  },
  {
    path: "/rankings",
    element: ElementWrapper(<Rankings />),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
