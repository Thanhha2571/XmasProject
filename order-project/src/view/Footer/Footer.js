import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate()

    // const handleImpressum = () => {
    //     navigate("/impressum")
    // }

    const handleDante = () => {
        navigate("/datenschutzerklaerung")
        // console.log("sfs");
    }
    return (
        <div className="flex flex-col w-full h-auto bg-footerBackground opacity-95
        mobileSmall:px-4 mobileSmall:justify-center mobileSmall:items-center
        ">
            {/* <p className="w-full font-bold text-footerTitle text-[50px] font-DancingScript 
                            mobileSmall:text-[15px] mobileSmall:mt-10 mobileSmall:ml-28
                            mobileLarge:text-[15px]
                            tablet:text-[15px]

                    ">Kontakt:</p> */}
            <div className="flex flex-col gap-2 mt-10
                tablet:flex-row tablet:justify-between
                laptop:flex-row laptop:gap-24
                desktop:gap-28
                desktopMedium:gap-32
                desktopLarger:gap-40

            ">
                <div className="flex flex-row gap-3
                mobileSmall:gap-5
                mobileLarge:gap-10
                mobileLarger:gap-28
                tablet:gap-5
                laptop:gap-14
                desktop:gap-6
                desktopMedium:gap-14
                desktopLarge:gap-6
                desktopLarger:gap-16
                ">
                    <div className="flex flex-col">
                        <p className="w-full font-bold text-footerTitle text-[50px] font-DancingScript
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[25px]
                            desktopLarge:text-[35px]
                    ">CôCô Indochine</p>
                        <p className="flex w-full text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Augustinerstraße 1, 90403 Nürnberg

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Telefon: <span className="underline ml-2">0911 23735510</span>

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
                
            ">
                            E-Mail: <span className="underline ml-2">indochine@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col
                        desktop:items-start
                    ">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px] mobileSmall:items-center
                            mobileLarge:text-[15px] mobileLarge:items-center
                            tablet:text-[15px] tablet:items-center
                            desktop:text-[15px] desktop:text-textColor
                    ">Öffnungszeiten:</p> */}

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px] 
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px] 
                desktopLarge:text-[15px]
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            geschlossen

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            geschlossen

                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-3
                                mobileSmall:gap-5
                                mobileLarge:gap-10
                                mobileLarger:gap-28
                                tablet:gap-5
                                laptop:gap-14
                                desktop:gap-6
                                desktopMedium:gap-14
                                desktopLarge:gap-6
                                desktopLarger:gap-16
                                ">
                    <div className="flex flex-col">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:hidden
                    ">Kontakt:</p> */}
                        <p className="w-full font-bold text-footerTitle text-[50px] font-DancingScript
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[25px]
                            desktopLarge:text-[35px]
                    ">CôCô Fürth</p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Obstmarkt 3, 90762 Fürth

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Telefon: <span className="underline ml-2">0911 25345029</span>

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            E-Mail: <span className="underline ml-2">sushiandgrill@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col
                        desktop:items-start desktop:mt-0
                    ">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[15px] mobileSmall:items-center
                            mobileLarge:text-[15px] mobileLarge:items-center
                            tablet:text-[15px] tablet:items-center
                            desktop:text-[15px] desktop:items-start desktop:text-textColor desktop:mt-0
                    ">Öffnungszeiten:</p> */}

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            17:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Geschlossen

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Geschlossen

                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-3
                                mobileSmall:gap-5
                                mobileLarge:gap-10
                                mobileLarger:gap-28
                                tablet:gap-5
                                laptop:gap-14
                                desktop:gap-6
                                desktopMedium:gap-14
                                desktopLarge:gap-6
                                desktopLarger:gap-16
                ">
                    <div className="flex flex-col">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:hidden
                    ">Kontakt:</p> */}
                        <p className="w-full font-bold text-footerTitle text-[50px] font-DancingScript
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[25px]
                            desktopLarge:text-[35px]
                    ">CôCô Erlangen</p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Nürnberger Str. 31, 91052 Erlangen

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Telefon: <span className="underline ml-2">09131 5314934</span>

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            E-Mail:<span className="underline ml-2">e.service@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col
                        laptop:mt-0
                        desktop:items-start desktop:mt-0">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[15px] desktop:items-start desktop:text-textColor desktop:mt-0
                    ">Öffnungszeiten:</p> */}

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            11:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Geschlossen

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            10:00 Uhr bis 23:00 Uhr Frühstücks-

                        </p>

                        <p className="flex text-[8px] text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            und Bruchbuffet von 10:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Lato
                mobileSmall:text-[8px]
                mobileLarge:text-[9px]
                mobileLarger:text-[10px]
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-[11px]
                desktopLarge:text-[15px]
            ">
                            bis 15:00 Uhr

                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col
                desktop:justify-start
            ">
                {/* <div className="flex flex-col gap-3">
                    <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:text-[70px]
                            desktopLarge:text-[100px]
                    ">Info:</p>
                </div> */}
                <div className="flex flex-col justify-center items-center mt-5">
                    <a
                        target="_blank"
                        href="/impressum"
                        className="flex text-footerText font-Lato
          mobileSmall:text-sm mobileSmall:text-center
          tablet:text-sm
          laptop:text-sm
          desktop:text-sm
          desktopLarge:text-base"
                    >
                        IMPRESSUM
                    </a>
                    <a
                        target="_blank"
                        href="/datenschutzerklaerung"
                        className="flex text-footerText font-Lato mb-10
              mobileSmall:text-sm mobileSmall:text-center 
              tablet:text-sm
              laptop:text-sm
              desktopLarge:text-base">
                        DATENSCHUTZERKLÄRUNG
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer