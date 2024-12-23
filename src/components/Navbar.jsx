import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDisabled, setScrollDisabled] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
        setScrollDisabled(!scrollDisabled);
    };

    // Disable scrolling when menu is open
    useEffect(() => {
        if (scrollDisabled) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    const links = [
        {
            id: 1,
            link: "about",
        },
        {
            id: 2,
            link: "skills",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "contact",
        },
    ];

    return (
        <nav className="relative flex justify-between items-center pt-6 px-8 text-white w-full">
            <div>
                <h1 className="text-2xl">Travis Salud</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => {
                    return (
                        <li
                            key={id}
                            className="px-4 capitalize text-slate-300 hover:scale-110 hover:text-white duration-200"
                        >
                            <a href="#">{link}</a>
                        </li>
                    );
                })}
            </ul>
            <div
                className="cursor-pointer pr-4 z-10 text-slate-300 hover:text-white duration-200 md:hidden"
                onClick={handleMenuClick}
            >
                {menuOpen ? (
                    <FaTimes size={25} />
                ) : (
                    <FaBarsStaggered size={25} />
                )}
            </div>

            {/* Mobile navbar */}
            {menuOpen && (
                <ul
                    className={`absolute md:hidden top-24 left-0 w-full h-screen backdrop-blur flex flex-col items-center gap-6 font-semibold text-lg`}
                >
                    {links.map(({ id, link }) => {
                        return (
                            <li
                                key={id}
                                className="w-full p-4 capitalize text-center"
                            >
                                <a
                                    href="#"
                                    className="text-slate-300 hover:text-white duration-200 cursor-pointer"
                                >
                                    {link}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};
export default Navbar;
