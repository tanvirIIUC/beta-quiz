import React from 'react';

const Blog = () => {
    return (
        <div className='text-center p-5'>

            <h1>blog</h1>
            <div className='border my-5 p-5'>
                <h3>What is the purpose of react router?</h3>
                <p>Ans : ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
        </div>
    );
};

export default Blog;