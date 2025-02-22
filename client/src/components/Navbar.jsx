import { Link, NavLink } from "react-router";

const Navbar = () => {
    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `tab text-lg ${isActive ? "text-primary" : ""}`
                }
            >
                Home
            </NavLink>
        </>
    );

    return (
        <nav className="bg-blue-50 backdrop-blur-md bg-opacity-60 sticky top-0 z-50">
            <div className="navbar max-w-screen-xl mx-auto py-3 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link
                        to="/"
                        className="text-2xl font-bold flex items-center"
                    >
                        <span className="text-primary">Task</span>
                        <span className="text-secondary">Sync</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex"></div>

                <div className="navbar-end items-center gap-4 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
