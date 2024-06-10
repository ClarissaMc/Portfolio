import { NavbarItem } from "./NavbarItem";

const Navbar = ({ tabs }) => {
    return (
        <div className="nav-container">
            <ul className="my-navbar flex flex-col">
                {Object.entries(tabs).map(([key, value], i) => (
                    <NavbarItem
                        key={i}
                        name={value.name}
                        link={value.linkTo}
                        img={value.img}
                        alt={value.alt}
                    />
                ))}
            </ul>
        </div>
    );
}

export { Navbar };