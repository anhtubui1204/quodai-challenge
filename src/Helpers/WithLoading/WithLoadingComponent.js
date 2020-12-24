import React from 'react'
import './with-loading.css'

const WithLoadingComponent = ({ loading, children}) => {

    const Spin = () => <div className="loading text-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        </div>
    </div>

    return (
        <>
            { loading ? (
                <Spin/>
            ) : children }
        </>
    )
}

export default WithLoadingComponent
