import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import './App.css';
import {getAllSnakersAsync} from './store/snakerActions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSnakersAsync())
    // eslint-disable-next-line 
  },[])

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
