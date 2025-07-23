import { useState } from "react"
import { FILTER_LOGO as fl } from "../../Utils/constant"
let checkedFilterData = [];
let tempFilterData = [];

let filterData = [];





const Filter = ({ allJackets, jackets, setJackets }) => {


    const filterDataSet = new Set();
    allJackets.forEach((jacket) => {
        filterDataSet.add(jacket?.fnlColorVariantData?.brandName);
    });
    filterData = [...filterDataSet];


    const [isFilterVisible, setIsFilterVisible] = useState(false);


    return (
        <div id="filterContainer">
            <FilterBtn isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
            <FilterDialogContainer allJackets={allJackets} filterData = {filterData} isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} jackets={jackets} setJackets={setJackets} />
        </div>
    )
}

const FilterBtn = ({ isFilterVisible, setIsFilterVisible }) => {
    const btnFilterOnClick = () => {
        setIsFilterVisible(!isFilterVisible);
    }
    return (
        <div id="filterBtnContainer">
            <button id="filterBtn" onClick={btnFilterOnClick}>
                <img id="filterImg" src={fl} alt="Filter logo"></img>
                Filter
            </button>
        </div>
    )
}

const FilterDialogContainer = ({ allJackets, filterData, isFilterVisible, setIsFilterVisible, jackets, setJackets }) => {
    return (
        <div id="filterDialogContainer" style={{ display: isFilterVisible ? "block" : "none" }}>
            <div id="filterList">
                {
                    filterData.map((item) => {
                        return <FilterData key={item} brandName={item} />
                    })
                }
            </div>
            <div id="filterActionbtnContainer">
                <button className="filterActionBtn" onClick={() => {          
                    checkedFilterData = tempFilterData;
                    setIsFilterVisible(false);
                    if(checkedFilterData.length === 0){
                        setJackets(allJackets);
                        return;
                    }
                    const updatedData = allJackets.filter((item) => {
                        return checkedFilterData.includes(item?.fnlColorVariantData?.brandName);
                    })
                    setJackets(updatedData);
                }}>Apply filter</button>
                <button className="filterActionBtn" onClick={() => {
                    setIsFilterVisible(false)
                }}>Cancel</button>
            </div>
        </div>
    )
}





const FilterData = ({ brandName }) => {

    const onCheckBoxOnClick = (event) => {
        if (event.target.checked)
            tempFilterData.push(event.target.id);
        else {
            tempFilterData = tempFilterData.filter((item) => item != event.target.id);
        }
    }
    return (
        <div id="checkBoxContainer">
            <input className="filterCheckBox" type="CheckBox" id={brandName} onChange={onCheckBoxOnClick} />
            <label htmlFor={brandName}>{brandName}</label>
        </div>

    )
}

export default Filter;