import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducer';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));



// самописный аналог bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// добавляем евенты
// document
//   .getElementById('inc')
//   .addEventListener('click', inc);

// document
//   .getElementById('dec')
//   .addEventListener('click', dec);

// document
//   .getElementById('rnd')
//   .addEventListener('click', () => {
//     // payload типичное имя для дополнительных
//     // параметров которые мы передаем с action
//     const payload = Math.floor(Math.random()*10);
//     rnd(payload)
// });
// store.subscribe( () => { 
//   document.getElementById('counter').innerText = store.getState();
//   console.log(store.getState())
// });

// получаем нотификации когда store изменился
// store.subscribe( () => {
//   console.log(store.getState());
// });
// просим чтобы store выполнил действие:
//store.dispatch({type: 'INC'});