import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const verifyToken = async () => {
        const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/verify-token`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
              });
            
            if (response.ok) {
              const data = await response.json();
              if (data.valid) {
                setIsAuthenticated(true);
              } else {
                setIsAuthenticated(false);
                localStorage.removeItem('authToken');
              }
            } else {
              throw new Error('Failed to verify token');
            }
          } catch (error) {
            console.error('Token verification failed', error);
            setIsAuthenticated(false);
            localStorage.removeItem('authToken');
          }
        } else {
          setIsAuthenticated(false);
        }
        setLoading(false); 
      };

    verifyToken();
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};