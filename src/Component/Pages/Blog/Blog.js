import React from 'react';
import BlogCard from '../../Shared/BlogCard/BlogCard';
import BlogLeftSideNav from '../../Shared/BlogLeftSideNav/BlogLeftSideNav';
import BlogPageNav from '../../Shared/BlogPageNav/BlogPageNav';
import BlogRightSideNav from '../../Shared/BlogRightSideNav/BlogRightSideNav';

const Blog = () => {
    const blogs = ['blog-1', 'blog-1', 'blog-1', 'blog-1', 'blog-1', 'blog-1',]
    return (
        <div className=''>
            <BlogPageNav></BlogPageNav>
            <div class="grid-container grid grid-cols-12 px-6 gap-4">
                <div class="item1 col-span-2">
                    <BlogLeftSideNav></BlogLeftSideNav>
                </div>
                <div class="item2 col-span-8">
                    {
                        blogs.map(b => <BlogCard></BlogCard>)
                    }
                </div>
                <div class="item2 col-span-2"><BlogRightSideNav></BlogRightSideNav></div>
            </div>

        </div>
    );
};

export default Blog;