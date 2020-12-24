import React from "react";
import SingleListItem from '../../../components/single-list-item/SingleListItem'

const ListComponent = ({ list }) => {

    const DisplayList = () => {
        return list.length !== 0 ? (
            <ul className="list-group">
                {list.map((item,index) => <SingleListItem item={item} key={index}/>)}
            </ul>
        ) : <p className="no-item">There is no item yet</p>
    }

    return (
        <div id="list-section">
            <DisplayList/>
        </div>
    );
};

export default ListComponent;
