import React, { useEffect, useState } from 'react'
import ListComponent from './components/ListComponent'
import {useDispatch, useSelector} from 'react-redux';
import { getListAction } from '../../actions/listAction'
import './styles/homepage.css'
import WithLoading from '../../Helpers/WithLoading/WithLoadingComponent';
import Pagination from './components/Pagination';

const HomePageContainer = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const list = useSelector(state => state.list)

    const getList = async () => {
        setIsLoading(true)
        await dispatch(getListAction())
        setIsLoading(false)
    }

    useEffect(()=>{
        getList()
    },[])

    return (
        <div id="homepage">
            <div className="container">
                <h1 style={{textAlign:"center"}}>This is homepage</h1>
                <WithLoading loading={isLoading}>
                    <ListComponent list={list}/>
                    <Pagination/>
                </WithLoading>
            </div>
        </div>
    )
}

export default HomePageContainer
