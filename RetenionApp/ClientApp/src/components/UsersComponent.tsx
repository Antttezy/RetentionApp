import * as React from 'react';

export function UserTable({ users, loading }) {
    if (loading) {
        return <p>Загрузка</p>
    }
    else
        return (
            <div>
                <h1>Пользователи</h1>
                <ul>
                    {users.map((user) => {
                        return <li key={user.id}>Id: {user.id} Дата регистрации: {user.registration} Последний раз в сети: {user.lastActive}</li>
                    })}
                </ul>
            </div>
    );
}