'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditUser() {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState({ first_name: '', last_name: '', mail: '', password: '' });

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  };

  return (
    <div>
      <h1>Modifier l'Utilisateur</h1>
      <input value={user.first_name} onChange={e => setUser({ ...user, first_name: e.target.value })} />
      <input value={user.last_name} onChange={e => setUser({ ...user, last_name: e.target.value })} />
      <input value={user.mail} onChange={e => setUser({ ...user, mail: e.target.value })} />
      <input value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Valider</button>
    </div>
  );
}
