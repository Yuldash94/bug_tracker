import React from 'react'
import Bug from './Bug'
import BugListHead from './BugListHead';
import './BugsList.css'
function BugsList( {cropTxt, bugs, setBugs, setAdd}) {
  


  const addNewBugHandler = () => {
    setAdd(true)
    console.log('add new bug');
  }
  return (
    <div className='bugs_list'>
        <div className='bugs_list_title'>
            <p>BUG LIST</p>
            <div 
              className='add_bug_button'
              onClick={() => addNewBugHandler()}
            >
               + New bug
            </div>
        </div>
        <table>
          <thead>
          <BugListHead/>
          </thead>
          <tbody>
            {bugs.map((bug) => (
              <Bug key={bug.id} cropTxt={cropTxt} bug={bug}/>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default BugsList