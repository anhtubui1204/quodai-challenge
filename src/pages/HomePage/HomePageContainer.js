import React, { useEffect, useState } from 'react'
import ListComponent from './components/ListComponent'
import {useDispatch, useSelector} from 'react-redux';
import { getListAction } from '../../actions/listAction'
import './styles/homepage.css'
import WithLoading from '../../Helpers/WithLoading/WithLoadingComponent';
import Pagination from './components/Pagination';

const HomePageContainer = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const list = useSelector(state => state.list)

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
                    <ListComponent list={list}/>
                    <Pagination page={page} setPage={setPage}/>
                </WithLoading>
            </div>
        </div>
    )
}

export default HomePageContainer
