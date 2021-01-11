// https://next.vuex.vuejs.org/

import { createStore } from "vuex";
import authentication from "./authentication"

// since we are using namespacing / modules we need to define
// the modules like this when we create the store
const Store = createStore({
    modules: {
        authentication,
    }
})

export default Store;