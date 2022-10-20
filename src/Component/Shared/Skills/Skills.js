import React from 'react';
import { Link } from 'react-router-dom';
import reactIcon from '../../../Asset/React-icon.png'
import tailwindCSSIcon from '../../../Asset/Tailwind_CSS_Logo.svg.png'
import bootstrapIcon from '../../../Asset/bootstrap.png'
import html5 from '../../../Asset/html5.png'
import css3 from '../../../Asset/css3.png'
import jsIcon from '../../../Asset/js.png'
import nodeIcon from '../../../Asset/node.png'
import ExIcon from '../../../Asset/ex.jpg'
import fireIcon from '../../../Asset/firebase.png'
import mapIcon from '../../../Asset/map.png'
import mongoIcon from '../../../Asset/mongo.png'
import APIcon from '../../../Asset/Ap.png'
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
                    <img src={bootstrapIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Bootstrap</div>
                        <Link to="/project/1" className="btn btn-primary">View my Bootstrap Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={html5} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">HTML5</div>
                        <Link to="/project/1" className="btn btn-primary">View my HTML5 Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={css3} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Vanila CSS</div>
                        <Link to="/project/1" className="btn btn-primary">View my Vanila CSS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={jsIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">FrontEnd Skills</div>
                        <div className="stat-value text-white mb-2">Vanila JS</div>
                        <Link to="/project/1" className="btn btn-primary">View my Vanila JS Portfolio</Link>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">

                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={nodeIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">BackEnd Skills</div>
                        <div className="stat-value text-white mb-2">NodeJS</div>
                        <Link to="/project/1" className="btn btn-primary">View my NodeJS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={ExIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">BackEnd Skills</div>
                        <div className="stat-value text-white mb-2">ExpressJS</div>
                        <Link to="/project/1" className="btn btn-primary">View my ExpressJS Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={fireIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">BackEnd Skills</div>
                        <div className="stat-value text-white mb-2">Firebase</div>
                        <Link to="/project/1" className="btn btn-primary">View my Firebase Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={APIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">BackEnd Skills</div>
                        <div className="stat-value text-white mb-2">API Int.</div>
                        <Link to="/project/1" className="btn btn-primary">View my API Integration Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={mongoIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">BackEnd Skills</div>
                        <div className="stat-value text-white mb-2">MongoDB</div>
                        <Link to="/project/1" className="btn btn-primary">View my MongoDB Database Integration Portfolio</Link>
                    </div>
                </div>
                <div className="stats shadow bg-base-300 flex justify-center items-center">
                    <img src={mapIcon} alt="" className='w-32 h-32 p-2' />

                    <div className="stat">
                        <div className=" text-white">BackEnd Skills</div>
                        <div className="stat-value text-white mb-2">Map Int.</div>
                        <Link to="/project/1" className="btn btn-primary">View my Google Map Integration Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;