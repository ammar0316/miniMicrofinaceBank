
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ApplyLoan from "./Pages/ApplyLoan";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignUp from "./Authentication/signUp";
import SignIn from "./Authentication/signIn";
import UserProfile from "./Pages/userProfile";
import DashBoard from "./Dashboard/DashBoard";
import AllLoanUsers from "./Dashboard/AllLoanUsers";
import AllSignUpUsers from "./Dashboard/AllSignUpUsers";
import LoanReview from "./Dashboard/LoanReview";
import DonateLoan from "./Pages/DonateLoan";
import TotalLoanPage from "./Dashboard/TotalLoanPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("email");
  console.log(user)
  return user ? children : <Navigate to="/signIn" />;
};
const AdminRoute = ({ children }) => {
  const user = localStorage.getItem("email");
  return user === "ammarmuhamin@gmail.com" ? (
    children
  ) : (
    <Navigate to="/signIn" />
  );
};

function App() {
 

 
  const allPath = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Services />,
        },
        {
          path: "/apply-loan",
          element: (
            <ProtectedRoute>
              <ApplyLoan />,
            </ProtectedRoute>
          ),
        },
        {
          path: "/donate-loan",
          element: <DonateLoan />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/signIn",
          element: <SignIn  />,
        },
        {
          path: "/userprofile",
          element: (
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          ),
          children: [
            { path: "all-loan-users", element: <AllLoanUsers /> },
            { path: "all-signup-users", element: <AllSignUpUsers /> },
            { path: "loan-review", element: <LoanReview /> },
            { path: "total-donate-loan", element: < TotalLoanPage/> },
          ],
        },
      ],
    },
  ]);
  return (
    <> 
      <RouterProvider router={allPath} />

    
    </>
  );
}

export default App;
