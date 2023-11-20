import WarningIcon from "../../asset/warning.png"
import SnowIcon from "../../asset/snowIcon.png"
import SnowMan from "../../asset/snowMan.png"
import Reindeer from "../../asset/icons8-reindeer-64.png"
import Sleigh from "../../asset/icons8-sleigh-64.png"
import SantaIcon from "../../asset/santaIcon.png"
import GiftIcon from "../../asset/gift.png"
import BoyIcon from "../../asset/boy.png"
import GirlIcon from "../../asset/girl.png"
import FireIcon from "../../asset/fire.png"
const TextIntro = () => {
    const scrollToSection = () => {
        // Calculate scroll amount based on screen height
        const screenHeight = window.innerHeight;
        const scrollAmount = screenHeight * 2.6; // Adjust the multiplier as needed

        // Scroll with smooth behavior
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    };
    return (
        <div className="bg-backGround opacity-95 flex flex-col gap-10 px-40 py-8 w-full h-auto items-center
        mobileSmall:px-4 mobileSmall:gap-2
        tablet:px-12
        laptop:px-16 laptop:gap-4
        desktop:px-32 desktop:gap-4
        ">

            <div className="flex flex-col gap-1 text-center">
                <div className="font-DancingScript text-textTitle text-[60px] 
            mobileSmall:text-[40px]
            tablet:text-[60px]
            desktop:text-[85px]
            desktopLarge:text-[110px]
            "

                >
                    Gans schön lecker!</div>

                <div className="font-DancingScript text-textTitle text-[50px] 
            mobileSmall:text-[30px]
            tablet:text-[60px]
            desktop:text-[85px]
            desktopLarge:text-[110px]
            "

                >
                    Gänse ab jetzt vorbestellen</div></div>

            <p className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            ">
                Freuen Sie sich auf den Höhepunkt des Festes: unsere köstliche Gans, meisterhaft zubereitet von unseren erfahrenen Köchen.
            </p>

            <p className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-lg mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            ">
                Unsere Weihnachtsgänse sind am 24.12.2023 von 12:00 Uhr bis 15:00 Uhr erhältlich.
            </p>

            <p className="bg-stone-50 flex text-2xl text-textWarning font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            ">
                Damit Sie ein vollständiges Festmahl genießen können, verkaufen wir unsere Gans mit sorgfältig ausgewählten Beilagen: hausgemachtem Rotkohl, der eine perfekte Mischung aus süß und würzig bietet, und Klößen, die eine ideale Begleitung für die zarte Gans sind.
            </p>
            {/* <p className="flex text-2xl text-textColor font-Changa leading-loose italic
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-3xl
                desktopLarge:text-5xl
            ">
                hausgemachtem Rotkohl, der eine perfekte Mischung aus süß und würzig bietet, und Klößen, die eine ideale Begleitung für die zarte Gans sind.
            </p> */}
            {/* <img src={WarningIcon} className="w-10 h-10
                tablet:w-12 tablet:h-12
                desktop:w-20 desktop:h-20
                desktopLarge:w-32 desktopLarge:h-32
            "
            /> */}
            <p className="flex text-2xl text-textColor font-Changa italic
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            ">
                Bitte beachten Sie, dass die Vorbestellung Ihres Weihnachtsgänseessens erforderlich ist, um sicherzustellen, dass wir Ihnen die beste Qualität und den besten Service bieten können.
            </p>
            <p className="flex text-2xl text-textColor font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                desktop:text-xl
                desktopLarge:text-xl
            ">
                Sichern Sie sich Ihr köstliches Weihnachtsgans und genießen Sie eine sorgenfreie und festliche Zeit mit Ihren Liebsten. Wir freuen uns darauf, Ihnen einen winterlichen Hochgenuss zu bieten.
            </p>
            <div className="w-[300px] flex justify-center font-DancingScript px-3 py-4 bg-buttonIcon text-textColor font-extrabold hover:border-4 hover:bg-red-950 rounded-md mb-6 cursor-pointer desktopLarge:px-5 desktopLarge:py-7 ">
                <button
                    onClick={scrollToSection}
                    className="w-full h-full text-3xl" type="submit">Jetzt online bestellen</button>
            </div>
        </div>
    )
}

export default TextIntro
