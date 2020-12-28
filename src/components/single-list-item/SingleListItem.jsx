import React from 'react'
import { useDispatch } from 'react-redux'
import './single-list-item.css'

import socket from '../../utils/initSocketIO'
import { highlightAction } from '../../actions/itemAction'

const SingleListItem = ({ item, setActiveIndex, isActive, index }) => {
    //initialize dispatch function
    const dispatch = useDispatch()

    const handleOnClick = (e) => {
        e.preventDefault()
        //when the item is not active (only highlighted) yet, it will be highlighted first
        //then added to the highlighted list on second click, where isActive is already true.
        if(!isActive) {
            setActiveIndex(index)
        } else {
            //handle highlight action
            dispatch(highlightAction(item))
            socket.emit('highlight', item)
            setActiveIndex(-1) //unhighlight item after add to redux store
        }
    }

    return (
        <li
            onClick={handleOnClick}
            className={`list-group-item ${isActive ? 'highlight-item' : 'list-group-item-action'}`}
            style={{ color: "black" }}
        >
            <div className="d-flex w-100 justify-content-between ">
                <h5 className="item-title">{item.title}</h5>
                <small className="item-id">ID: <strong>{item.id}</strong></small>
            </div>
        </li>
    )
}

export default SingleListItem
