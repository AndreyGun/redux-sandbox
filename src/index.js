import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer);
const { dispatch } = store;
// добавляем евенты
document
  .getElementById('inc')
  .addEventListener('click', () => {
    dispatch(inc());
});
document
  .getElementById('dec')
  .addEventListener('click', () => {
    dispatch(dec());
});
document
  .getElementById('rnd')
  .addEventListener('click', () => {
    // payload типичное имя для дополнительных
    // параметров которые мы передаем с action
    const payload = Math.floor(Math.random()*10);
    dispatch(rnd(payload));
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