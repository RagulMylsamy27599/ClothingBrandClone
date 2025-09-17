import { useState, useEffect, useContext } from "react";
import { FILTER_LOGO as fl } from "../../Utils/constant";
import UpdateDressContext from "../../Utils/updateDressContext";

const Filter = ({ allJackets, isFilterVisible, setIsFilterVisible }) => {
  useEffect(() => {
    const escapeClick = (e) => {
      if (e?.key?.toUpperCase() === "ESCAPE") {
        setIsFilterVisible(false);
      }
    };
    window.addEventListener("keydown", escapeClick);
    return () => {
      window.removeEventListener("keydown", escapeClick);
    };
  }, []);
  const filterDataSet = new Set();
  allJackets.forEach((jacket) => {
    filterDataSet.add(jacket?.fnlColorVariantData?.brandName);
  });
  const filterData = [...filterDataSet];

  return (
    <div className="flex flex-col relative">
      <FilterBtn
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
      <FilterDialogContainer
        allJackets={allJackets}
        filterData={filterData}
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
    </div>
  );
};

const FilterBtn = ({ isFilterVisible, setIsFilterVisible }) => {
  const btnFilterOnClick = (e) => {
    e.stopPropagation();
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className="ml-3">
      <button
        className="flex flex-row border-[1px] border-solid border-[#2F4254] pr-2 py-1.5 rounded-sm bg-[#2F4254] text-white font-semibold"
        onClick={btnFilterOnClick}
      >
        <img
          className="w-11 px-2.5 filter brightness-0 invert"
          src={fl}
          alt="Filter logo"
        ></img>
        Filter
      </button>
    </div>
  );
};

const FilterDialogContainer = ({
  allJackets,
  filterData,
  isFilterVisible,
  setIsFilterVisible,
}) => {
  const setJackets = useContext(UpdateDressContext);
  const [filterUpdateList, setFilterUpdateList] = useState([]);
  if (!isFilterVisible) {
    return;
  }
  const applyOnClick = (e) => {
    e.stopPropagation();
    setIsFilterVisible(false);
    if (filterUpdateList.length === 0) {
      setJackets(allJackets);
      return;
    }
    const updatedData = allJackets.filter((item) => {
      return filterUpdateList.includes(item?.fnlColorVariantData?.brandName);
    });
    setJackets(updatedData);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="z-10 flex flex-col absolute border-[#2F4254]/30 border-solid border-[1px] bg-white top-10 left-3 rounded pt-5 shadow-2xl h-[55vh]"
    >
      <div className="overflow-auto">
        {filterData.map((item) => {
          return (
            <FilterData
              key={item}
              brandName={item}
              checked={filterUpdateList.includes(item)}
              setFilterUpdateList={setFilterUpdateList}
              filterUpdateList={filterUpdateList}
            />
          );
        })}
      </div>
      <div className="flex flex-row mb-4 mt-7 justify-evenly items-center">
        <button
          className="bg-[#2F4254] px-3 py-2 text-white rounded font-semibold"
          onClick={applyOnClick}
        >
          Apply filter
        </button>
        <button
          className="bg-[#2F4254] px-3 py-2 text-white rounded font-semibold"
          onClick={() => {
            setIsFilterVisible(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const FilterData = ({
  brandName,
  checked,
  filterUpdateList,
  setFilterUpdateList,
}) => {
  const onCheckBoxOnClick = (event) => {
    if (event.target.checked)
      setFilterUpdateList([...filterUpdateList, event.target.id]);
    else {
      let tempFilterData = [];
      tempFilterData = filterUpdateList.filter(
        (item) => item != event.target.id
      );
      setFilterUpdateList(tempFilterData);
    }
  };
  return (
    <div className="py-1.5 flex pl-3">
      <input
        className="mx-2.5"
        type="CheckBox"
        id={brandName}
        checked={checked}
        onChange={onCheckBoxOnClick}
      />
      <label className="w-max mr-20" htmlFor={brandName}>
        {brandName}
      </label>
    </div>
  );
};

export default Filter;
