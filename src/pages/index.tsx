import HomePage from '@/components/screens/home/HomePage';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('http://fkmva.beget.tech/api/order.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'currentUser',
      }),
    })
      .then((response) => response.text()) // Сначала получаем текст ответа
      .then((text) => {
        console.log(text); // Печатаем текст ответа для диагностики
        return JSON.parse(text); // Затем пытаемся разобрать как JSON
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return <HomePage />;
}
