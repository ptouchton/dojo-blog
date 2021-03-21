import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = ((id) => {
        const newBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlog);
    })

    useEffect(() => {
        console.log('Effect ran');
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
            <button onClick={() => { setName('luigi') }}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;