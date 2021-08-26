import { useState } from "react";

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'mario', id: 1},
        {title: 'Welcome to party', body: 'lorel ipsum ....', author: 'luige', id: 2},
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'adam', id: 3},
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'james', id: 4}
    ]);

    return (
        <div className="home">
            {
                blogs.map(blog => 
                    (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{ blog.title }</h2>
                            <p>Written by {blog.author}</p>
                        </div>
                    )
                )
            }
        </div>
    );
}
 
export default Home;