import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Product";
import Product from "./Components/Footer";

const App = () => {
  const [cartValue, setCartValue] = useState(0);

  return (
    <div>
      <Header cartValue={cartValue} />
      <Product cartValue={cartValue} setCartValue={setCartValue} />
      <Footer />
    </div>
  );
};

export default App;
