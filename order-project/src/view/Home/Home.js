import React, { useEffect } from 'react';
import './Home.css';
import Rellax from "rellax";
import HomeMoon from "../../img/home-moon.webp"
import HomeSanta from "../../img/home-trineo-santa.webp"
import HomeMoutain3 from "../../img/home-mountain-3.webp"
import HomeMoutain2 from "../../img/home-mountain-2.webp"
import HomePineTree from "../../img/home-pine-tree.webp"
import HomeVillage from "../../img/home-village.webp"
import HomeSnow from "../../img/home-snow.webp"
import HomeMoutain1 from "../../img/home-mountain-1.webp"
import HomeIcon from "../../asset/home.jpg"
const Home = () => {

  useEffect(() => {
    let parallax = new Rellax('.parallax');
  }, []);


  return (
    <section className="home section font-DancingScript text-2xl
      desktop:h-[1400px]
    " id='home'>
      {/* <img src='https://ccu.lieferbude.de/static/img/logo_white.4185c536c1cb.png' className='absolute w-16 h-32 top-0 right-0' /> */}
      <div className='flex flex-col gap-1 mb-10
        mobileSmall:text-[25px]
        mobileLarge:text-[30px]
        tablet:text-[50px]
        desktop:text-[70px] desktop:gap-4
        desktopLarge:text-[100px] desktopLarge:gap-10
      '>
        <h1 className="home__title text-textTitle">Wir wünschen Ihnen ein frohes</h1>
        <h1 className="home__title text-textTitle">CôCô-Weihnachten!</h1>
      </div>

      <img src={HomeIcon} alt="home background" className="home__moon parallax rounded-md
        mobileSmall:w-[300px] mobileSmall:h-[300px]
        mobileLarge:w-[400px] mobileLarge:h-[400px] 
        tablet:w-[600px] tablet:h-[600px]
        desktop:w-[900px] desktop:h-[900px] desktop:rounded-xl
        desktopLarge:w-[1400px] desktopLarge:h-[1400px] desktopLarge:rounded-xl
      " data-rellax-speed="-15" />
      {/* <img src={HomeSanta} alt="home trineo" className="home__trineo parallax" data-rellax-speed="-2" /> */}
      {/* <img src={HomeMoutain3} alt="home mountain" className="home__mountain-3 parallax" data-rellax-speed="-8" />
      <img src={HomeMoutain2} alt="home mountain" className="home__mountain-2 parallax" data-rellax-speed="-8" />
      <img src={HomePineTree} alt="home pine tree" className="home__pine parallax" data-rellax-speed="-10" /> */}
      {/* <img src={HomeVillage} alt="home village" className="home__village parallax" data-rellax-speed="-10" /> */}
      <img src={HomeSnow} alt="home snow" className="home__snow parallax w-full" />
      {/* <img src={HomeMoutain1} alt="home village" className="home__mountain-1 parallax" /> */}
    </section>
  );
}

export default Home;