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
import "./App.css"
function App() {
  // const [quantity, setQuantity] = useState(0)
  // const [orderName, setOrderName] = useState("")
  // console.log(quantity, orderName);

  return (
    // <div className="flex flex-col w-full h-auto justify-center items-center">
    <div className="bg-backGround flex flex-col relative w-full overflow-y-scroll">
      <span className="fusion-imageframe imageframe-none imageframe-1 hover-type-none pulsate 
      right-4 top-4
        mobileSmall:right-6 mobileSmall:top-6
        tablet:right-16 tablet:top-16
      ">
        <img src="https://ccu.lieferbude.de/static/img/logo_white.4185c536c1cb.png" className="w-16 h-32
          mobileSmall:w-16 mobileSmall:h-32
          tablet:w-32 tablet:h-64
        "/>
      </span>
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
      {/* <PickUp /> */}
      <CustomerForm />
      {/* </div> */}
    </div>
  );
}

export default App;
