import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Categories from "./Components/Categories";
import RandomMeal from "./Components/RandomMeal";
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/random" element={<RandomMeal />}></Route>
      </Route>
    )
  );
  return (
    <div className="w-full h-full text-white bg-[#111111]">
      <div className="max-w-full mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
