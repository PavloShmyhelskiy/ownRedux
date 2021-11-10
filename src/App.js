import './App.css';
import createStore from './my-redux';
import React, { useState } from 'react'


const initialState = {
  count: 0
};
const reducer = (state = initialState, action) =>{
  console.log("Hey, I'm in reducer");
  if (action.type === "INCREMENT") {
    return { count: state.count + action.payload.count };
  } else {
    return state;
  };
}
const store = createStore(reducer, initialState);

const action = {
  type: "INCREMENT",
  payload: {
    count: 1
  }
};

function App() {
  const [state, setState] = useState(initialState)

  const handleClick = () => {
    store.dispatch(action);
    setState({ count: store.getState().count })
  }

  return (
    <div className="App">
      <button className="App-button" onClick={handleClick}>
        Click
      </button>
      You have clicked {state.count} times
    </div>
  );
}

export default App;
