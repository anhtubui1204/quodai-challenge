import React, { useState } from "react";
import SingleListItem from '../../../components/single-list-item/SingleListItem'

//handle list of issues
const ListComponent = ({ list }) => {
    const [activeIndex, setActiveIndex] = useState(-1)

    const DisplayList = () => {
        return list.length !== 0 ? (
            <ul className="list-group">
                {list.map((item, index) => <SingleListItem item={item} key={index} setActiveIndex={setActiveIndex} isActive={activeIndex === index} index={index} />)}
            </ul>
        ) : <p className="no-item">There is no item yet</p>
    }

    return (
        <div id="list-section">
            <DisplayList />
        </div>
    );
};

export default ListComponent;
