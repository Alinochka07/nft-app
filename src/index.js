import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from "./store/reducers";



const initalState = {
  nftData: [],
  isLoading: false,
  isError: false,
  errorMsg: ""
};


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


