import BlogLists from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/api/blogs');
  //const [name, setName] = useState("James");
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  /*
  useEffect(() => {
    console.log("use effect run here");
    console.log(blogs);
  }, [name]);
*/
/**
 * existing useEffect code was here
 */
  return (
    <div className="home">
    { error && <div> { error } </div> }
    {isLoading && <div>Loading ....</div>}
    {blogs && <BlogLists blogsListData={blogs} title="Blog post"/>}
      {/* <BlogLists blogsListData={blogs.filter((blog) => blog.author === 'mario')} title="Maris post"/> */}
      {/* <button onClick={() => setName("Linkon")}>Change Name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;