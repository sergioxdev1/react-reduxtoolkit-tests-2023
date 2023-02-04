import React from 'react';
import './style.css';
import { store } from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello App!</h1>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
