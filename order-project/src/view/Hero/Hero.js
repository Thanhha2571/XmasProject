import React from 'react';
import { Carousel } from 'antd';
import Hero1 from "../../asset/cocopost1.jpg";
import Hero2 from "../../asset/cocopost3.jpg";
import Hero3 from "../../asset/cocopost4.jpg";
import Hero4 from "../../asset/cocopost5.jpg";
import Hero5 from "../../asset/cocopost7.jpg";
import Hero1Rectangle from "../../asset/1.jpg"
import Hero2Rectangle from "../../asset/3.jpg"
import Hero3Rectangle from "../../asset/4.jpg"
import Hero4Rectangle from "../../asset/5.jpg"
import Hero5Rectangle from "../../asset/7.jpg"

const contentStyle = {
    height: '100%',
    color: '#fff',
    width: '100%',
    lineHeight: '600px',
    textAlign: 'center',
    background: '#364d79',
};

const isDesktop = window.innerWidth > 1024;

const Hero = () => (
    <Carousel autoplay className='w-full h-full'>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-auto
                mobileSmall:h-auto
                laptop:h-auto
                desktop:h-auto'
                    src={isDesktop ? Hero3Rectangle : Hero3} />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-auto
                mobileSmall:h-auto
                laptop:h-auto
                desktop:h-auto'
                    src={isDesktop ? Hero1Rectangle : Hero1}
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-auto
                mobileSmall:h-auto
                laptop:h-auto
                desktop:h-auto'
                    src={isDesktop ? Hero2Rectangle : Hero2}
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-auto
                mobileSmall:h-auto
                laptop:h-auto
                desktop:h-auto'
                    src={isDesktop ? Hero4Rectangle : Hero4} />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-auto
                mobileSmall:h-auto
                laptop:h-auto
                desktop:h-auto'
                    src={isDesktop ? Hero5Rectangle : Hero5}
                />
            </h3>
        </div>
    </Carousel>
);
export default Hero;

