import { BrowserRouter, Routes, Route } from "react-router-dom";
import BridgePage from "./pages/BridgePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BridgePage />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
