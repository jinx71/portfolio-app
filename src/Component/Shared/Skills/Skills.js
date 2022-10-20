import React from 'react';
import { Link } from 'react-router-dom';
import reactIcon from '../../../Asset/React-icon.png'
import tailwindCSSIcon from '../../../Asset/Tailwind_CSS_Logo.svg.png'
const Skills = () => {
    return (
        <div className="container p-2 mx-auto text-white" id='skills'>
            <h1 className='text-5xl my-10 text-center divider'> {`<SKILLS />`}</h1>

            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={reactIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">React</div>
                        <Link to="/projects" className="btn btn-primary">View my React Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">TailwindCSS</div>
                        <Link to="/project/1" className="btn btn-primary">View my TailwindCSS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Bootstrap</div>
                        <Link to="/project/1" className="btn btn-primary">View my Bootstrap Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">HTML5</div>
                        <Link to="/project/1" className="btn btn-primary">View my HTML5 Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Vanila CSS</div>
                        <Link to="/project/1" className="btn btn-primary">View my Vanila CSS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Vanila JS</div>
                        <Link to="/project/1" className="btn btn-primary">View my Vanila JS Portfolio</Link>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={reactIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">React</div>
                        <Link to="/project/1" className="btn btn-primary">View my React Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">TailwindCSS</div>
                        <Link to="/project/1" className="btn btn-primary">View my TailwindCSS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Bootstrap</div>
                        <Link to="/project/1" className="btn btn-primary">View my Bootstrap Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">HTML5</div>
                        <Link to="/project/1" className="btn btn-primary">View my HTML5 Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Vanila CSS</div>
                        <Link to="/project/1" className="btn btn-primary">View my Vanila CSS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={tailwindCSSIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Vanila JS</div>
                        <Link to="/project/1" className="btn btn-primary">View my Vanila JS Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;