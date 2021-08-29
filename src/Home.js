import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  const [blogs, setBlog] = useState([
    {
      title: "My new websites",
      body: "lorel ipsum ....",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome to party",
      body: "lorel ipsum ....",
      author: "luige",
      id: 2,
    },
    {
      title: "My new websites",
      body: "lorel ipsum ....",
      author: "adam",
      id: 3,
    },
    {
      title: "My new websites",
      body: "lorel ipsum ....",
      author: "mario",
      id: 4,
    },
  ]);
  const [name, setName] = useState("James");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  /*
  useEffect(() => {
    console.log("use effect run here");
    console.log(blogs);
  }, [name]);
*/

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data['data']);
      });
  }, []);


  return (
    <div className="home">
      <BlogLists
        blogsListData={blogs}
        title="Blog post"
        handleDelete={handleDelete}
      />
      {/* <BlogLists blogsListData={blogs.filter((blog) => blog.author === 'mario')} title="Maris post"/> */}
      <button onClick={() => setName("Linkon")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
