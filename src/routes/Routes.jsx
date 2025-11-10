import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Error from "../error/Error";
import Login from "../pages/logReg/Login";
import Register from "../pages/logReg/Register";
import AddFood from "../PrivateRoutes/AddFood";
import RequestMyFood from "../PrivateRoutes/RequestMyFood";
import ManageMyFoods from "../PrivateRoutes/ManageMyFoods";
import AvailableFoods from "../pages/AvailableFoods";
import PrivateRoute from "../PrivateRoutes/private/PrivateRoute";
import PrivateRegLog from "../PrivateRoutes/private/PrivateRegLog";
import FoodDetails from "../pages/FoodDetails";
import UpdateFood from "../PrivateRoutes/UpdateFood";
import Recipe from "../footerPage/Recipe";
import PrivacyPolicy from "../footerPage/PrivacyPolicy";
import Accessibility from "../footerPage/Accessibility";
import ContactUs from "../footerPage/ContactUs";
import ManageCookie from "../footerPage/ManageCookie";
import Bread from "../cookingblog/Bread";
import Pizza from "../cookingblog/Pizza";
import Salad from "../cookingblog/Salad";
import SuccessStories from "../footerPage/SuccessStories";
import CommunityEvent from "../footerPage/CommunityEvent";
import Donate from "../pages/home/unique/Donate";
import Dashboard from "../layout/Dashboard";
import DashHome from "../pages/dashboard/home/DashHome";
import Profile from "../components/dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/login",
        element: (
          <PrivateRegLog>
            <Login></Login>
          </PrivateRegLog>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRegLog>
            <Register></Register>
          </PrivateRegLog>
        ),
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/donate",
        element: <Donate></Donate>,
      },
      // footer section page
      {
        path: "/recipe",
        element: <Recipe></Recipe>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/accessibility",
        element: <Accessibility></Accessibility>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/manage-cookie",
        element: <ManageCookie></ManageCookie>,
      },
      {
        path: "/success-stories",
        element: <SuccessStories></SuccessStories>,
      },
      {
        path: "/events",
        element: <CommunityEvent></CommunityEvent>,
      },
      // cooking blog routes
      {
        path: "/bread-recipe",
        element: <Bread></Bread>,
      },
      {
        path: "/pizza-recipe",
        element: <Pizza></Pizza>,
      },
      {
        path: "/salad-recipe",
        element: <Salad></Salad>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/request-myfood",
        element: (
          <PrivateRoute>
            <RequestMyFood></RequestMyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-myfoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
    ]
  },
]);
export default router;
