import React, { useState } from 'react';
import BlogLeftSideNav from '../BlogLeftSideNav/BlogLeftSideNav';


const ProjectPageNav = () => {

    const tabs = [
        { name: "Projects WalkThru", link: "#", content: <BlogLeftSideNav></BlogLeftSideNav> },
        { name: "Web development", link: "#", content: <BlogLeftSideNav></BlogLeftSideNav> },
        { name: "Notes", link: "#", content: <BlogLeftSideNav></BlogLeftSideNav> },
    ];
    const [openTab, setOpenTab] = useState("React");

    return (

        <div className="my-5">
            <div className="">
                <ul className="flex md:space-x-2 flex-col md:flex-row justify-center items-center">
                    {tabs.map((tab) => (
                        <li key={tab.name}>
                            <a
                                href={tab.link}
                                onClick={() => setOpenTab(tab.name)}
                                className="mt-2 w-48 btn btn-sm btn-primary text-white"
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