import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import Loading from "../pages/loading/Loading";

const Home = lazy(() => import("../pages/home/Home"));
const Product = lazy(() => import("../pages/product/Product"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:documentId" element={<Product />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
