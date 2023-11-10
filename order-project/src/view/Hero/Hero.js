import React from 'react';
import { Carousel } from 'antd';
import Hero1 from "../../asset/Hero1.jpg";
import Hero2 from "../../asset/Hero2.jpg";
import Hero3 from "../../asset/Hero3.jpg";
import Hero4 from "../../asset/Hero4.jpg";

const contentStyle = {
    height: '100%',
    color: '#fff',
    width: '100%',
    lineHeight: '600px',
    textAlign: 'center',
    background: '#364d79',
};
const Hero = () => (
    <Carousel autoplay className='w-full h-full'>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-[600px] 
                mobileSmall:h-[400px]
                laptop:h-[500px]
                desktop:h-[650px]' 
                src={Hero1} 
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-[600px] 
                mobileSmall:h-[400px]
                laptop:h-[500px]
                desktop:h-[650px]'
                 src={Hero2} />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-[600px] 
                mobileSmall:h-[400px]
                laptop:h-[500px]
                desktop:h-[650px]' 
                src={Hero3} />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img className='w-full h-[600px] 
                mobileSmall:h-[400px]
                laptop:h-[500px]
                desktop:h-[650px]' 
                src={Hero4} />
            </h3>
        </div>
    </Carousel>
);
export default Hero;

