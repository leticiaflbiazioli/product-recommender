import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
