import ProductItem from "./ProductItem";
import Product1 from "../../asset/cocopost6.jpg";
import Product1Rectangle from "../../asset/6.jpg"
import Product2 from "../../asset/Shushi1.jpg";
import Product3 from "../../asset/Shushi2.jpg";
import Product4 from "../../asset/Shushi3.jpg";
import Product5 from "../../asset/Shushi4.jpg";
import Santa from "../../asset/santa.png";
const Product = (props) => {
    // const { quantity, setQuantity, orderName, setOrderName } = props;
    const scrollToSection = () => {
        // Calculate scroll amount based on screen height
        const screenHeight = window.innerHeight;
        const scrollAmount = screenHeight * 0.8; // Adjust the multiplier as needed
      
        // Scroll with smooth behavior
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      };
    const productList = [
        {
            id: 1,
            img: Product1,
            imgRectangle: Product1Rectangle,
            // name: "Martini Hafermastgans",
            // description: "Discover the first-ever museum to join the Modular Buildings collection. Home to an array of brick-built exhibits it features dual skylights that allow light to permeate the building’s 2 levels, illuminating the towering brachiosaurus skeleton and collection of treasures within.",
        },
        // {
        //     id: 2,
        //     img: Product2,
        //     name: "CoCo Christmast & U",
        //     description: "rom festively decorated guest rooms to glowing log fires, an outdoor skating rink and even an outhouse, the LEGO® Icons Alpine Lodge makes a playful and rewarding addition to your LEGO Icons Winter Village Collection.",
        // },
        // {
        //     id: 3,
        //     img: Product3,
        //     name: "Vegan Lover",
        //     description: "Build the festive spirit – Kids can relive the Christmas reunion party from the LEGO® Star Wars: Holiday Special with this brick-built 40658 Millennium Falcon Holiday Diorama",
        // },
        // {
        //     id: 4,
        //     img: Product4,
        //     name: "XMas & Friends",
        //     description: "Seasonal build for kids, friends and families – Celebrate the holiday season with this LEGO® interpretation of the iconic Nutcracker figure",
        // },
        // {
        //     id: 5,
        //     img: Product5,
        //     name: "Merry Sushi Christmas",
        //     description: "Build an Easter display – Assemble the 287 pieces to create a scene with 2 bunnies, 5 Easter eggs and 3 tulips, with customization tips included in the building instructions",
        // },
    ];
    return (
        <div className="flex flex-col font-Changa px-40 py-8 w-full h-auto gap-16 bg-backGround opacity-95 justify-center items-center
        mobileSmall:px-4 mobileSmall:gap-5
        tablet:px-12
        laptop:px-16 laptop:gap-12
        desktop:px-32 desktop:py-8 desktop:gap-16
        ">
            {productList.map((product, index) =>
                <ProductItem
                    key={index}
                    id={product.id}
                    img={product.img}
                    imgRectangle={product.imgRectangle}
                />)}

            <div className="w-[300px] flex justify-center font-DancingScript px-3 py-4 bg-buttonIcon text-textColor font-extrabold hover:border-4 hover:bg-red-950 rounded-md mb-6 cursor-pointer desktopLarge:px-5 desktopLarge:py-7 ">
                <button 
                onClick={scrollToSection}
                className="w-full h-full text-3xl" type="submit">Jetzt online bestellen</button>
            </div>
            <img src={Santa} className="w-full h-36
                mobileSmall:h-auto
                laptop:h-auto
                desktop:h-auto
                desktopLarge:h-auto
            " />
        </div>
    )
}

export default Product