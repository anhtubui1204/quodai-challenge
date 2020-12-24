import React from 'react'

const SingleListItem = ({ item }) => {
    return (
        <li
            className="list-group-item list-group-item-action"
            style={{ color: "black" }}
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="item-title">{item.title}</h5>
                <small className="item-id">ID: <strong>{item.id}</strong></small>
            </div>
        </li>
    )
}

export default SingleListItem
