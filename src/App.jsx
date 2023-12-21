import React,{useState} from "react";
import PriceCard from "./components/PriceCard";
import Header from "./components/Header";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";

function App() {
    let [cart, setCart] = useState(0);
  return (
    <>
      <HeaderBar cart={cart} setCart={setCart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <PriceCard cart={cart} setCart={setCart} />
            <PriceCard cart={cart} setCart={setCart} />
            <PriceCard cart={cart} setCart={setCart} />
            <PriceCard cart={cart} setCart={setCart} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
