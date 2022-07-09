import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page was not found!</p>
            <Link to="/">Return to Homepage</Link>
        </div>
    );
}
 
export default NotFound;