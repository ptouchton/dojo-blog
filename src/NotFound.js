import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 

        <div className="not-found">
            <h2>Sorry</h2>
            <p>The pae you are looking for does not exists</p>
            <Link to='/'>Back to home...</Link>
        </div>
     );
}
 
export default NotFound;
