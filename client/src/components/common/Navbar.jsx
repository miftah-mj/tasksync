import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router";
import avatarImg from "../../assets/placeholder.jpg";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full z-10 shadow-sm">
            <div className="py-4">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-0 flex flex-row items-center justify-between gap-3 md:gap-0">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-black">
                        TaskSync
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="relative">
                        <div className="flex flex-row items-center gap-3">
                            {/* Dropdown btn */}
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                            >
                                <AiOutlineMenu />
                                <div className="hidden md:block">
                                    {/* Avatar */}
                                    <img
                                        className="w-10 h-10 object-cover rounded-full"
                                        referrerPolicy="no-referrer"
                                        src={
                                            user && user.photoURL
                                                ? user.photoURL
                                                : avatarImg
                                        }
                                        alt="profile"
                                        height="30"
                                        width="30"
                                    />
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                                <div className="flex flex-col cursor-pointer">
                                    <Link
                                        to="/"
                                        className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                    >
                                        Home
                                    </Link>

                                    {user ? (
                                        <>
                                            {/* <Link
                                                to="/dashboard"
                                                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                            >
                                                Dashboard
                                            </Link> */}
                                            <Link
                                                to="/tasks"
                                                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                            >
                                                Tasks
                                            </Link>
                                            <div
                                                onClick={logOut}
                                                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                                            >
                                                Logout
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/login"
                                                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to="/signup"
                                                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                                            >
                                                Sign Up
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
