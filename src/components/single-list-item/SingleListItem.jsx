import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './single-list-item.css'

import { highlightAction, unHighlightAction } from '../../actions/itemAction'

const SingleListItem = ({ item }) => {
    const dispatch = useDispatch()

    const highlighted_items = useSelector(state => state.highlighted_items)
    const [ isHighlighted, setIsHighlighted] = useState(false)

    const onHandleHighlightItem = () => {
        if(isHighlighted) {
            dispatch(unHighlightAction(item))
        } else {
            dispatch(highlightAction(item))
        }
    }

    useLayoutEffect(() => {
        const found = highlighted_items.find( element => element.id === item.id)
        if(found) {
            setIsHighlighted(true)
            return;
        } else {
            setIsHighlighted(false)
            return;
        }
    },[highlighted_items])

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
