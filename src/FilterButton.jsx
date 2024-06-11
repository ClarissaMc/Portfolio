const FilterButton = ({ terms, onClick }) => {
    return (
        <div>
            {terms.map((term, index) => {
                <button
                    key={term + index}
                    type="button"
                    className="filter-button"
                    onClick={() => onClick(term)}
                >
                    {term}
                </button>
            })}
        </div>
    );
};

export { FilterButton };