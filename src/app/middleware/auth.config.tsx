"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import { redirect } from 'next/navigation';
import LoginPage from '../auth/login/page';

interface LoginCredentials {
    email: string;
    password: string;
}

interface User {
    _id: string;
    email: string;
    password: string;
  }

interface AuthContextProps {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>; 
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async (credentials: LoginCredentials) => {
    LoginPage
  },
  logout: () => {
    //
  },
  isLoading: false,
  error: null,
});


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
        // try {
        //   await login(loginData);
        //   redirect('/'); // 
        // } catch (error) {
        //   // Handle error
        // }
    
        try {
          const response = await fetch('https://login:3450', { //TODO change by api backend
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });
    
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            redirect('/'); 
          } else {
            alert('Invalid credentials'); //401
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Login failed. Please try again.');
        }
      
    
  };

  const logout = () => {
    // user state
    // remove token
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // ... (validate token, set user state)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;