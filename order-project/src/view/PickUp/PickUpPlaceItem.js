import { useState } from "react";

const PickUpPlaceItem = (props) => {
    const { address, id } = props;
    const [selectedItemId, setSelectedItemId] = useState(false);

    const handlePickPlace = () => {
        setSelectedItemId(!selectedItemId);
        localStorage.setItem('pick_up_place', address);
    };

    return (
        <div
            className={`p-2 
            cursor-pointer 
            w-1/2
            hover:bg-itemsBackground 
            hover:border-itemsBackground 
            ${selectedItemId ? 'border-solid border-4 bg-backGround border-itemsBackground' : ''}
            mobileSmall: w-full
            laptop:w-1/2
            desktop:w-1/2
            `}
            onClick={handlePickPlace}
        >
            {address}
        </div>
    );
};

export default PickUpPlaceItem;

