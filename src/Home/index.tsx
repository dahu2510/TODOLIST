import React, { useState, useEffect, useReducer, useMemo } from "react";
import { hot } from "react-hot-loader";
import './index.less';
import PageList from '../List/index'
import { ListTs } from './../tsConfig/index';
import Control from './../control/index'
// import context from './../useContext'
let unfinishNum: number = 0
function Home() {
    const [dataList, changeList] = useState<ListTs[]>([])
    const [todoListNum, dispatch] = useReducer(getUnfinish, unfinishNum)
    function getUnfinish() {
        unfinishNum = unfinishNum + 1
        return unfinishNum
    }
    function addData(data: ListTs) {
        data.id = dataList.length + 1
        changeList([...dataList, data])
    }

    function changeType(id: number, type: string) {
        let arr: any[] = [...dataList]
        arr.forEach(item => {
            if (item.id == id) {
                if (type === 'show') {
                    item.showType = !item.showType
                } else {
                    item.type = !item.type
                }
            }
        })
        changeList(arr)
        dispatch(false)
    }

    function filterDate(type: boolean) {
        return dataList.filter(item => {
            return item.type == type && item.showType === true
        })
    }
    useEffect(() => {
        return () => {
            localStorage.setItem('dataList', JSON.stringify(dataList))
        }
    }, [dataList])
    useEffect(() => {
        if (localStorage.getItem('dataList')) {
            changeList(JSON.parse(localStorage.getItem('dataList')))
        }
    }, [])
    return (

        < >
            <div className='header'> TODO LIST ({todoListNum}) </div>
            <div className='listContent'>
                <div className='listHeader'>
                    <span>未完成({filterDate(false).length})</span>
                    <span>完成({filterDate(true).length})</span>
                </div>
                <PageList finishDate={filterDate(true)} unFinishDate={filterDate(false)} changeType={changeType} />
            </div>
            {/* <context.provider value='{a:1}'> */}
            <Control addData={addData} />
            {/* </context.provider> */}

        </>
    )
}
export default hot(module)(Home);