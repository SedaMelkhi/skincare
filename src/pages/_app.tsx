import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import '@/styles/globals.sass';
import { store } from '@/redux/store';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
