import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import { useState } from "react";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import {SearchProvider} from "./Context/Search"

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchProvider>
    <Routes>
      <Route path="/" element={<Layout onSearch={setSearchTerm} />}>
        <Route index element={<Home search={searchTerm} />} />
         <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
    </SearchProvider>
  );
}

export default App;

