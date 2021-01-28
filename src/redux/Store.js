import { createStore } from "redux";
import rootreducers from './Rootreducers'
const store = createStore(rootreducers);

export default store;