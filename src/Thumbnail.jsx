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
    let classes = "thumbnail-container";

    for (var skill in skills)
        classes += " " + skill;

    return (
        <div className={classes}>
            <image href={image} className="thumbnail-image" alt={alt}/>
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