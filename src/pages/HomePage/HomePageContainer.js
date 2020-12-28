import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import initSocket from '../../utils/initSocketIO'
import './homepage.css'
import { getListAction } from '../../actions/listAction'
import { highlightAction } from '../../actions/itemAction'

import WithLoading from '../../Helpers/WithLoading/WithLoadingComponent';
import Pagination from './components/Pagination';
import ListComponent from './components/ListComponent';

const HomePageContainer = () => {
    //initialize dispatch function
    const dispatch = useDispatch()

    //define states
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    //get list from redux store
    const list = useSelector(state => state.list)

    //get list function
    const getList = async (page) => {
        setIsLoading(true)
        await dispatch(getListAction(page))
        setIsLoading(false)
    }
    
    //rerender component once page changes
    useEffect(()=>{
        getList(page)
    },[page])

    useEffect(()=>{
        //handling receiving data from socket
        initSocket.on('sendDataFromServer', data => {
            if(data.socketId !== initSocket.id) {
                dispatch(highlightAction(data.issue))
            } else return;
        })
    },[])

    return (
        <div id="homepage">
            <div className="container">
                <h1 style={{textAlign:"center"}}>Issues</h1>
                <div id="page-section">
                    <h5>Page: {page}</h5>
                </div>
                <WithLoading loading={isLoading}>
                    <ListComponent list={list} />
                </WithLoading>
                <Pagination page={page} setPage={setPage}/>
            </div>
        </div>
    )
}

export default HomePageContainer
