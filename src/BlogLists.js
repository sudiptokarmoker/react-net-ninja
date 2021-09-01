import { Link } from "react-router-dom";

const BlogLists = ({blogsListData, title}) => {
    return (
        <div className="blog-lists">
            <h2>{title}</h2>
            {
                blogsListData.map(blog => 
                    (
                        <div className="blog-preview" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`}>
                                <h2>{ blog  .title }</h2>
                                {/* <p>{ blog.body }</p> */}
                                <p>Written by {blog.author}</p>
                            </Link>
                        </div>
                    )
                )
            }
        </div>        
    );
}
 
export default BlogLists;