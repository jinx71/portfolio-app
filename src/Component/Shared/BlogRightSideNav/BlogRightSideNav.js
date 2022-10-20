import React from 'react';

const BlogRightSideNav = () => {
    const rightSideNav = ['item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1', 'item-1',]

    return (
        <div class="sticky top-10">
            <ul className="menu bg-base-100  p-2 rounded-box">
                {
                    rightSideNav.map(a => <li>{a}</li>)
                }
            </ul>
        </div>
    );
};

export default BlogRightSideNav;