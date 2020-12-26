import React from 'react'

const NotiList = ({ notifications }) => {

    const SingleNotiItem = ({item}) => (
        <li className="noti-box">
            <div className="row d-flex align-items-center">
                <div className="col-8">
                    <span>{item.title}</span>
                </div>
                <div className="col-4">
                    ID: <strong>{item.id}</strong>
                </div>
            </div>
        </li>
    )

    return (
        <React.Fragment>
            { notifications.length !== 0 ? (
                notifications.map((item,index) => (
                    <SingleNotiItem item={item} key={index}/>
                ))
            ) : (
                <li className="noti-box no-noti">
                    <span>There is no highlighted item yet</span>
                </li>
            ) }
        </React.Fragment>
    )
}

export default NotiList
