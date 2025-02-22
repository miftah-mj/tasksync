import { TbHomeShare } from "react-icons/tb";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
            <h1 className="text-6xl font-bold text-error mb-4 animate-bounce">
                404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-soft btn-primary text-lg">
                Go Back Home
                <TbHomeShare size={22} />
            </Link>
        </div>
    );
};

export default NotFound;
