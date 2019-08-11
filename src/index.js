import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const {inc, dec, rnd} =
  bindActionCreators( actions, dispatch);

// добавляем евенты
document
  .getElementById('inc')
  .addEventListener('click', inc);

document
  .getElementById('dec')
  .addEventListener('click', dec);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    // payload типичное имя для дополнительных
    // параметров которые мы передаем с action
    const payload = Math.floor(Math.random()*10);
    rnd(payload)
});
const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
}
store.subscribe(update);

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