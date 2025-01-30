const SearchBar = ({filterText, onFilterText, inStockOnly, onInStockChange}) => {
    return (
        <form>
            <input type="text" placeholder="Busca tu producto..." value={filterText} onChange={(event) => {onFilterText(event.target.value)}}/>
            <label>
                <input type="checkbox" checked={inStockOnly} onClick={(event) => onInStockChange(event.target.checked)}/>
                Mostrar solo productos en stock
            </label>
        </form>
    )
}

export default SearchBar