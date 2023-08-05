import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />   
      </Routes>
    </BrowserRouter>
  );
};

export default App;
