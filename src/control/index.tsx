import React, { useRef, useContext } from 'react'
import './index.less'
import { ListTs } from './../tsConfig/index';
import context from './../useContext'
function Control({ addData }) {
    const inputRef = useRef(null)
    function getValue() {
        if (!inputRef.current.value) {
            // return;
        }
        const msg: ListTs = {
            name: null,
            type: false,
            id: 0,
            showType: true
        }
        msg.name = inputRef.current.value
        addData(msg)
        inputRef.current.value = null
    }
    return (
        <div className='control'>
            <input ref={inputRef} autoFocus='autoFocus' type="text" placeholder='请输入内容' />
            <button onClick={() => { getValue() }} >添加</button>
        </div>
    )
}
export default Control