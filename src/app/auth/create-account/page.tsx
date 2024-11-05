'use client';

//auth/create-account
import { titleFont } from '@/config/fonts';
import { useState } from 'react';
import { redirect } from 'next/navigation';

function CreateUserPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password && email) {
      alert('User created successfully');
      redirect('/');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className={titleFont.className}>
      <h1>Create Account</h1>
      <form onSubmit={handleCreateUser} className={titleFont.className}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={titleFont.className}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={titleFont.className}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={titleFont.className}
        />
        <button type="submit" className={titleFont.className}>Create Account</button>
      </form>
    </div>
  );
}

export default CreateUserPage;
