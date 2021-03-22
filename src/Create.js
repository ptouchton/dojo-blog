import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();

    return (
        <div className="create">
            <label>Blog Title:</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>Blog Content</label>
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option>mario</option>
                <option>yoshi</option>
            </select>
            
        </div>

    );
}

export default Create;