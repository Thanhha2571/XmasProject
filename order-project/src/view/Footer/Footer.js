import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate()

    // const handleImpressum = () => {
    //     navigate("/impressum")
    // }

    const handleDante = () => {
        navigate("/dante")
        console.log("sfs");
    }
    return (
        <div className="flex flex-col w-full h-auto bg-footerBackground opacity-95
        mobileSmall:px-4 mobileSmall:gap-5 mobileSmall:justify-center mobileSmall:items-center
        ">
            <div className="flex flex-col
            ">
                <div className=" hidden 
                    desktop:flex deskop:flex-row desktop:justify-center desktop:gap-[600px] desktop:mt-20 desktop:ml-10
                ">
                    <div className="text-[70px] font-DancingScript text-footerTitle font-bold">Kontakt</div>
                    <div className="text-[70px] font-DancingScript text-footerTitle font-bold">Öffnungszeiten</div>
                </div>
                <div className="flex flex-col gap-10 
                    desktop:flex-row desktop:justify-center desktop:gap-[400px]
                ">
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:hidden

                    ">Kontakt:</p>
                        <p className="w-full text-center font-bold text-textTitle text-[50px] font-DancingScript
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:text-[70px]
                            desktopLarge:text-[100px]
                    ">CôCô Indochine</p>
                        <p className="flex w-full text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            Augustinerstraße 1, 90403 Nürnberg

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            Telefon: <span className="underline ml-2">0911 23735510</span>

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
                
            ">
                            E-Mail: <span className="underline ml-2">indochine@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3
                        mobileSmall:items-center
                        desktop:items-start
                    ">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[35px] mobileSmall:items-center
                            mobileLarge:text-[45px] mobileLarge:items-center
                            tablet:text-[60px] tablet:items-center
                            desktop:text-[70px] desktop:text-textColor
                    ">Öffnungszeiten:</p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            12:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            geschlossen

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start
            ">
                            geschlossen

                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10
                    desktop:flex-row desktop:justify-between">
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:hidden
                    ">Kontakt:</p>
                        <p className="w-full text-center font-bold text-textTitle text-[50px] font-DancingScript
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:text-[70px]
                            desktopLarge:text-[100px]
                    ">CôCô Fürth</p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            Obstmarkt 3, 90762 Fürth

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            Telefon: <span className="underline ml-2">0911 25345029</span>

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            E-Mail: <span className="underline ml-2">sushiandgrill@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3
                        mobileSmall:items-center
                        desktop:items-start
                    ">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[35px] mobileSmall:items-center
                            mobileLarge:text-[45px] mobileLarge:items-center
                            tablet:text-[60px] tablet:items-center
                            desktop:text-[70px] desktop:items-start desktop:text-textColor desktop:mt-0
                    ">Öffnungszeiten:</p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            17:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            Geschlossen

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start desktop:text-left
            ">
                            Geschlossen

                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-10
                    desktop:flex-row desktop:justify-between
                ">
                    <div className="flex flex-col gap-3">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-10
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:hidden
                    ">Kontakt:</p>
                        <p className="w-full text-center font-bold text-textTitle text-[50px] font-DancingScript
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:text-[70px]
                            desktopLarge:text-[100px]
                    ">CôCô Erlangen</p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            Nürnberger Str. 31, 91052 Erlangen

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            Telefon: <span className="underline ml-2">09131 5314934</span>

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center mobileSmall:justify-center mobileSmall:items-center
                tablet:text-xl tablet:text-center tablet:justify-center tablet:items-center
                laptop:text-2xl laptop:text-center laptop:justify-center laptop:items-center
                desktop:justify-start desktop:items-start
            ">
                            E-Mail: <span className="underline ml-2">e.service@the-coco.de</span>

                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3
                        mobileSmall:items-center
                        desktop:items-start">
                        <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript mt-5
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:text-[70px] desktop:items-start desktop:text-textColor desktop:mt-0
                    ">Öffnungszeiten:</p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Jeden Tag:

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            11:00 Uhr bis 23:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Weihnachten 24.12.2023:

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            12:00 Uhr bis 15:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            1.Weihnachtsfeiertag 25.12.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Geschlossen

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Silvester 31.12.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Küchenschluss um 21:00 Uhr

                        </p>
                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            Neujahr 01.01.2023:

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            10:00 Uhr bis 23:00 Uhr Frühstücks-

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            und Bruchbuffet von 10:00 Uhr

                        </p>

                        <p className="flex text-2xl text-footerText font-Changa leading-loose font-bold
                mobileSmall:text-base mobileSmall:text-center   
                tablet:text-xl
                laptop:text-2xl
                desktop:justify-start desktop:items-start 
            ">
                            bis 15:00 Uhr

                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3
                desktop:justify-start
            ">
                <div className="flex flex-col gap-3">
                    <p className="w-full text-center font-bold text-footerTitle text-[50px] font-DancingScript
                            mobileSmall:text-[35px]
                            mobileLarge:text-[45px]
                            tablet:text-[60px]
                            desktop:text-[70px]
                            desktopLarge:text-[100px]
                    ">Info:</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <Link
                        to="/impressum"
                        className="flex text-2xl text-footerText font-Changa leading-loose font-bold
          mobileSmall:text-base mobileSmall:text-center
          tablet:text-xl
          laptop:text-2xl
          desktop:text-3xl
          desktopLarge:text-5xl"
                    >
                        IMPRESSUM
                    </Link>
                    <Link
            to="/dante"
            className="flex text-2xl text-footerText font-Changa leading-loose font-bold mb-10
              mobileSmall:text-base mobileSmall:text-center 
              tablet:text-xl
              laptop:text-2xl
              desktop:text-3xl
              desktopLarge:text-5xl">
            DATENSCHUTZERKLÄRUNG
          </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer