import React from 'react'

//handle list of highlighted issues
const HighlightedListComponent = ({list}) => {

    const IssuesList = () => {
        return list.length !== 0 ? (
            <ul className="list-group">
                {list.map((item,index) => (
                    <li key={index} className="list-group-item text-dark">
                        <div className="d-flex w-100 justify-content-between ">
                            <h5 className="item-title">{item.title}</h5>
                            <small className="item-id">ID: <strong>{item.id}</strong></small>
                        </div>
                    </li>
                ))}
            </ul>
        ) : <p className="no-item">There is no highlighted issue yet</p>
    }

    return (
        <div id="highlighted-issues-section">
            <IssuesList/>
        </div>
    )
}

export default HighlightedListComponent
