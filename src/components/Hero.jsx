import HeroImg from "../assets/travis-profile-pic.jpg";
import { FaLinkedin, FaSquareGithub, FaEnvelope } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
    return (
        <section name="hero" className="h-screen w-full">
            <div className="max-w-screen h-full flex flex-col justify-center items-center px-4 md:flex-row">
                <div className="text-white">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, I&apos;m Travis Salud!👋
                    </h1>
                    <h2 className="text-lg lg:text-2xl">
                        Software Engineer based in the U.S.
                    </h2>
                    <div>
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/travis-salud/"
                                className="text-slate-300 hover:scale-110 hover:text-white duration-200"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                href="https://github.com/TSalud15"
                                className="text-slate-300 hover:scale-110 hover:text-white duration-200"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaSquareGithub size={30} />
                            </a>
                            <a
                                href="mailto: saludtravis15@gmail.com"
                                className="text-slate-300 hover:scale-110 hover:text-white duration-200"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaEnvelope size={30} />
                            </a>
                        </div>
                        <div>
                            {/* ADD RESUME */}
                            <a href="" download={true}>
                                <button className="group text-white w-fit px-6 py-3 my-3 rounded-md flex items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                                    Resume
                                    <span className="group-hover:rotate-90 duration-200">
                                        <MdKeyboardArrowRight />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={HeroImg}
                        alt="Profile"
                        className="rounded-full mx-auto w-64 md:w-72"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;
