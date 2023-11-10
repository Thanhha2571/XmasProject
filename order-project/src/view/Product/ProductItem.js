import { useState, useEffect } from "react";

const ProductItem = (props) => {
    const { id, name, img, description } = props;
    const [quantity, setQuantity] = useState(0);
    const [orderName, setOrderName] = useState("");

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            setOrderName(name);
        }
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        setOrderName(name);
    };

    useEffect(() => {
        // Retrieve existing products from localStorage
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

        // Check if the product with the same id already exists in the array
        const existingProductIndex = existingProducts.findIndex(product => product.id === id);

        if (existingProductIndex !== -1) {
            // If the product exists, update its quantity
            existingProducts[existingProductIndex].quantity = quantity;
        } else if (quantity > 0) {
            // If the product doesn't exist and quantity is greater than 0, add a new product
            const productData = {
                id: id, // Assuming each product has a unique identifier
                orderName: orderName,
                quantity: quantity,
            };

            // Push the new product data into the existing products array
            existingProducts.push(productData);
        }

        // Store the updated products array back in localStorage
        localStorage.setItem('products', JSON.stringify(existingProducts));
    }, [id, orderName, quantity]);
    return (
        <div className="bg-itemsBackground flex flex-row gap-8 w-full h-auto py-6 border border-[#103E3F] rounded-full 
            mobileSmall:flex-col mobileSmall:border-none mobileSmall:justify-center mobileSmall:items-center mobileSmall:bg-backGround mobileSmall:rounded-none
            laptop:flex-row laptop:bg-itemsBackground laptop:gap-8 laptop:w-full laptop:h-auto laptop:py-6 laptop:border laptop:border-itemsBackground laptop:rounded-full laptop:mb-3
        ">
            <img src={img} className="w-[400px] h-[400px] ml-10 rounded-full
                mobileSmall:full mobileSmall:h-auto mobileSmall:rounded-none mobileSmall:ml-0
                tablet:w-[500px]
                laptop:w-[350px] laptop:h-[350px] laptop:ml-10 laptop:rounded-full
                desktop:w-[400px] desktop:h-[400px]
            " />
            <div className="flex flex-col px-10 justify-between
                mobileSmall:px-0 mobileSmall:justify-center mobileSmall:gap-5
                laptop:px-10 laptop:justify-between
            ">
                <div className="flex flex-col gap-5" >
                    <div className="text-[60px] text-textColor font-DancingScript
                        mobileSmall:text-[30px]
                        laptop:text-[40px]
                        desktop:text-[60px]
                    ">{name}</div>
                    <div className="text-[22px] text-textColor font-Montserrat font-bol
                        mobileSmall:text-base
                        laptop:text-[15px]
                        desktop:text-[22px]
                    ">{description}</div>
                </div>
                <div className="flex gap-4
                    mobileSmall:justify-center mobileSmall:items-center
                ">
                    <button onClick={handleDecrease} className="bg-backGround text-textColor px-4 py-2 rounded">
                        -
                    </button>
                    <div className="text-xl text-textColor font-Montserrat">{quantity}</div>
                    <button onClick={handleIncrease} className="bg-backGround text-textColor px-4 py-2 rounded">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;