import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/testimonials' element={<TestimonialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
