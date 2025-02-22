import { Link } from "react-router";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <div className="">
            <Banner />

            {/* <div className="flex justify-center mt-4 pb-12">
                <Link
                    to="/tasks"
                    className="btn btn-wide btn-soft btn-primary text-lg"
                >
                    Tasks
                </Link>
            </div> */}
        </div>
    );
};

export default Home;
