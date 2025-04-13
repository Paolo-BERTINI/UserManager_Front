'use client';

import React, { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Erreur de chargement des utilisateurs:', err));
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <p>ID : {user.id}</p>
            <p>Prénom : {user.first_name}</p>
            <p>Nom : {user.last_name}</p>
            <p>Email : {user.mail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
