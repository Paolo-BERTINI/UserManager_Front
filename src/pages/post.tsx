import { useState } from 'react';

export default function PostUserPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name: firstName, last_name: lastName, mail, password }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ajouter un utilisateur</h1>
      <input placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} />
      <input placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Nouvel utilisateur</button>
    </form>
  );
}
