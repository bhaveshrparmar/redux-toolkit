
import { lazy } from "react";

const Home = lazy(() => import("../Food Pages/FoodCards"));
const CreateForm = lazy(() => import("../Food UI/FoodForm"));
const Navbar = lazy(() => import("../Food Pages/FoodNavbar"));
const ViewFood = lazy(() => import("../Food Pages/ShowFood"));
const FoodCards = lazy(() => import("../Food Pages/FoodCards"));
const TableFood = lazy(() => import("../Food Pages/FoodTable"));

const   routing = [
  {
    element: <TableFood />,

    path: "/",
  },

  {
    element: <CreateForm />,
    path: "/createForm",
  },
  {
    element: <CreateForm />,
    path: "/ordernow",
  },
  {
    element: <CreateForm />,
    path: "/updatefood/:id",
  },
  {
    element: <ViewFood />,
    path: "/viewfood/:id",
  },
  {
    element: <FoodCards />,
    path: "/allFoods",
  },
];

export default routing;
