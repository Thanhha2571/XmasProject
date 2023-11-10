import PickUpDateItem from "./PickUpDateItem";
import PickUpPlaceItem from "./PickUpPlaceItem";

const PickUp = () => {

    const pickUpAddressList = [
        {
            address: "CôCô Indochine - Augustinerstraße 1, 90403 Nürnberg",
            id: 1
        },
        {
            address: "CôCô Shushi and Grill - Obstarkt 3, 90762 Fürth",
            id: 2
        },
        {
            address: "CôCô Erlangen - Nürnberger Str.31, 91052 Erlangen",
            id: 3
        },
        {
            address: "CôCô Augsburg - Kapuzinergasse 24, 86150 Augsburg ( Shushi only )",
            id: 4
        }
    ];

    const pickUpDateList = [
        {
            date: "So. 03.12.2023 (1.Advent)",
            id: 1
        },
        {
            date: "So. 10.12.2023 (2.Advent)",
            id: 2
        },
        {
            date: "So. 17.12.2023 (3.Advent)",
            id: 3
        },
        {
            date: "So. 24.12.2023 (4.Advent - Heiligabend)",
            id: 4
        }
    ]
    return (
        <div className="flex flex-col bg-backGround opacity-95 w-full h-auto px-40 py-8 justify-center items-center gap-10 
            mobileSmall:px-4 mobileSmall:py-2
            desktop:px-32 desktop:py-8
        ">
            {/* <div className="text-[60px] text-textColor font-DancingScript ">PICKING PLACE AND TIME</div> */}
            <div className="flex flex-col gap-10 w-full h-auto text-textColor font-Montserrat">
                <div className="p-2 flex text-[50px] font-DancingScript
                    mobileSmall:text-[30px]
                    desktop:text-[50px]
                ">Which Place Do You Want to Pick Up?</div>
                <div className="text-2xl font-bold flex flex-row flex-wrap
                    mobileSmall:text-base
                    desktop:text-2xl
                ">
                    {pickUpAddressList.map((item, index) =>
                        <PickUpPlaceItem
                            key={index}
                            address={item.address}
                            id={item.id}
                        />
                    )}
                </div>
                <div className="p-2 flex text-[50px] font-DancingScript
                    mobileSmall:text-[30px]
                    desktop:text-[50px]
                ">Which Day Do You Want to Pick Up?</div>
                <div className="text-2xl font-bold flex flex-row flex-wrap
                    mobileSmall:text-base
                    desktop:text-2xl
                ">
                    {pickUpDateList.map((item, index) =>
                        <PickUpDateItem
                            key={index}
                            date={item.date}
                            id={item.id}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PickUp