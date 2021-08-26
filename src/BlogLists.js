const BlogLists = ({blogsListData, title}) => {
    return (
        <div className="blog-lists">
            <h2>{title}</h2>
            {
                blogsListData.map(blog => 
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
 
export default BlogLists;