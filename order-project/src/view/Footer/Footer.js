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
        mobileSmall:px-4 mobileSmall:gap-5 mobileSmall:justify-center mobileSmall:items-center
        ">
            <div className="flex flex-col gap-5
                laptop:flex-row laptop:justify-between
                desktop:gap-28

            ">
                <div className="flex flex-row gap-5 
                desktop:gap-10
                ">
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:hidden

                    ">Kontakt:</p>
                        <p className="w-full text-center font-bold text-textWarning text-[50px] font-DancingScript
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[20px] desktop:mt-10
                            desktopLarge:text-[35px]
                    ">CôCô Indochine</p>
                        <p className="flex w-full text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Augustinerstraße 1, 90403 Nürnberg

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Telefon: <span className="underline ml-2">0911 23735510</span>

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
                
            ">
                            E-Mail: <span className="underline ml-2">indochine@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3
                        mobileSmall:items-center
                        desktop:items-start
                    ">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px] mobileSmall:items-center
                            mobileLarge:text-[15px] mobileLarge:items-center
                            tablet:text-[15px] tablet:items-center
                            desktop:text-[15px] desktop:text-textColor
                    ">Öffnungszeiten:</p> */}

                        <p className="flex text-footerText font-Changa leading-loose
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:mt-10
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            geschlossen

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            geschlossen

                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-5
                desktop:gap-10">
                    <div className="flex flex-col gap-3">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:hidden
                    ">Kontakt:</p> */}
                        <p className="w-full text-center font-bold text-textWarning text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[15px]
                            desktopLarge:text-[35px]
                    ">CôCô Fürth</p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Obstmarkt 3, 90762 Fürth

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Telefon: <span className="underline ml-2">0911 25345029</span>

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            E-Mail: <span className="underline ml-2">sushiandgrill@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3
                        mobileSmall:items-center mobileSmall:mt-10
                        desktop:items-start desktop:mt-0
                    ">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[15px] mobileSmall:items-center
                            mobileLarge:text-[15px] mobileLarge:items-center
                            tablet:text-[15px] tablet:items-center
                            desktop:text-[15px] desktop:items-start desktop:text-textColor desktop:mt-0
                    ">Öffnungszeiten:</p> */}

                        <p className="flex text-footerText font-Changa leading-loose
                mobileSmall:text-[8px] mobileSmall:text-center
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            17:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            Geschlossen

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start desktop:text-left
                desktopLarge:text-[15px]
            ">
                            Geschlossen

                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-5
                desktop:gap-10
                ">
                    <div className="flex flex-col gap-3">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:hidden
                    ">Kontakt:</p> */}
                        <p className="w-full text-center font-bold text-textWarning text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[15px]
                            desktopLarge:text-[35px]
                    ">CôCô Erlangen</p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Nürnberger Str. 31, 91052 Erlangen

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            Telefon: <span className="underline ml-2">09131 5314934</span>

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-[8px] tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-[8px] laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                desktopLarge:text-[15px]
            ">
                            E-Mail: <span className="underline ml-2">e.service@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3
                        mobileSmall:items-center mobileSmall:mt-10
                        laptop:mt-20
                        desktop:items-start desktop:mt-15">
                        {/* <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[15px]
                            mobileLarge:text-[15px]
                            tablet:text-[15px]
                            desktop:text-[15px] desktop:items-start desktop:text-textColor desktop:mt-0
                    ">Öffnungszeiten:</p> */}

                        <p className="flex text-footerText font-Changa leading-loose
                mobileSmall:text-[8px] mobileSmall:text-center
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            11:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Geschlossen

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            10:00 Uhr bis 23:00 Uhr Frühstücks-

                        </p>

                        <p className="flex text-[8px] text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            und Bruchbuffet von 10:00 Uhr

                        </p>

                        <p className="flex text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-[8px] mobileSmall:text-center   
                tablet:text-[8px]
                laptop:text-[8px]
                desktop:justify-start desktop:items-start 
                desktopLarge:text-[15px]
            ">
                            bis 15:00 Uhr

                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3
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
                <div className="flex flex-col justify-center items-center gap-3">
                    <a
                        target="_blank"
                        href="/impressum"
                        className="flex text-2xl text-footerText font-Changa leading-loose font-bold
          mobileSmall:text-base mobileSmall:text-center
          tablet:text-base
          laptop:text-base
          desktop:text-base
          desktopLarge:text-base"
                    >
                        IMPRESSUM
                    </a>
                    <a
                        target="_blank"
                        href="/datenschutzerklaerung"
                        className="flex text-2xl text-footerText font-Changa leading-loose font-bold mb-10
              mobileSmall:text-base mobileSmall:text-center 
              tablet:text-base
              laptop:text-base
              desktopLarge:text-base">
                        DATENSCHUTZERKLÄRUNG
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer