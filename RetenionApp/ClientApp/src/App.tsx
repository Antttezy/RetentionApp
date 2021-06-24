import * as React from 'react';
import { UserForm } from './components/UserForm'
import { UserTable } from './components/UsersComponent';
import { Retention } from './components/retention';

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

        fetch('https://localhost:5001/users', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        loadUsers();
        loadRetention();
    }

    function loadUsers() {
        fetch('https://localhost:5001/users')
            .then(res => res.json())
            .then((result) => {
                setLoading(false);
                setUsers(result);
            });
    }

    function loadRetention() {
        fetch('https://localhost:5001/retention')
            .then(res => res.json())
            .then((result) => {
                setRetLoading(false);
                setRetention(result);
            });
    }

    let [users, setUsers] = React.useState([]);
    let [loading, setLoading] = React.useState(true);
    let [retLoading, setRetLoading] = React.useState(true);
    let [retention, setRetention] = React.useState(0.0);

    loadUsers();
    loadRetention();

    return (
        <div>
            <UserForm onConfirm={sendData} />
            <UserTable users={users} loading={loading} />
            <Retention loading={retLoading} retention={retention}/>
        </div>
    );
}
