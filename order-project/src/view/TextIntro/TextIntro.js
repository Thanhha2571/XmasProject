const TextIntro = () => {
    return (
        <div className="bg-backGround flex flex-col gap-10 px-40 py-8 w-full h-auto items-center
        mobileSmall:px-4 mobileSmall:gap-5
        laptop:px-12 laptop:gap-8
        desktop:px-32 desktop:py-8
        ">
            <div className="font-DancingScript text-textColor text-[60px] 
            mobileSmall:text-[40px]
            laptop:text-[50px]
            desktop:text-[60px]"

            >
                INTRODUCTION</div>
            <p className="flex text-2xl text-textColor font-Montserra leading-loose
                mobileSmall:text-lg mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Die Vorbestellung eurer Hafermastgans und Sushis für euer Weihnachtsessen ist nur wenige Schritte entfernt:
            </p>

            <p className="flex text-2xl text-textColor font-Montserra leading-loose font-semibold
                mobileSmall:text-lg mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Bestellt einfach den Gänsebraten und Sushi-Menüs ab heute bis zum 22. Dezember.
            </p>
            <p className="flex text-2xl text-textColor font-Montserra leading-loose underline
                mobileSmall:text-lg mobileSmall:text-center
                laptop:text-2xl
                desktop:text-2xl
            ">
                Holt die Bestellung am 24. Dezember zwischen 12:00 und 15:00 Uhr direkt vor Ort ab: CôCô Indochine, CôCô Sushi and Grill, CôCô Erlangen.
            </p>
        </div>
    )
}

export default TextIntro