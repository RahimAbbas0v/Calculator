import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  setInputValueAction,
  incrementByUserAction,
  decrementByUserAction,
  multiplyUserAction,
  divideByUserAction,
} from "./redux/action/counteraction";
import { Button } from "reactstrap";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counterReducer.count);
  console.log(count);
  const inputValue = useSelector((state) => state.counterReducer.inputValue);
  const dispatch = useDispatch();
  return (
    < div className="img">
    <div className="container">
      <div className="center">
        <h2>{count}</h2>
        <div className="form">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => dispatch(setInputValueAction(e.target.value))}
        /></div>
        <div className="btns">
          <button
            id="button"
            onClick={() => dispatch(incrementByUserAction(inputValue))}
          >
            Plus
          </button>
          <button
            id="button"
            onClick={() => dispatch(decrementByUserAction(inputValue))}
          >
            Minus
          </button>
          <button
            id="button"
            onClick={() => dispatch(multiplyUserAction(inputValue))}
          >
            Divide
          </button>
          <button
            id="button"
            onClick={() => dispatch(divideByUserAction(inputValue))}
          >
            Multiply
          </button>
        </div>
      </div>
    </div></div>
  );
}

export default App;
