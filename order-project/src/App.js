import Header from "./view/Header/Header";
import Hero from "./view/Hero/Hero";
import Product from "./view/Product/Product";
import TextIntro from "./view/TextIntro/TextIntro";
import CustomerForm from "./view/CollectionForm/CollectionForm";
import { useState, useEffect } from "react";
function App() {
  // const [quantity, setQuantity] = useState(0)
  // const [orderName, setOrderName] = useState("")
  // console.log(quantity, orderName);

  return (
    <div className="flex flex-col w-full h-auto justify-center items-center">
      <div className="flex flex-col">
        {/* <Hero /> */}
        <Header />
        <TextIntro />
        <Product />
        <CustomerForm />
      </div>
    </div>
  );
}

export default App;
