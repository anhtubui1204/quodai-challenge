import React from 'react'
import './with-loading.css'

//component for handling loading spinner
const WithLoadingComponent = ({ loading, children}) => {

    const Spin = () => <div className="loading text-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
        </div>
    </div>

    return (
        <>
            {/* if loading is true then trigger spinner, else render the children component */}
            { loading ? (
                <Spin/>
            ) : children }
        </>
    )
}

export default WithLoadingComponent
