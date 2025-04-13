'use client';

import { useRouter } from 'next/router';

export default function DeleteUser() {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div>
      <p>Supprimer l’utilisateur ?</p>
      <button onClick={handleDelete}>Oui</button>
    </div>
  );
}
