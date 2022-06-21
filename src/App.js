import Header from "./Header";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Slider from "./Slider";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
