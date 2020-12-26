import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NotiList from './NotiList'
import top5array from '../../../utils/top5array'

const NotiDropdown = () => {
    // load highlighted issues from store
    const highlighted_items = useSelector(state => state.highlighted_items)

    // load top 5 items (sort by date-time of highlighting) 
    const top5issues = top5array(highlighted_items)

    const DropdownMenu = () => (
        <>
            <li className="head">
                <div className="row">
                    <div className="col-12">
                        <span>Notifications</span>
                        {highlighted_items.length !== 0 && <Link to={"/highlighted-issues"} className="float-right">View All</Link>}
                    </div>
                </div>
            </li>
            <NotiList notifications={top5issues}/>
        </>
    )

    return (
        <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" id="notiDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-bell" style={{ color: "#68177B", fontSize: "18px"}}></i>
            </a>

            <ul className="dropdown-menu" aria-labelledby="notiDropdown">
                <DropdownMenu/>
            </ul>
        </div>
    )
}

export default NotiDropdown
