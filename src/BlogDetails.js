import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch('http://localhost:8000/api/blogs/' + id, id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/api/blogs/' + id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/');
    });
  }

  return(
    <div className="blog-details">
        {isLoading && <div>Loading .... </div>}
        {error && <div>{ error }</div>}
        {
            blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>
                        { blog.body }
                    </div>
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </article>
            )
        }
    </div>)
};

export default BlogDetails;
