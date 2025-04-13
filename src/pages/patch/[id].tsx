'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Patch() {
  const { query } = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!query.id) return;
    fetch(`http://localhost:3001/users/${query.id}`)
      .then(res => res.json())
      .then(d => {
        setFirstName(d.first_name);
        setLastName(d.last_name);
        setMail(d.mail);
        setPassword(d.password);
      });
  }, [query.id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/users/${query.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name: firstName, last_name: lastName, mail, password }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Modifier l'utilisateur</h1>
      <input placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} />
      <input placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Valider</button>
    </form>
  );
}
