const allSkills = {
    Python: "",
    Java: "",
    C: "",
    R: "",
    SQL: "",
    HTML: "",
    CSS: "",
    JavaScript: "",
    MongoDB: "",
    Express: "",
    React: "",
    Node: "",
};

const Thumbnail = (title, image, alt, skills) => {
    return (
        <div className="thumbnail-container">
            <image href={image} className="thumbnail-project" alt={alt}/>
            {
                skills.map((item) => (
                    <img href={allSkills[item]} 
                        className="skill-icon"
                        alt={item}
                    />
                ))
            }
            <h3>{title}</h3>
        </div>
    );
};

export { Thumbnail };