import HeroImg from "../assets/travis-profile-pic.jpg";
import { FaLinkedin, FaSquareGithub, FaEnvelope } from "react-icons/fa6";

const Hero = () => {
    return (
        <div name="hero" className="h-screen w-screen">
            <div className="max-w-screen h-full mx-auto flex justify-center items-center">
                <div className="text-white">
                    <h1 className="text-6xl">Hi, I'm Travis Salud!👋</h1>
                    <h2 className="text-2xl">
                        Software Engineer based in the U.S.
                    </h2>
                    <div>
                        <div className="flex gap-3">
                            <a
                                href=""
                                className="text-slate-300 hover:scale-110 hover:text-white duration-200"
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                href=""
                                className="text-slate-300 hover:scale-110 hover:text-white duration-200"
                            >
                                <FaSquareGithub size={30} />
                            </a>
                            <a
                                href=""
                                className="text-slate-300 hover:scale-110 hover:text-white duration-200"
                            >
                                <FaEnvelope size={30} />
                            </a>
                        </div>
                        <div>
                            <button className="text-white w-fit px-6 py-3 my-3 flex justify-center items-center bg-blue-400">
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={HeroImg}
                        alt="Profile"
                        className="rounded-full w-72"
                    />
                </div>
            </div>
        </div>
    );
};
export default Hero;
