const BlogLists = ({blogsListData, title, handleDelete}) => {
    return (
        <div className="blog-lists">
            <h2>{title}</h2>
            {
                blogsListData.map(blog => 
                    (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{ blog.title }</h2>
                            <p>{ blog.body }</p>
                            <p>Written by {blog.author}</p>
                            <button onClick={() => handleDelete(blog.id)}>Delete Blog Item</button>
                        </div>
                    )
                )
            }
        </div>        
    );
}
 
export default BlogLists;