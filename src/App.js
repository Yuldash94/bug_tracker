import React, { useState } from 'react'
import AddBug from './AddBug';
import './App.css';
import Header from './Header';
import Tracker from './Tracker';
import {v4 as uuidv4} from 'uuid'


function App() {
  const [bugs, setBugs] = useState([
    {
        id: Math.random(),
        number: '#1',
        adress: uuidv4().toString(),
        bug: 'Button not working',
        app: 'DeNet Payments',
        status: 'New',
        created: new Date().toLocaleDateString('en-EN', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        severity: 'Critical',
        priority: 'Urgent'
    },
    {
        id: Math.random(),
        number: '#2',
        adress: uuidv4().toString(),
        bug: 'Button not working',
        app: 'DeNet Payments',
        status: 'In progress',
        created: new Date().toLocaleDateString('en-EN', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        severity: 'Critical',
        priority: 'Urgent'
    },
    {
        id: Math.random(),
        number: '#3',
        adress: uuidv4().toString(),
        bug: 'Button not working',
        app: 'DeNet Payments',
        status: 'Rejected',
        created: new Date().toLocaleDateString('en-EN', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        severity: 'Critical',
        priority: 'Urgent'
    },
    {
        id: Math.random(),
        number: '#4',
        adress: uuidv4().toString(),
        bug: 'Button not working',
        app: 'DeNet Payments',
        status: 'Solved',
        created: new Date().toLocaleDateString('en-EN', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        severity: 'Critical',
        priority: 'Urgent'
    },
    {
        id: Math.random(),
        number: '#5',
        adress: uuidv4().toString(),
        bug: 'Button not working',
        app: 'DeNet Payments',
        status: 'On review',
        created: new Date().toLocaleDateString('en-EN', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        severity: 'Critical',
        priority: 'Urgent'
    },
  ])
  const [add, setAdd] = useState(false)
  return (
    <div className="App">
      <Header />
      <Tracker setAdd={setAdd} bugs={bugs} setBugs={setBugs}/>
      {add ? <AddBug setAdd={setAdd} setBugs={setBugs} bugs={bugs}/> : null}
Work
    </div>
  );
}

export default App;
