import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const isRegistred = useSelector((state) => state.registred.isRegistred);

    useEffect(() => {
      if (!isRegistred) {
        Router.replace('/authorization/signin'); // Перенаправление на страницу входа
      }
    }, [Router]);

    if (!isRegistred) {
      return null; // Или компонент загрузки
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
