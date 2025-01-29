const SearchBar = ({filterText, onFilterText}) => {
    return (
        <form>
            <input type="text" placeholder="Busca tu producto..." />
            <label>
                <input type="checkbox" value={filterText} onChange={(event) => {onFilterText(event.target.value)}}/>
                Mostrar solo productos en stock
            </label>
        </form>
    )
}

export default SearchBar