import React from 'react';

const BlogCard = () => {
    return (
        <div className="card lg:card-side bg-base-300 shadow-xl mb-5">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;