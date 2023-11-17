// import { useState, useEffect } from "react";

import CookerIcon from "../../asset/cookerIcon.png"
import ChefIcon from "../../asset/chefIcon.png"
import SauceIcon from "../../asset/sauce.png"
import FireIcon from "../../asset/fireIcon.png"
const ProductItem = (props) => {
    const { img,imgRectangle } = props;
    const isDesktop = window.innerWidth > 1024;
    return (
        <div className="flex flex-col gap-3 w-full h-auto py-6

        ">
            <img src={isDesktop ? imgRectangle : img} className="w-full h-auto
                mobileSmall:w-full mobileSmall:h-auto
            " />
            <div className="flex flex-col justify-center items-center gap-3
                tablet:px-8 tablet:gap-6
                laptop:px-12 laptop:gap-8
                desktop:px-14 desktop:gap-10
                desktopLarge:px-18 desktopLarge:gap-12
            ">
                <div className="flex flex-row gap-5 mt-5 ">
                    <img src={ChefIcon} className=" 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                    <img src={ChefIcon} className=" 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                    <img src={ChefIcon} className="w-full h-auto 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />

                </div>
                <p className="flex text-2xl text-textColor font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:text-3xl
                desktopLarge:text-5xl
            ">
                    In jeder Gans stecken 20 Stunden Vorbereitung und Liebe zum Detail.
                </p>
                <p className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:text-3xl
                desktopLarge:text-5xl
            ">
                    Wir beginnen mit einer marinierenden Mischung aus winterlichen Gewürzen, gefolgt von einer Füllung mit Äpfeln, Pflaumen, Zwiebeln und weiteren Gewürzen. Anschließend ruht die Gans für 12-18 Stunden, damit die Aromen in das zarte Fleisch einziehen können.
                </p>
                {/* <div className="flex flex-row gap-5">
                    <img src={SauceIcon} className=" 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                    <img src={SauceIcon} className=" 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                    <img src={SauceIcon} className="w-full h-auto 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                </div> */}
                <p className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:text-3xl
                desktopLarge:text-5xl
            ">
                    Das beim Garen austretende, würzige Fett wird in unserer köstlichen Sauce verwendet und dient auch dazu, die Gans während des Garprozesses zu bestreichen.
                </p>
                {/* <div className="flex flex-row gap-5">
                    <img src={FireIcon} className=" 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                    <img src={CookerIcon} className=" 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                    <img src={FireIcon} className="w-full h-auto 
                mobileSmall:w-10 mobileSmall:h-10
                desktop:w-20 desktop:h-20
                desktopLarge:w-28 desktopLarge:h-28
            " />
                </div> */}
                <p className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:text-3xl
                desktopLarge:text-5xl
            ">
                    Schließlich wird die Gans auf hoher Temperatur gebacken, um eine leckere, knusprige Haut zu erzielen.
                </p>
            </div>
        </div>
    );
};

export default ProductItem;


