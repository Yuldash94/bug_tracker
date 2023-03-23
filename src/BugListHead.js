import React, { useState } from 'react';
import Select from 'react-select';

function BugListHead() {
    const numberOptions = [
        { value: '#', label: '#' }
    ]
    const adressOptions = [
        { value: 'Adress', label: 'Adress' }
    ]
    const bugOptions = [
        { value: 'BUG', label: 'BUG' }
    ]
    const appOptions = [
        { value: 'App', label: 'App' }
    ]
    const statusOptions = [
        { value: 'Status', label: 'Status' }
    ]
    const createdOptions = [
        { value: 'Created', label: 'Created' }
    ]
    const severityOptions = [
        { value: 'Severity', label: 'Severity' }
    ]
    const priorityOptions = [
        { value: 'Priority', label: 'Priority' }
    ]
    const [number, setNumber] = useState('#')
    const [adress, setAdress] = useState('Adress')
    const [bug, setBug] = useState('BUG')
    const [app, setApp] = useState('App')
    const [status, setStatus] = useState('Status')
    const [created, setCreated] = useState('Created')
    const [severity, setSeverity] = useState('Severity')
    const [priority, setPriority] = useState('Priority')
  return (
    <tr className='bugs_list_head'> 
        <th className='bug '>
            <Select
                placeholder={number}
                defaultValue={number}
                onChange={setNumber}
                options={numberOptions}
            />
        </th>
        <th className='bug '>
            <Select
                placeholder={adress}
                defaultValue={adress}
                onChange={setAdress}
                options={adressOptions}
            />
        </th>
        <th className='bug '>
            <Select
                placeholder={bug}
                defaultValue={bug}
                onChange={setBug}
                options={bugOptions}
            />
        </th>
        <th className='bug '>
            <Select
                placeholder={app}
                defaultValue={app}
                onChange={setApp}
                options={appOptions}
            />
        </th>
        <th className='bug '>
            <Select
                placeholder={status}
                defaultValue={status}
                onChange={setStatus}
                options={statusOptions}
            />
        </th>
        <th className='bug '>
            <Select
                placeholder={created}
                defaultValue={created}
                onChange={setCreated}
                options={createdOptions}
            />
        </th>
        <th className='bug'>
            <Select
                placeholder={severity}
                defaultValue={severity}
                onChange={setSeverity}
                options={severityOptions}
            />
        </th>
        <th className='bug'>
            <Select 
                placeholder={priority}
                defaultValue={priority}
                onChange={setPriority}
                options={priorityOptions}
            />
        </th>
    </tr>
  )
}

export default BugListHead