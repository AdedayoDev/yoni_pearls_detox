import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/testimonials' element={<TestimonialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
