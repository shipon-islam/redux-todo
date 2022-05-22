const intialState = {
  counter: 1,
};
export const counter = (state = intialState, action) => {
  if (action.type === "INC") {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === "INC5") {
    return { ...state, counter: state.counter + action.payload };
  }
  return state;
};
