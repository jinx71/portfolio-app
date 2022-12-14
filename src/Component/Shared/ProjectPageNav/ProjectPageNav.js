import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';

const ProjectPageNav = () => {

    const tabs = [
        { name: "React", link: "#", content: <Projects></Projects> },
        { name: "TailwindCSS", link: "#", content: <Projects></Projects> },
        { name: "Bootstrap", link: "#", content: <Projects></Projects> },
        { name: "HTML5", link: "#", content: <Projects></Projects> },
        { name: "CSS3", link: "#", content: <Projects></Projects> },
        { name: "JavaScript", link: "#", content: <Projects></Projects> },
    ];
    const [openTab, setOpenTab] = useState("React");

    return (

        <div className="my-5 flex justify-center items-center">
            <div className="">
                <ul className="flex md:space-x-2 flex-col md:flex-row justify-center items-center">
                    {tabs.map((tab) => (
                        <li key={tab.name}>
                            <a
                                href={tab.link}
                                onClick={() => setOpenTab(tab.name)}
                                className="mt-2 w-32 btn btn-sm btn-primary text-white"
                            >
                                {tab.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="">
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={
                                tab.name === openTab ? "block" : "hidden"
                            }
                        >
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProjectPageNav;