
const Navbar = () => {
    const links = [
        {
            id: 1,
            name: "About"
        },
        {
            id: 2,
            name: "Projects"
        },
        {
            id: 3,
            name: "Skills"
        },
        {
            id: 4,
            name: "Contact"
        },
    ]

    return (
        <nav className="flex justify-between items-center pt-6 px-4 text-white w-full">
            <div>
                <h1 className="text-2xl">Travis Salud</h1>
            </div>
            <ul className="flex">
                {links.map(link => {
                    return (
                    <li 
                    key={link.id}
                    className="px-4 text-slate-300 hover:scale-110 hover:text-white duration-200"
                    >
                        <a href="#">{link.name}</a>
                    </li>
                )})}
            </ul>
        </nav>
    )
}
export default Navbar