import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-violet-300 from-10% via-purple-300 via-30% to-pink-300 to-90% text-white py-10">
            <div className="max-w-screen-xl mx-auto h-96 px-4 lg:px-0 flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to TaskSync</h1>
                <p className="text-lg mb-6">
                    Organize your tasks efficiently and stay productive with
                    TaskSync.
                </p>
                <Link
                    to="/tasks"
                    className="bg-white text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Banner;
