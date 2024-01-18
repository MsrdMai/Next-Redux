import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';
import { useSelector } from 'react-redux';

function MyComponent() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <button onClick={handleIncrement}>Increment (+)</button>
      <button onClick={handleDecrement}>Decrement (-)</button>
      <div>{counter}</div>
    </>
  );
}
export default MyComponent;
