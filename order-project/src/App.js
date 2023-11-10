import Header from "./view/Header/Header";
import Hero from "./view/Hero/Hero";
import Product from "./view/Product/Product";
import TextIntro from "./view/TextIntro/TextIntro";
import CustomerForm from "./view/CollectionForm/CollectionForm";
import PickUp from "./view/PickUp/PickUp";
import { useState, useEffect } from "react";
import MediumSnow from "./asset/mediumSnow.png";
import SmallSnow from "./asset/smallSnow.png";
import Home from "./view/Home/Home";
import "./theme.css"
function App() {
  // const [quantity, setQuantity] = useState(0)
  // const [orderName, setOrderName] = useState("")
  // console.log(quantity, orderName);

  return (
    // <div className="flex flex-col w-full h-auto justify-center items-center">
    <div className="bg-backGround flex flex-col relative w-full overflow-y-scroll">
      < Home />
      <div className="illustration">
        <div className="i-large"></div>
        <div className="i-medium"></div>
        <div className="i-small"></div>
      </div>
      {/* <Hero /> */}
      <Header />
      {/* <Hero /> */}
      <TextIntro />
      <Product />
      <PickUp />
      <CustomerForm />
      {/* </div> */}
    </div>
  );
}

export default App;
