import { Link } from "react-router-dom"
import Home from "./Home";

const NoContent = () => {
    return (
        <div>
            <h1>No content found</h1>
            <Link to="/">Click to redirect to home page</Link>
        </div>
    );
}
 
export default NoContent;