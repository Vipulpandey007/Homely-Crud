import "./App.css";
import Country from "./Components/Country";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import State from "./Components/State";
import StateCreate from "./Components/StateCreate";
import { createBrowserRouter, Outlet } from "react-router-dom";
import CountryCreate from "./Components/CountryCreate";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryCreate />,
      },
      {
        path: "/state",
        element: <State />,
      },
      {
        path: "/state/:id",
        element: <StateCreate />,
      },
    ],
  },
]);
export default App;
