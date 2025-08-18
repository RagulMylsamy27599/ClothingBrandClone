const debounce = (cb, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const Search = ({ allJackets, setJackets }) => {
  const seachInput = (event) => {
    if (event.target.value.trim() == "") {
      setJackets(allJackets);
    } else {
      const updatedData = allJackets.filter((jacket) => {
        return jacket?.fnlColorVariantData?.brandName
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      setJackets(updatedData);
    }
  };
  const debouncedSearch = debounce(seachInput, 400);
  return (
    <input
      className=" border-solid border-[1px] border-[#2F4254] rounded-sm py-2 px-5 w-md placeholder:text-gray-400 placeholder:font-extralight focus: outline-none focus:border-[1px] focus:shadow-md focus:shadow-[border-[#2F4254]"
      id="search"
      type="Search"
      placeholder="Search for brand name"
      onInput={debouncedSearch}
    />
  );
};

export default Search;
