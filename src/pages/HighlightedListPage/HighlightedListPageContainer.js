import React from 'react'
import { useSelector } from 'react-redux'
import HighlightedListComponent from './components/HighlightedListComponent'
import './highlighted-list.css'

const HighlightedListPageContainer = () => {
    const highlighted_items = useSelector(state => state.highlighted_items)

    return (
        <div id="highlighted-list">
            <div className="container">
                <h1 style={{textAlign:"center"}}>Highlighted Issues</h1>
                <HighlightedListComponent list={highlighted_items}/>
            </div>
        </div>
    )
}

export default HighlightedListPageContainer
