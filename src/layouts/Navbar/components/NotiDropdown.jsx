import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NotiList from './NotiList'

const NotiDropdown = () => {
    // load all highlighted issues and top 5 recently highlighted issues  from store
    const highlighted_items = useSelector(state => state.highlighted_items.allIssues)
    const top5issues = useSelector(state => state.highlighted_items.top5issues)

    const DropdownMenu = () => (
        <>
            <li className="head">
                <div className="row">
                    <div className="col-12">
                        <span>Recently highlighted</span>
                        {highlighted_items.length !== 0 && <Link to={"/highlighted-issues"} className="float-right">View Top 5</Link>}
                    </div>
                </div>
            </li>
            <NotiList notifications={top5issues}/>
        </>
    )

    return (
        <div className="dropdown">
            <a className="dropdown-toggle notification" href="#" role="button" id="notiDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>
                    <i className="fa fa-bell" style={{ color: "#68177B", fontSize: "18px" }}></i>
                </span>
                {/* When there are 1 or more highlighted_issues, a badge will appear */}
                {highlighted_items.length > 0 && <span className="badge">{highlighted_items.length}</span>}
            </a>

            <ul className="dropdown-menu" aria-labelledby="notiDropdown">
                <DropdownMenu/>
            </ul>
        </div>
    )
}

export default NotiDropdown
