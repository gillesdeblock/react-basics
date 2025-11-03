function ListSearch({ value, onInput }) {
    return (
        <div className="flex items-center px-2 py-1 gap-2 bg-gray-100">
            <input
                className="outline-none bg-transparent"
                type="text"
                placeholder="Search..."
                value={value}
                onInput={e => onInput(e.target.value)}
            ></input>
            <span className="material-symbols-outlined text-xl">
                search
            </span>
        </div>
    );
}

export default ListSearch;