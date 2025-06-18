import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AllProducts from "./components/custom/AllProducts";
import Analytics from "./components/custom/Analytics";
import CreateProducts from "./components/custom/CreateProducts";
import Footer from "./components/custom/Footer";
import Navbar from "./components/custom/Navbar";
import Orders from "./components/custom/Orders";
import { ThemeProvider } from "./components/custom/provider/theme-provider";
import Settings from "./components/custom/Settings";
import AdminLayout from "./Layout/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
 

const AppContent = () => {
  const location = useLocation();

  // Smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Define known valid paths
  const knownRoutes = [
    "/",
    "/signup",
    "/login",
    "/product",
    "/checkout",
    "/admin/login",
    "/success",
  ];

  const currentPath = location.pathname;

  // Check if layout should be hidden
  const is404 = !knownRoutes.includes(currentPath);
  const hideLayout = currentPath === "/success" || is404;

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={<AdminLayout children={<CreateProducts />} />}
        />
        <Route
          path="/admin/dashboard/all-products"
          element={<AdminLayout children={<AllProducts />} />}
        />
        <Route
          path="/admin/dashboard/analytics"
          element={<AdminLayout children={<Analytics />} />}
        />
        <Route
          path="/admin/dashboard/orders"
          element={<AdminLayout children={<Orders />} />}
        />
        <Route
          path="/admin/dashboard/settings"
          element={<AdminLayout children={<Settings />} />}
        />

        <Route path="/success" element={<Success />} />

        <Route path="*" element={<Error />} />

      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
