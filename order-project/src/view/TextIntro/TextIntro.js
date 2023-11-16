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
    return (
        <div className="bg-backGround flex flex-col gap-10 px-40 py-8 w-full h-auto items-center
        mobileSmall:px-4 mobileSmall:gap-3
        laptop:px-12 laptop:gap-8
        desktop:px-32 desktop:py-8
        ">

            <div className="flex flex-col gap-1 text-center">
                <div className="font-DancingScript text-textTitle text-[60px] 
            mobileSmall:text-[40px]
            laptop:text-[50px]
            desktop:text-[60px]"

                >
                    Gans schön lecker</div>

                <div className="font-DancingScript text-textTitle text-[50px] 
            mobileSmall:text-[30px]
            laptop:text-[40px]
            desktop:text-[50px]"

                >
                    Gänse ab jetzt vorbestellen</div></div>

            <p className="flex text-2xl text-textColor font-Montserra leading-loose
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Freuen Sie sich auf den Höhepunkt des Festes: unsere köstliche Gans, meisterhaft zubereitet von unseren erfahrenen Köchen.
            </p>

            <p className="flex text-2xl text-textWarning font-Montserra leading-loose italic
                mobileSmall:text-lg mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Unsere Weihnachtsgänse sind am 24.12.2023 von 12:00 Uhr bis 15:00 Uhr erhältlich.
            </p>

            <p className="flex text-2xl text-textColor font-Montserra leading-loose
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Damit Sie ein vollständiges Festmahl genießen können, verkaufen wir unsere Gans mit sorgfältig ausgewählten Beilagen:
            </p>
            <p className="flex text-2xl text-textColor font-Montserra leading-loose italic
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                hausgemachtem Rotkohl, der eine perfekte Mischung aus süß und würzig bietet, und Klößen, die eine ideale Begleitung für die zarte Gans sind.
            </p>
            <img src={WarningIcon} className="w-10 h-10" />
            <p className="flex text-2xl text-textColor font-Montserra underline
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Bitte beachten Sie, dass die Vorbestellung Ihres Weihnachtsgänseessens erforderlich ist, um sicherzustellen, dass wir Ihnen die beste Qualität und den besten Service bieten können. 
            </p>
            <p className="flex text-2xl text-textColor font-Montserra leading-loose
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Sichern Sie sich Ihr köstliches Weihnachtsgans und genießen Sie eine sorgenfreie und festliche Zeit mit Ihren Liebsten. Wir freuen uns darauf, Ihnen einen winterlichen Hochgenuss zu bieten.
            </p>
            <div className="flex flex-row gap-2 justify-center items-center mt-2">
                <img src={SnowIcon} className="w-6 h-6"/>
                <img src={SnowMan} className="w-6 h-6 rotate-[-20deg]"/>
                <img src={Reindeer} className="w-6 h-6 rotate-[20deg]"/>
                <img src={Sleigh} className="w-6 h-6 rotate-[-20deg]"/>
                <img src={SantaIcon} className="w-6 h-6 rotate-[20deg]"/>
                <img src={GiftIcon} className="w-6 h-6 rotate-[-20deg]"/>
                <img src={BoyIcon} className="w-6 h-6 rotate-[20deg]"/>
                <img src={GirlIcon} className="w-6 h-6 rotate-[-20deg]"/>
                <img src={FireIcon} className="w-6 h-6 rotate-[20deg]"/>
                <img src={SnowIcon} className="w-6 h-6"/>
            </div>
        </div>
    )
}

export default TextIntro
