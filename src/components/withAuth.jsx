import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token'); // Или ваш способ получения токена
      if (!token) {
        Router.replace('/authorization'); // Перенаправление на страницу входа
      } else {
        setIsAuthenticated(true);
        // Здесь может быть дополнительная проверка валидности токена
      }
    }, [Router]);

    if (!isAuthenticated) {
      return null; // Или компонент загрузки
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
