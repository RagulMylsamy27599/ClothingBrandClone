import allJackets from "../../Utils/data.json"



const debounce = (cb, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}




const Search = ({ setJackets }) => {
    const seachInput = (event) => {
        if (event.target.value.trim() == "") { 
            setJackets(allJackets);
        } else {
            const updatedData = allJackets.filter((jacket) => {
                return jacket.brand.toLowerCase().includes(event.target.value.toLowerCase());
            })
            setJackets(updatedData);
        }

    }
    const debouncedSearch = debounce(seachInput, 400);
    return (
        <input id="searchBox" type="Search" placeholder="Search for brand name" onInput={debouncedSearch} />
    )
}

export default Search;