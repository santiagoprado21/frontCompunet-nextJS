"use client"
import { useEffect, useContext } from 'react';
import AuthContext from '@/app/middleware/auth.config';
import { redirect } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) redirect('/auth/login');
  }, [user]);

  return user ? children : null;
}