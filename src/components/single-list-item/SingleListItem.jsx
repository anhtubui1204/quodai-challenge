import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './single-list-item.css'

import { highlightAction, unHighlightAction } from '../../actions/itemAction'

const SingleListItem = ({ item }) => {
    //initialize dispatch function
    const dispatch = useDispatch()

    //get highlighted items from store
    const highlighted_items = useSelector(state => state.highlighted_items)

    //function to check if current item is highlighted
    const checkIsHighlighted = () => {
        //match id in highlighted issues list
        const found = highlighted_items.find(element => element.id === item.id)
        if(found) {
            return true;
        } else {
            return false ;
        }
    }
    const isHighlighted = checkIsHighlighted();

    //handle highlight action - if current issue is already highlighted, then unhighlight it;
    //else add item to highlighted issues list
    const onHandleHighlightItem = () => {
        if(isHighlighted) {
            dispatch(unHighlightAction(item))
        } else {
            dispatch(highlightAction(item))
        }
    }

    return (
        <li
            onClick={() => onHandleHighlightItem()}
            className={`list-group-item ${isHighlighted ? 'highlight-item' : 'list-group-item-action'}`}
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
