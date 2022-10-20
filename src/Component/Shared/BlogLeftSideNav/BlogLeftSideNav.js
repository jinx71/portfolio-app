import React from 'react';
import { Link } from 'react-router-dom';

const BlogLeftSideNav = () => {
    const leftSideNav = ['item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1',]

    return (
        <div class="sticky top-10">
            <ul className="menu bg-base-100  p-2 rounded-box">
                {
                    leftSideNav.map(a => <li>{a}</li>)
                }
            </ul>
        </div>
    );
};

export default BlogLeftSideNav;