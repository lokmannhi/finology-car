import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DataPage from "./components/data/DataPage";
import Home from "./components/home/Home";
import Car from "./components/car/Car";
import NavBar from "./components/navigation/NavBar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/car" element={<Car />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// const Root = () => {
//   return (
//     <>
//       {" "}
//       <div>
//         {" "}
//         <Link to="/">Home</Link>
//         <Link to="/data">Data</Link>
//         <Link to="/car">Car</Link>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };
