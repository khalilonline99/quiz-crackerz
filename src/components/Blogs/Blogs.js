import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Read blogs and gain more knowledge.</h2>
            <section>
                <h3>What is the purpose of react router?</h3>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </section>
            <section>
                <h3>How does the context api works?</h3>
                <p>
                    Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                </p>
            </section>
            <section>
                <h3>Write about reference hook.</h3>
                <p>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
            </section>
        </div>
    );
};

export default Blogs;