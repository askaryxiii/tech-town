import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import Loading from "../pages/loading/Loading";
import { Footer } from "../components/layout/Footer";

const Home = lazy(() => import("../pages/home/Home"));
const Product = lazy(() => import("../pages/product/Product"));
const Cart = lazy(() => import("../pages/cart/Cart"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:documentId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
