import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "orders",
        element: <div>Orders</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
      },
      {
        path: "checkout",
        element: <div>Checkout</div>,
      },
      {
        path: "book/:id",
        element: <div>Book</div>,
      },
      {
        path: "user-dashboard",
        element: <div>User Dashboard</div>,
      },
    ],
  },
  {
    path: "admin",
    element: <div>Admin</div>,
  },
  {
    path: "dashboard",
    element: <div>Dashboard Layout</div>,
    children: [
      {
        path: "",
        element: <div>Dashboard</div>,
      },
      {
        path: "add-new-book",
        element: <div>Add New Book</div>,
      },
      {
        path: "edit-book/:id",
        element: <div>Edit Book</div>,
      },
      {
        path: "manage-books",
        element: <div>Manage Books</div>,
      }
    ],
  },
]);

export default router;
