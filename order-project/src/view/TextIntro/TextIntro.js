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
                mobileSmall:text-base mobileSmall:text-center
                laptop:text-lg
                desktop:text-2xl
            ">
                Welcome to our enchanting Christmas store, where the magic of the holiday season comes
                to life! We are delighted to introduce you to a festive wonderland that celebrates the most
                wonderful time of the year. At our store, Christmas is not just a holiday;
                it's a feeling, a tradition,
                and a special moment that we cherish.
            </p>
        </div>
    )
}

export default TextIntro