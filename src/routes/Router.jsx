import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router;