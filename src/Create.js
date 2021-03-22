import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [isPending, setIsPending] = useState(false);

    const handleFormSubmit = (e) => {

        setIsPending(true);
        e.preventDefault();
        const blog = {title, body, author}
        
        fetch('http://localhost:8000/blogs', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog added');
            setIsPending(false);
        })
    }
    
    return (
        <div className="create">
            <form onSubmit={handleFormSubmit}>
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
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding Blog...</button> }
            </form>
        </div>

    );
}

export default Create;