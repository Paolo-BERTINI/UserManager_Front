'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function UserByIdPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Utilisateur {user.id}</h1>
      <p>ID: {user.id}</p>
      <p>Prénom: {user.first_name}</p>
      <p>Nom: {user.last_name}</p>
      <p>Email: {user.mail}</p>
    </div>
  );
}
