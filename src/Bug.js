import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './Bug.css'


function Bug({cropTxt, bug}) {



  return (
    <tr className='bugs_list_item'> 
      <td className='bug_number'>
        {bug.number}
      </td>
      <td className='bug_adress'>
        {cropTxt(bug.adress)}
      </td>
      <td className='bug_bug'>
        {bug.bug}
      </td>
      <td className='bug_app'>
        {bug.app}
      </td>
      <td>
        <div 
          className={bug.status === 'In progress' ? 'bug_status status-progress' : 
          bug.status === 'New' ? 'bug_status status-new' :
          bug.status === 'Rejected' ? 'bug_status status-rejected' :
          bug.status === 'On review' ? 'bug_status status-review' :
          bug.status === 'Solved' ? 'bug_status status-solved' :
          'bug_status'} 
        >
          {bug.status}
        </div>
      </td>
      <td className='bug_created'>
        {bug.created}
      </td>
      <td className='bug_severity'>
      <div
          className={bug.severity === 'Low' ? 'severity_ball severity-low' :
          bug.severity === 'Medium' ? 'severity_ball severity-medium' :
          bug.severity === 'High' ? 'severity_ball severity-high' : 'severity_ball severity-critical'}
        ></div>
        {bug.severity}
      </td>
      <td className='bug_priority'>
        {bug.priority}
      </td>
  </tr>
  )
}

export default Bug