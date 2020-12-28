import React from 'react'
import { useSelector } from 'react-redux'
import HighlightedListComponent from './components/HighlightedListComponent'
import './highlighted-list.css'

const HighlightedListPageContainer = () => {
    //load top 5 recently highlighted issues from store
    const top5issues = useSelector(state => state.highlighted_items.top5issues)

    return (
        <div id="highlighted-list">
            <div className="container">
                <h1 style={{textAlign:"center"}}>Highlighted Issues</h1>
                <h5 style={{marginTop: "3rem"}}>Top 5 issues</h5>
                <HighlightedListComponent list={top5issues}/>
            </div>
        </div>
    )
}

export default HighlightedListPageContainer
