import * as React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function UserForm({ onConfirm }) {
    return (
        <Form>
            <label htmlFor="regDate">Дата регистрации</label>
            <input type="date" required id="regDate" />
            <label htmlFor="lastDate">Последний раз в сети</label>
            <input type="date" required id="lastDate" />
            <Button onClick={(e) => onConfirm(e, (document.getElementById('regDate') as HTMLFormElement)?.value, (document.getElementById('lastDate') as HTMLFormElement)?.value) } >Добавить</Button>
        </Form>
        );
}
