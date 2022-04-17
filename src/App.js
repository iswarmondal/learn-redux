import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from './redux/index'

function App() {
  const account = useSelector((state)=> state.account);
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h2>{account}</h2>
      <button onClick={() => depositMoney(1000)}>Add 1000</button>
      <button onClick={() => withdrawMoney(1000)}>Take 1000</button>
    </div>
  );
}

export default App;
