import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectPageNav = () => {

    const tabs = [
        { name: "React", link: "#", content: <div>This is React</div> },
        { name: "TailwindCSS", link: "#", content: <div>This is TailwindCSS</div> },
        { name: "Bootstrap", link: "#", content: <div>This is Bootstrap</div> },
        { name: "HTML5", link: "#", content: <div>This is HTML5</div> },
        { name: "CSS3", link: "#", content: <div>This is CSS3</div> },
        { name: "JavaScript", link: "#", content: <div>This is Javascript</div> },
    ];
    const [openTab, setOpenTab] = useState("React");

    return (
        <div>
            <div className="container mx-auto my-5 flex  justify-center items-center">
                <div className="flex flex-col items-center justify-center max-w-xl">
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
                    <div className="p-3 mt-6 bg-white border">
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
        </div>
    );
};

export default ProjectPageNav;