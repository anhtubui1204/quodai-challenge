import React from 'react'
import ListComponent from './components/ListComponent'
import './styles/homepage.css'

const HomePageContainer = () => {
    return (
        <div id="homepage">
            <div className="container">
                <h1>This is homepage</h1>
                <ListComponent/>
            </div>
        </div>
    )
}

export default HomePageContainer
