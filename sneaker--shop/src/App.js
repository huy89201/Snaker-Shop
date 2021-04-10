import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import './App.css';
import {getAllSneakersAsync} from './store/sneakerActions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSneakersAsync())
    // eslint-disable-next-line 
  },[])

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
