import { takeLatest, all } from "redux-saga/effects";

import { ADD_DATA } from "../type.action";

import { onaddData } from "./workingSagas/addData.saga";
function* sagas() {
  yield all([takeLatest(ADD_DATA, onaddData)]);
}

export default sagas;
