import { useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'mario', id: 1},
        {title: 'Welcome to party', body: 'lorel ipsum ....', author: 'luige', id: 2},
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'adam', id: 3},
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'mario', id: 4}
    ]);

    return (
        <div className="home">
            <BlogLists blogsListData={blogs} title="Blog post"/>
            <BlogLists blogsListData={blogs.filter((blog) => blog.author === 'mario')} title="Maris post"/>
        </div>
    );
}
 
export default Home;