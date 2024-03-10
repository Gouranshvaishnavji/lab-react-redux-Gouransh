// App.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, } from './counterSlice';
import './App.css';

const App = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div id='counterid'>
        <h1 className='counter'>{count}</h1>
        <button className='like' onClick={() => dispatch(increment())}>
          Like
        </button>
        <button className='unlike' onClick={() => dispatch(decrement())}>
          Unlike
        </button>

      </div>
    </div>
  );
};

export default App;
