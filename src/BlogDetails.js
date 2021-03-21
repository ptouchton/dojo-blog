import { useParams } from "react-router";

const BlogDetails = () => {

    const {id} = useParams();

    return ( 
        <div className="blog-details">
            Blog Details - {id} 
        </div>
     );
}
 
export default BlogDetails
