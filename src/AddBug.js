import React, {useState, useRef} from 'react'
import Select from 'react-select';
import {v4 as uuidv4} from 'uuid'
import './AddBug.css'

function AddBug({setAdd, bugs, setBugs}) {

  const appOptions = [
    { value: 'DeNet Payments', label: 'DeNet Payments' },
    { value: 'DeNet Pass', label: 'DeNet Pass' },
    { value: 'DeNet Storage', label: 'DeNet Storage' }
  ]
  const severityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
    { value: 'Critical', label: 'Critical' },
  ]
  const priorityOptions = [
      { value: 'Urgent', label: 'Urgent' },
      { value: 'Critical', label: 'Critical' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Instant', label: 'Instant' },
      { value: 'Low', label: 'Low' }
  ]
  const [app, setApp] = useState('Select App')
  const [severity, setSeverity] = useState('Select Severity')
  const [priority, setPriority] = useState('Select Priority')
  const bugInput = useRef()
  const addFormCloseHandler = (e) => {
    e.preventDefault()
    setAdd(false)
  }
  function addNewBug() {
    if (bugInput.current.value && app.value && severity.value && priority.value) {
      const newBug = {
        id: Math.random(),
        number: `#${bugs.length+1}`,
        adress: uuidv4().toString(),
        bug: bugInput.current.value,
        app: app.value,
        status: 'New',
        created: new Date().toLocaleDateString('en-EN', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        severity: severity.value,
        priority: priority.value
      }
      setBugs([...bugs, newBug])
      setAdd(false)
    } else {
      alert('Fill in all the fields')
    }

  }
  return (
    <div className='add_form' >
      add Form
        <div className='add_form_inner'>
        <span className='add_form_close' onClick={(e) => addFormCloseHandler(e)}>X</span>
             <form >
                <label>BUG</label>
                <input className='bug_input' type='text' ref={bugInput}/>
                <label>App</label>
                <Select
                placeholder={app}
                defaultValue={app}
                onChange={setApp}
                options={appOptions}
                />
                <label>Severity</label>
                <Select
                placeholder={severity}
                defaultValue={severity}
                onChange={setSeverity}
                options={severityOptions}
                />
                <lavel>Priority</lavel>
                <Select 
                placeholder={priority}
                defaultValue={priority}
                onChange={setPriority}
                options={priorityOptions}
                />
                <input className='add_button' type='button' value='ADD NEW BUG' onClick={() => addNewBug()}/>
            </form>
        </div>
    </div>
  )
}

export default AddBug