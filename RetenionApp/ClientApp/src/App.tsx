import * as React from 'react';
import { UserForm } from './components/UserForm'

import './custom.css'

export default () => {
    function sendData(e: Event, regdate: any, lastdate: any) {
        e.preventDefault();

        var user = {
            Registration: regdate,
            LastActive: lastdate
        };

        console.log(regdate, lastdate);

        var data = JSON.stringify(user);

        var response = fetch('https://localhost:5001/users', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <UserForm onConfirm={sendData}/>
    );
}
