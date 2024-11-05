'use client'
import { titleFont } from '@/config/fonts';
import { useState } from 'react';
import { redirect } from 'next/navigation'

function LoginPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      redirect('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={titleFont.className}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={titleFont.className}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" className={titleFont.className}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
