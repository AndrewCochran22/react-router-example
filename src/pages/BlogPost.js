import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import blogService from "../util/BlogService";

function BlogPost() {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        blogService.getPostByID(+id).then(data => {
            if (!data) {
                history.push('/')
            } else {
                setBlog(data);
            }
        });
    }, [id, history]);

    if (blog === null) {
        return 'Loading...';
    }

    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <Link to="/blog">Back</Link>
        </div>
    )
}

export default BlogPost;