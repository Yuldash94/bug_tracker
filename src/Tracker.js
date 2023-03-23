import React, {useCallback, useState} from 'react';
import {BiExit, BiQuestionMark } from 'react-icons/bi'
import {v4 as uuidv4} from 'uuid'
import { useClipboard } from 'use-clipboard-copy'
import BugsList from './BugsList'
import './Tracker.css'

function Tracker({setAdd, bugs, setBugs}) {

    let userUuid = uuidv4().toString()


    function cropTxt(uuidCode){
        uuidCode = uuidCode.slice(0, 6) + '...' + uuidCode.slice(-4);
        return uuidCode
    }
    const clipboard = useClipboard()
    const copyUserUuidHandler = useCallback(()=> {
        clipboard.copy(userUuid)
    }, [userUuid, clipboard])
  return (
    <div className='tracker'>
        <div className='tracker_head'>
            <div className='tracker_change'>
                <p>BUGS</p>
                <p>suggestions</p>
            </div>
            <div className='tracker_logo'>
                <img src="./img/tracker_logo.png" alt=''/>
                <p>BUG TRACKER</p>
            </div>
            <div className='tracker_user_info'>
                <div>
                    <BiQuestionMark/>
                </div>
                <div onClick={() => copyUserUuidHandler(userUuid)}>
                    <span>
                        {cropTxt(userUuid)}
                    </span>
                </div>
                <div>
                    <BiExit/>
                </div>
            </div>
        </div>

        <BugsList cropTxt={cropTxt} bugs={bugs} setBugs={setBugs} setAdd={setAdd}/>
    </div>
  )
}

export default Tracker