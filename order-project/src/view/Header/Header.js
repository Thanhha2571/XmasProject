import ChristmasBall from "../../asset/christmas-glob.png"
import Cloud1 from "../../asset/cloud1.png"
import Cloud2 from "../../asset/cloud2.png"
import SnowFlake from "../../asset/snowflake.png"
import SantaHeader from "../../asset/santaclaus-footer.png"
import Background from "../../asset/background.png"
import ImgBackground from "../../asset/ImgBackground.jpg"
const Header = () => {
    return (
        <div className="w-full relative mb-[720px] flex flex-col items-center">
            <div className="bg-backGround w-full h-[720px] z-10 absolute opacity-95"></div>
            {/* <img src={ImgBackground} className="absolute w-full h-[720px]" /> */}
            <img src={ChristmasBall} className="absolute z-30 mt-20 w-[450px] h-[450px]" />
            <div className="flex flex-row gap-10 font-DancingScript absolute z-30 text-textColor text-[60px] top-[600px]">
                <div>M E R R Y</div>
                <div>C H R I S T M A S</div>
            </div>
        </div>
    );
}

export default Header