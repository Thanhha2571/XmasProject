import ChristmasBall from "../../asset/christmas-glob.png"
import Cloud1 from "../../asset/cloud1.png"
import Cloud2 from "../../asset/cloud2.png"
import SnowFlake from "../../asset/snowflake.png"
import SantaHeader from "../../asset/santaclaus-footer.png"
import Background from "../../asset/background.png"
import ImgBackground from "../../asset/ImgBackground.jpg"
import Hero from "../Hero/Hero"
const Header = () => {
    return (
        // <div className="w-full relative flex flex-col items-center
        // mobileSmall:mb-[450px]
        // laptop:mb-[600px]
        // desktop:mb-[700px]"
        // >
        <div className="w-full flex flex-col items-center"
        >
            {/* <div className="bg-backGround w-full h-[720px] z-10 absolute opacity-5"></div> */}
            {/* <img src={ImgBackground} className="absolute w-full h-[720px]" /> */}
            <div className=" z-30 w-full px-64
            mobileSmall:px-0"
            >
                <Hero />
            </div>
            {/* <div className="flex flex-row gap-10 font-DancingScript absolute z-30 text-textColor text-[60px] top-[600px] mt-20">
                <div>MERRY CHRISTMAS</div>
            </div> */}
        </div>
    );
}

export default Header