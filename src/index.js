import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  fancyLog();
  root.render(
    <React.StrictMode><App /></React.StrictMode>
  );
}
render();
function fancyLog() {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
  console.log(store.getState());
}

store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
