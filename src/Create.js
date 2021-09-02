import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author};
        //let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        fetch('http://localhost:8000/api/blogs/create', {
            headers: {
                "Content-Type": "application/json",
                // "Accept": "application/json, text-plain, */*",
                // "X-Requested-With": "XMLHttpRequest",
                //"X-CSRF-TOKEN": token
                },
            method: 'post',
            credentials: "same-origin",
            body: JSON.stringify(blog)
        }).then((data) => {
            console.log("created .... ");
            //console.log(data);
            setIsPending(false);
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <meta name="csrf-token" content=""/>
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
                    { !isPending &&  <button>Create Blog</button> }
                    { isPending &&  <button disabled>Creating blog .... </button> }
                </div>
            </form>
        </div>
    );
}
 
export default Create;