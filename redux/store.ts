import { createStore } from "redux";
import contactReducer from "./contactReducers";

const store = createStore(contactReducer as any);

export default store;
