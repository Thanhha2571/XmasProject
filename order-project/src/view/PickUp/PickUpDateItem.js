import { useState } from "react";

const PickUpDateItem = (props) => {
    const { date, id } = props;
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handlePickDate = () => {
        setSelectedItemId(!selectedItemId);
        localStorage.setItem('pick_up_date', date);
    };

    return (
        <div
            className={`p-2 
            cursor-pointer 
            w-1/2
            hover:bg-itemsBackground 
            hover:border-itemsBackground 
            ${selectedItemId ? 'border-solid border-4 bg-backGround border-itemsBackground' : ''}
            mobileSmall:w-full
            laptop:w-1/2
            desktop:w-1/2
            `}
            onClick={handlePickDate}
        >
            {date}
        </div>
    );
};

export default PickUpDateItem;

