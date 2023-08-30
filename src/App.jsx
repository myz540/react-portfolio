import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PizzaMenu from "./pages/PizzaMenu";
import TravelList from "./pages/TravelList";
import EatNSplit from "./pages/EatNSplit";
import UsePopcorn from "./pages/UsePopcorn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pizza-menu" element={<PizzaMenu />} />
        <Route path="travel-list" element={<TravelList />} />
        <Route path="eat-n-split" element={<EatNSplit />} />
        <Route path="use-popcorn" element={<UsePopcorn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
