import React, { Component, lazy, LazyExoticComponent, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import PhotosPage from "./pages/PhotosPage/PhotosPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import AuthenticatedRoute from "./guards/AuthenticatedRoute/AuthenticatedRoute.tsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.tsx"));

type Predicate = () => boolean;
type TComponent =
  | typeof Component
  | (() => JSX.Element)
  | LazyExoticComponent<any>;
const canActivate = (guards: Predicate[], C: TComponent, to :string = '/') => {
  return () => {
    const shouldActivate = guards.every((guard) => guard());

    if (!shouldActivate) return <Navigate to={to} />;

    return <C />;
  };
};

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "home",
        Component: canActivate([], HomePage),
        loader: () => ["a", "b", "c"],
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "photos",
            element: <PhotosPage />,
          },
        ],
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
