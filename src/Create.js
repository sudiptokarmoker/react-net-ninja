import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
    }

    return (
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>blog Title :</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>blog body : </label>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Blog Author</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                    </select>
                </div>
                <div>
                    <button>Create Blog</button>
                </div>
            </form>
        </div>
    );
}
 
export default Create;