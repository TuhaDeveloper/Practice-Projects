import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { blogsData } from '../data';
const Blog = () => {
    const navigate = useNavigate();
    const [blogs, setblogData] = useState(blogsData)
    return (
        <div>
            <section>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return <article key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <Link to={title} state={{ id, title, body }}>Learn more...</Link>
                    </article>
                })}
            </section>

            <button onClick={() => {
                navigate('/')
            }}>go to home</button>
        </div>
    )
}

export default Blog