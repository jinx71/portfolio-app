import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Asset/undraw_launching_re_tomg.svg'
import Wave from 'react-wavify'
const Banner = () => {
    return (
        <div className="text-white hero">
            <div className="hero-content flex-col lg:flex-row justify-between items-center">
                <img src={banner} className='w-1/2' />
                <div className='text-center'>
                    <h1 className="text-7xl font-bold">Hello There!</h1>
                    <p className="py-6 text-4xl">I am Sazed! A Mern Stack Webdeveloper</p>
                    <Link className="btn btn-primary" to="/">Contact Me</Link>
                </div>

            </div>
            <Wave className="mt-96" fill='#828DF8'
                paused={false}
                options={{
                    height: 50,
                    amplitude: 50,
                    speed: 0.25,
                    points: 3
                }}
            />
        </div >
    );
};

export default Banner;