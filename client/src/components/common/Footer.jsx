import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl text-black font-grenze font-bold">
                            TaskSync
                        </h1>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} TaskSync. All
                            rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            Home
                        </Link>
                        <Link
                            to="/tasks"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            All Tasks
                        </Link>
                        <Link
                            to="/subscription"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            Subscription
                        </Link>
                        <Link
                            to="#"
                            className="text-gray-500 hover:text-indigo-600"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
