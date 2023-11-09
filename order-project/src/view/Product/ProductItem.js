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
        <div className="bg-itemsBackground flex flex-row gap-8 w-full h-auto py-6 border border-[#103E3F] rounded-full ">
            <img src={img} className="w-[250px] h-[250px] ml-10 rounded-full" />
            <div className="flex flex-col gap-5 px-10">
                <div className="text-5xl text-textColor font-DancingScript">{name}</div>
                <div className="text-base text-textColor font-Montserrat">{description}</div>
                <div className="flex gap-4">
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