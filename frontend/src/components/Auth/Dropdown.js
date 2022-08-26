import {useState} from 'react';
function Dropdown() {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const [itemList, setItemList] =  useState([
        {
            name : "Male",
            value: "Male"
        },
        {
            name : "Female",
            value : "Female"
        }
    ]);

    const [selectedItemIndex, setSelectedItemIndex] =  useState(null);

    return(
            <div className = 'custom-dropdown'>
                <div className = {'custom-dropdown-selection ' + (isDropDownVisible ? "visible" : "")}
                onClick = {e => {
                    setIsDropDownVisible(!isDropDownVisible);
                }} >
                    {selectedItemIndex !== null ? itemList[selectedItemIndex].name : "Gender"} 
                </div>
                {
                    isDropDownVisible ? (<div className = 'items-holder'>
                    {
                        itemList.map((item, index) => (
                            <div key = {item.value} className = 'dropdown-item' onClick={e =>{
                                setSelectedItemIndex(index)
                                setIsDropDownVisible(false);
                            }}>
                                {item.name}
                            </div>
                        ))
                    } 
                    </div>) 
                    :
                    <></>
                }
            </div>
    );
}
export default Dropdown;