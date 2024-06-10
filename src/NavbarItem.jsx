const NavbarItem = ({ name, link, img, alt }) => {
    return (
        <li>
            <a href={link} className="nav-item">
                <img src={img} alt={alt} className="nav-icon"/>
                <span>{name}</span>
            </a>
        </li>
    );
};

export { NavbarItem };