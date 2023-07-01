import React, { useState } from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

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
