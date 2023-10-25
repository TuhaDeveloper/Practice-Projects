import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Blogs = () => {
    // const { title } = useParams();
    const location = useLocation();
    console.log(location)

    // useEffect(() => {
    //     const blogdata = blogsData.filter((blog) => blog.title === title);
    //     setBlogs(blogdata[0].body)
    // }, [])
    const navigate = useNavigate();


    return (
        <div>

            <h3>{location.state.title} Pages</h3>
            <h3>{location.state.id} Pages</h3>
            <p>{location.state.body}</p>
            <button onClick={() => {
                navigate('/Blog')
            }}>go to Blog</button>
        </div>
    )
}
