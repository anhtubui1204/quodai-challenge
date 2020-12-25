import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './styles/homepage.css'
import { getListAction } from '../../actions/listAction'

import WithLoading from '../../Helpers/WithLoading/WithLoadingComponent';
import Pagination from './components/Pagination';
import ListComponent from './components/ListComponent';
import HighlightedItems from './components/HighlightedItems';

const HomePageContainer = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const list = useSelector(state => state.list)
    const highlighted_items = useSelector(state => state.highlighted_items)

    const getList = async (page) => {
        setIsLoading(true)
        await dispatch(getListAction(page))
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getList(page)
    },[page])

    return (
        <div id="homepage">
            <div className="container">
                <h1 style={{textAlign:"center"}}>This is homepage</h1>
                <div id="page-section">
                    <h5>Page: {page}</h5>
                </div>
                <WithLoading loading={isLoading}>
                    <ListComponent list={list} />
                </WithLoading>
                <Pagination page={page} setPage={setPage}/>
                <HighlightedItems items={highlighted_items}/>
            </div>
        </div>
    )
}

export default HomePageContainer
