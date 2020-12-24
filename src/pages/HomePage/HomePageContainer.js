import React, { useEffect, useState } from 'react'
import ListComponent from './components/ListComponent'
import {useDispatch, useSelector} from 'react-redux';
import { getListAction } from '../../actions/listAction'
import './styles/homepage.css'

const HomePageContainer = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const list = useSelector(state => state.list)

    const getList = async () => {
        setIsLoading(true)
        await dispatch(getListAction())
        setIsLoading(false)
    }

    console.log(list)

    useEffect(()=>{
        getList()
        
    },[])

    return (
        <div id="homepage">
            <div className="container">
                <h1 style={{textAlign:"center"}}>This is homepage</h1>
                <ListComponent/>
            </div>
        </div>
    )
}

export default HomePageContainer
