import React, { useEffect, useState } from 'react'

export default function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            setUsers(await data.json())
        }
        getData()
    }, [])
    return (
        <div>
            <h1>Список пользователей</h1>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}
