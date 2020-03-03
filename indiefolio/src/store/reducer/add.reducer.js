import { ADD_DATA_SUCCESS } from "../type.action";

const initState = null;

const reducers = (state = initState, { type, values, error }) => {
  switch (type) {
    case ADD_DATA_SUCCESS:
      return values;
    default:
      return state;
  }
};

export default reducers;