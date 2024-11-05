const Skills = () => {
    const skills = [
        {
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            skill: "HTML",
            style: "hover:shadow-orange-500",
        },
        {
            id: 2,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            skill: "CSS",
            style: "hover:shadow-blue-500",
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            skill: "JavaScript",
            style: "hover:shadow-yellow-300",
        },
        {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            skill: "TypeScript",
            style: "hover:shadow-blue-500",
        },
        {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            skill: "React",
            style: "hover:shadow-sky-400",
        },
        {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            skill: "TailwindCSS",
            style: "hover:shadow-sky-400",
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            skill: "Git",
            style: "hover:shadow-red-400",
        },
    ];

    return (
        <section name="skills" className="w-full h-screen text-white">
            <div className="max-w-screen w-full h-full flex flex-col py-4 px-6 mx-auto">
                <div className="pb-8">
                    <h1 className="text-2xl md:text-4xl font-bold inline">
                        Skills
                    </h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0">
                    {skills.map(({ id, src, skill, style }) => {
                        return (
                            <div
                                key={id}
                                className={`bg-zinc-500 bg-opacity-10 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img
                                    src={src}
                                    alt={skill}
                                    className="w-20 mx-auto"
                                />
                                <p className="mt-4 font-semibold">{skill}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Skills;
