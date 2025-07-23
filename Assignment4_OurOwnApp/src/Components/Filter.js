import { useState } from "react"
import { FILTER_LOGO as fl } from "../../Utils/constant"
import allJackets from "../../Utils/data.json"

let checkedFilterData = [];
let tempFilterData = [];


const filterDataSet = new Set();
allJackets.forEach((jacket) => {
    filterDataSet.add(jacket.brand);
});


const filterData = [...filterDataSet];

const Filter = ({jackets, setJackets}) => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    return (
        <div id="filterContainer">
            <FilterBtn isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
            <FilterDialogContainer isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} jackets={jackets} setJackets={setJackets} />
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

const FilterDialogContainer = ({ isFilterVisible, setIsFilterVisible, jackets, setJackets}) => {
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
                <button className="filterActionBtn" onClick = {()=>{
                    checkedFilterData = tempFilterData;
                    setIsFilterVisible(false);
                    const updatedData = allJackets.filter((item)=>{
                        return checkedFilterData.includes(item.brand);
                    })
                    setJackets(updatedData);
                }}>Apply filter</button>
                <button className="filterActionBtn" onClick={()=>{
                    setIsFilterVisible(false)
                }}>Cancel</button>
            </div>
        </div>
    )
}





const FilterData = ({ brandName}) => {

    const onCheckBoxOnClick = (event) => {
        if(event.target.checked)
        tempFilterData.push(event.target.id);
    else{
        tempFilterData = tempFilterData.filter((item)=>item!=event.target.id);
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