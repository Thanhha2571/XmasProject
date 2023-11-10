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
const Home = () => {

  useEffect(() => {
    let parallax = new Rellax('.parallax');
  }, []);


  return (
    <section className="home section font-DancingScript" id='home'>
      <h1 className="home__title">MERRY CHRISTMAS</h1>
      <img src={HomeMoon} alt="home background" className="home__moon parallax" data-rellax-speed="-15" />
      <img src={HomeSanta} alt="home trineo" className="home__trineo parallax" data-rellax-speed="-2" />
      <img src={HomeMoutain3} alt="home mountain" className="home__mountain-3 parallax" data-rellax-speed="-8" />
      <img src={HomeMoutain2} alt="home mountain" className="home__mountain-2 parallax" data-rellax-speed="-8" />
      <img src={HomePineTree} alt="home pine tree" className="home__pine parallax" data-rellax-speed="-10" />
      <img src={HomeVillage} alt="home village" className="home__village parallax" data-rellax-speed="-10" />
      <img src={HomeSnow} alt="home snow" className="home__snow parallax" />
      <img src={HomeMoutain1} alt="home village" className="home__mountain-1 parallax" />
    </section>
  );
}

export default Home;