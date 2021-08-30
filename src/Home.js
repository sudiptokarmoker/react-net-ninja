import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'mario', id: 1},
        {title: 'Welcome to party', body: 'lorel ipsum ....', author: 'luige', id: 2},
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'adam', id: 3},
        {title: 'My new websites', body: 'lorel ipsum ....', author: 'mario', id: 4}
    ]);
    const [name, setName] = useState('maria');

    const handleDelete  = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    };

    /*
    useEffect(() => {
        console.log("use effect run here");
        console.log(blogs);
    })*/
    /**
     * use effect if there is need to run only one first time load: like in jquery
     * $(document).ready(function(){
     *  // onload code 
     * });
     *  */ 
    useEffect(() => {
        console.log("use effect trigger here");
        console.log(blogs);
    }, [name]); // this name array is dependency hook. it will just trigger if this matches on staging. value change or anything else.

    return (
        <div className="home">
            <BlogLists blogsListData={blogs} title="Blog post" handleDelete={handleDelete}/>
            {/* <BlogLists blogsListData={blogs.filter((blog) => blog.author === 'mario')} title="Maris post"/> */}
            <button onClick={() => setName('jag hira')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;