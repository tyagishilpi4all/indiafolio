import { put } from "redux-saga/effects";

import axios from "../../api-interface";
import { addDataSuccess } from "../../action/addData.action";

export function* onaddData(data) {
  let values = data.values;
  try {
    // const data = yield axios.post("/addData", values);
    // yield put(addDataSuccess(data.data));

    yield put(addDataSuccess(values));
  } catch (error) {
    throw error;
  }
}
