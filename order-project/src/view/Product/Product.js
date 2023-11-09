import ProductItem from "./ProductItem";
import Product1 from "../../asset/ngong.jpeg";
import Product2 from "../../asset/ngong.jpeg";
import Product3 from "../../asset/ngong.jpeg";
import Product4 from "../../asset/ngong.jpeg";
import Product5 from "../../asset/ngong.jpeg";
import Santa from "../../asset/santa.png";
const Product = (props) => {
    const { quantity, setQuantity, orderName, setOrderName } = props;
    const productList = [
        {
            id: 1,
            img: Product1,
            name: "Martini Hafermastgans",
            description: "Discover the first-ever museum to join the Modular Buildings collection. Home to an array of brick-built exhibits it features dual skylights that allow light to permeate the building’s 2 levels, illuminating the towering brachiosaurus skeleton and collection of treasures within.",
        },
        {   
            id: 2,
            img: Product2,
            name: "CoCo Christmast & U",
            description: "rom festively decorated guest rooms to glowing log fires, an outdoor skating rink and even an outhouse, the LEGO® Icons Alpine Lodge makes a playful and rewarding addition to your LEGO Icons Winter Village Collection.",
        },
        {
            id: 3,
            img: Product3,
            name: "Vegan Lover",
            description: "Build the festive spirit – Kids can relive the Christmas reunion party from the LEGO® Star Wars: Holiday Special with this brick-built 40658 Millennium Falcon Holiday Diorama",
        },
        {   
            id: 4,
            img: Product4,
            name: "XMas & Friends",
            description: "Seasonal build for kids, friends and families – Celebrate the holiday season with this LEGO® interpretation of the iconic Nutcracker figure",
        },
        {   
            id: 5,
            img: Product5,
            name: "Merry Shushi Christmas",
            description: "Build an Easter display – Assemble the 287 pieces to create a scene with 2 bunnies, 5 Easter eggs and 3 tulips, with customization tips included in the building instructions",
        },
    ];
    return (
        <div className="flex flex-col font-Changa px-40 py-8 w-full h-auto gap-16 bg-backGround opacity-95 justify-center items-center border ">
            <div className="font-bold text-[#E3D5C8] text-[60px] font-DancingScript gap-10">M E N U</div>
            {productList.map((product,index) =>
                <ProductItem
                    key={index}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    description={product.description}
                    // quantity={quantity} 
                    // setQuantity={setQuantity} 
                    // orderName={orderName} 
                    // setOrderName={setOrderName}
                />)}
            <img src={Santa} className="w-full h-36" />
        </div>
    )
}

export default Product