import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [name, setName] = useState('maria');
    const [blogs, setBlogs] = useState(null);
    const [name, setName] = useState("James");
    const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
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

  /*
  useEffect(() => {
    console.log("use effect run here");
    console.log(blogs);
  }, [name]);
*/

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs')
      .then(res => {
        if(!res.ok){
          throw Error("could not fetch the data");
        }
        //console.log(res);
        return res.json();
      })
      .then(data => {
        setBlogs(data.data.blogs);
        setIsLoading(false);
      })
      .catch(err => {
          console.log(err.message);
      });
  }, []);


  return (
    <div className="home">
    {isLoading && <div>Loading ....</div>}
    {blogs && <BlogLists blogsListData={blogs} title="Blog post" handleDelete={handleDelete}/>}
      {/* <BlogLists blogsListData={blogs.filter((blog) => blog.author === 'mario')} title="Maris post"/> */}
      <button onClick={() => setName("Linkon")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;